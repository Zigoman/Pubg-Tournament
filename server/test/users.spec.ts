import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { describe, it } from 'mocha';
import * as mongoose from 'mongoose';

process.env.NODE_ENV = 'test';
import { app } from '../app';
import { userSchema } from '../models/user';

chai.use(chaiHttp).should();

const statusOk = 200;
const statusCreated = 201;

const User = mongoose.model('', userSchema);

describe('Users', () => {
  beforeEach(done => {
    User.remove({}, () => {
      done();
    });
  });

  describe('Backend tests for users', () => {
    it('should get all the users', done => {
      chai
        .request(app)
        .get('/api/users')
        .end((err, res) => {
          res.should.have.status(statusOk);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });

    it('should get users count', done => {
      chai
        .request(app)
        .get('/api/users/count')
        .end((err, res) => {
          res.should.have.status(statusOk);
          res.body.should.be.a('number');
          res.body.should.be.eql(0);
          done();
        });
    });

    it('should create new user', done => {
      const user = new User({ username: 'Dave', email: 'dave@example.com', role: 'user' });
      chai
        .request(app)
        .post('/api/user')
        .send(user)
        .end((err, res) => {
          res.should.have.status(statusCreated);
          res.body.should.be.a('object');
          res.body.should.have.a.property('username');
          res.body.should.have.a.property('email');
          res.body.should.have.a.property('role');
          done();
        });
    });

    it('should get a user by its id', done => {
      const user = new User({ username: 'User', email: 'user@example.com', role: 'user' });
      user.save((error, newUser) => {
        chai
          .request(app)
          .get(`/api/user/${newUser.id}`)
          .end((err, res) => {
            res.should.have.status(statusOk);
            res.body.should.be.a('object');
            res.body.should.have.property('username');
            res.body.should.have.property('email');
            res.body.should.have.property('role');
            res.body.should.have.property('_id').eql(newUser.id);
            done();
          });
      });
    });

    it('should update a user by its id', done => {
      const user = new User({ username: 'User', email: 'user@example.com', role: 'user' });
      user.save((error, newUser) => {
        chai
          .request(app)
          .put(`/api/user/${newUser.id}`)
          .send({ username: 'User 2' })
          .end((err, res) => {
            res.should.have.status(statusOk);
            done();
          });
      });
    });

    it('should delete a user by its id', done => {
      const user = new User({ username: 'User', email: 'user@example.com', role: 'user' });
      user.save((error, newUser) => {
        chai
          .request(app)
          .del(`/api/user/${newUser.id}`)
          .end((err, res) => {
            res.should.have.status(statusOk);
            done();
          });
      });
    });
  });
});
