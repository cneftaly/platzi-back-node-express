const express = require('express');
const router = express.Router();

router.get('/categories', (req, res) => {
  res.json([
    {
      name: 'Category 1'
    },
    {
      name: "Category 2"
    },
    {
      name: "Category 3"
    }
  ])
})

module.exports = router;
