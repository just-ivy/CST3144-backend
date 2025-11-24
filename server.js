const express = require('express');
const cors = require('cors');
const path = require('path');
const logger = require('./middleware/logger');
const connectDB = require('./database');

const lessonRoutes = require('./route/lessonRoutes');
const orderRoutes = require('./route/orderRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

// Homepage route (fixes Cannot GET /)
app.get('/', (req, res) => {
    res.send('Backend is running');
});

// Static images
app.use('/images', express.static(path.join(__dirname, 'public/lesson-images')));

// Routes
app.use('/lessons', lessonRoutes);
app.use('/orders', orderRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`)
);
