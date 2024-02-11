// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();
const port = 3000;

// Define a route handler for the root path
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running and listening on port ${port}`);
});
