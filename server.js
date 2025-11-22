const express = require('express');
const cors = require('cors');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Middleware
app.use(logger);

// Serve lesson images - static middleware
app.use('/images', express.static(path.join(__dirname, 'public/lesson-images')));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
