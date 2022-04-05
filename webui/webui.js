const express = require('express');
const app = express();

app.get('/', (req, res) => {
  //res.redirect('/index.html');
  res.send('Welcome to Web Chess!');
});

app.use(express.static('files'));

const server = app.listen(80, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

