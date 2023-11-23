const express = require('express');
const router = express.Router();
const path = require('path');


//route to the authentification page 
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../web_page', 'index.html'));
  console.log('showing html authentification page')
});

//route to the student page
router.get('/student', (req, res) => {
  console.log('showing student page')
  res.sendFile(path.join(__dirname, '../web_page', 'student.html'));
  console.log('showing html student page')
});

//route to the teachers page
router.get('/teacher', (req, res) => {
  console.log('showing teacher page')
  res.sendFile(path.join(__dirname, '../web_page', 'teacher.html'));
  console.log('showing html teacher page')
});

module.exports = router;
