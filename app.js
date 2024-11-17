// Import the Express library to create and configure the web server.
const express = require('express');
// Create an instance of the Express application.
const app = express();
// Import the path module to work with file and directory paths.
const path = require('path');
// Import JSON data from the specified file (data/data.json).
const data = require('./data/data.json');

// Serve static files (HTML, CSS, images)
// The `express.static()` middleware serves static files from the "public" directory.
// It allows files like HTML, CSS, JavaScript, and images to be accessed directly by the client.
app.use(express.static(path.join(__dirname, 'public')));

// Create an endpoint to return the JSON data
// This defines a route handler for the `/api/data` endpoint.
// When a GET request is made to `/api/data`, the server responds with the JSON data.
// `res.json(data)` sends the imported JSON file content as a response.
app.get('/api/data', (req, res) => {
  res.json(data); // Sends the JSON data to the client making the request.
});

// Start the server
// The `listen` method starts the server on port 3000 and keeps it running to handle requests.
// A callback function logs a message indicating that the server is running.
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
  // This message helps confirm that the server is active and accessible at the specified address.
});
