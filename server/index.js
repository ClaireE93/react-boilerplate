const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + './../public'));
app.use(bodyParser.json());

const port = 3000;

const server = app.listen(port, function() {
  console.log(`App listening at ${port}`);
});
