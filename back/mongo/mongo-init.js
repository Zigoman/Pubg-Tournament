db.createUser({
  user: 'admin',
  pwd: 'netwitness',
  roles: [
    {
      role: 'readWrite',
      db: 'pubg'
    }
  ]
});
