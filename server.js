const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simple route to check if the server is running
app.get('/', (req, res) => {
  res.send('SVG Generator Backend is running!');
});

// Endpoint to save SVG data
app.post('/save-svg', (req, res) => {
  const svgData = req.body.svgData;

  // Create the 'svgs' directory if it doesn't exist
  const svgDir = path.join(__dirname, 'svgs');
  if (!fs.existsSync(svgDir)) {
    fs.mkdirSync(svgDir);
  }

  // Define the file path where the SVG will be saved
  const filePath = path.join(svgDir, `svg-${Date.now()}.svg`);

  // Write the SVG data to a file
  fs.writeFile(filePath, svgData, (err) => {
    if (err) {
      console.error('Failed to save SVG:', err);
      return res.status(500).send('Failed to save SVG');
    }
    res.status(200).send('SVG saved successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
