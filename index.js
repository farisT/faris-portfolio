/* eslint no-console: 0 */
const express = require('express');

const app = express();
const path = require('path');

app.set('views', `src/views`);
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
  res.render('index.html');
});
app.get('/projectone', (req, res) => {
    res.render('projectone.html');
  });
  app.get('/projecttwo', (req, res) => {
    res.render('projecttwo.html');
  });
  app.get('/projectthree', (req, res) => {
    res.render('projectthree.html');
  });
  app.get('/about', (req, res) => {
    res.render('about.html');
  });

app.listen(3000, () => {
  console.log('listening at 3000');
});
