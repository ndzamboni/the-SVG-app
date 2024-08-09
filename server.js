const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('SVG Generator Backend is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
