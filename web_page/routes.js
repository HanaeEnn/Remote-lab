const express = require('express');
const router = express.Router();
const path = require('path');


//route to the authentification page 
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../web_page', 'index.html'));
  console.log('showing html authentification page')
});

//route to the student page
router.post('/student', (req, res) => {
  // Handle student page
});

//route to the teachers page
router.get('/teacher', (req, res) => {
  // Handle teachers page
});

module.exports = router;
