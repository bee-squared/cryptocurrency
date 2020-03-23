const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('build'));
// app.use('/', routes);

app.listen(PORT, () => {console.log(`The server is up and running on port: ${PORT}`)});