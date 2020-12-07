const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

//View engine and public path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  console.log('Index');
  return res.render('index');
});

app.listen(port, () => {
  console.log(`Server at localhost:${port}`);
});
