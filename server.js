// server.js (Node.js + Express server)
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
const port = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://${require('os').hostname()}:${PORT}`);
});

