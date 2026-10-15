
require('dotenv').config();
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { initDB } = require('./config/db');

const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const tmdbRoutes = require('./routes/tmdb');
const watchlistRoutes = require('./routes/watchlist');
const favoritesRoutes = require('./routes/favorites');

const commentsRoutes = require('./routes/comments');
const ratingsRoutes = require('./routes/ratings');

const app = express();
app.set('trust proxy', 1);

app.use(express.json());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
    contentSecurityPolicy: false,
  })
);

app.use(express.static(path.join(__dirname, '../frontend')));
app.get('/health', (req, res) => res.sendStatus(200));

// Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, please try again later.",
});
app.use(limiter);

// Routes
app.use('/', authRoutes);
app.use('/', profileRoutes);
app.use('/', tmdbRoutes);
app.use('/', watchlistRoutes);
app.use('/', favoritesRoutes);

app.use('/api', commentsRoutes);
app.use('/api', ratingsRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
initDB().catch(err => console.error('❌ DB Init Error:', err));
