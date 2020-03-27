const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('build'));

app.get('/*', (req,res) =>{
	res.sendFile(path.join(__dirname+'/../build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {console.log(`The server is up and running on port: ${PORT}`)});