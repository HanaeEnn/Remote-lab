const express = require('express');
const router = express.Router();
const path = require('path');


//route to the first authentification page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../web_page', 'index.html'));
  const path = require('path');
});

//
router.post('/student', (req, res) => {
  // Handle login logic
});

//
router.get('/teacher', (req, res) => {
  // Handle dashboard logic
});

module.exports = router;
