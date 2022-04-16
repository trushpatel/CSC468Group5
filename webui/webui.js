const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.redirect('/index.html');
  //res.redirect('/index.html');
  res.send('Welcome to Web Chess!');
});

app.use(express.static('files'));
