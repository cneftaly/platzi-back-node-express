const express = require('express');
const router = express.Router();
const faker = require('faker');

router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    users.push({
      name: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    });
  }
  res.json(users);
});

module.exports = router;
