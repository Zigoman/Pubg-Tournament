const User = require('./User.ts');
const Tournaments = require('./Tournaments.ts');

module.exports = (req, res) => {
  const delay = 500;
  setTimeout(() => {
    if (req.url.indexOf('/auth') !== -1) {
      if (req.url.indexOf('/signup') !== -1) {
        getUser(req, res);
      } else if (req.url.indexOf('/login') !== -1) {
        getUser(req, res);
      } else {
        getUser(req, res);
      }
    }

    if (req.url.indexOf('/getTournaments') !== -1) {
      getTournaments(req, res);
    }
  }, delay);
};

const getUser = (req, res) => {
  res.send(User);
};

const getTournaments = (req, res) => {
  res.send(Tournaments);
};
