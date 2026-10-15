# 🎬 CineReviews

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express-v5.0-blue.svg)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-Sequelize-orange.svg)](https://sequelize.org/)
[![JavaScript](https://img.shields.io/badge/Frontend-HTML5%2FCSS3%2FJS-yellow.svg)]()
[![Live App](https://img.shields.io/badge/Render-Live%20App-brightgreen.svg)](https://cinereviews.onrender.com)

**CineReviews** is a full-stack movie discovery, rating, review, and personal watch-management web platform crafted for cinephiles. It integrates live movie metadata from **TMDB** and **OMDb**, calculates weighted hybrid rating metrics, and allows users to manage watchlists, favorites, reviews, and custom user profiles with Cloudinary-backed avatars.

---

## ✨ Features

### 🍿 Movie Discovery & Search
- **Regional & Global Discovery**: Real-time trending and popular movie lists with poster art and backdrop previews.
- **Instant Search**: Search movies by title with instant results.
- **Detailed Movie Pages**: View synopsis, release date, runtime, genres, top cast members, trailers (YouTube), and streaming providers (OTT platforms).

### 📊 Weighted Combined Rating Engine
- **Hybrid Score Calculation**: Dynamically computes a weighted average score aggregating:
  1. TMDB Vote Averages & Vote Counts
  2. OMDb IMDb Ratings & Vote Counts
  3. CineReviews Community Database User Ratings

### 🔐 Authentication & Profile Management
- **User Accounts**: Registration and login secured via **JWT** tokens and **bcrypt** password hashing.
- **Custom Profiles**: Edit display name, full name, bio, favorite genre, location, and birthdate.
- **Cloudinary Avatars**: Fast profile picture uploads processed in-memory via **Multer** and hosted securely on **Cloudinary**.

### ⭐ Reviews, Watchlist & Favorites
- **Star Ratings**: Submit or update 1-10 star ratings per movie.
- **Discussion & Comments**: Post public comments and reviews on any movie. Users can delete their own comments.
- **Watchlist**: Track movies you plan to watch with real-time status checking (`isInWatchlist`).
- **Favorites**: Save favorite movies to your personal dashboard.

---

## 🛠️ Tech Stack

| Layer | Technologies Used |
|---|---|
| **Frontend** | HTML5, CSS3 (Glassmorphism, Animations, Responsive Layouts), Vanilla JavaScript (ES6+ Fetch API) |
| **Backend** | Node.js, Express.js (REST API Architecture, Same-Origin Serving) |
| **Database** | MySQL / TiDB Serverless, Sequelize ORM (`mysql2`) with TLS |
| **External APIs** | TMDB (The Movie Database API), OMDb (Open Movie Database API) |
| **Security** | JSON Web Tokens (`jsonwebtoken`), `bcryptjs`, `helmet`, `express-rate-limit` |
| **Media Storage** | Cloudinary API (In-memory upload stream via `multer`) |
| **Deployment** | Render Web Service |

---

## 📁 Project Structure

```
CineReviews/
├── backend/
│   ├── config/
│   │   └── db.js              # Database connection & Sequelize initialization (TLS support)
│   ├── middleware/
│   │   └── authMiddleware.js  # JWT Verification middleware
│   ├── models/
│   │   ├── User.js            # User model (auth, profile details, Cloudinary avatar)
│   │   ├── Comments.js        # Movie comments & associations
│   │   ├── Favorites.js       # User favorite movies
│   │   ├── Ratings.js         # User movie ratings (1-10)
│   │   └── Watchlist.js       # User movie watchlist
│   ├── routes/
│   │   ├── auth.js            # /signup & /login API routes
│   │   ├── comments.js        # Comments CRUD endpoints
│   │   ├── favorites.js       # Favorites CRUD endpoints
│   │   ├── profile.js         # Profile fetch & Cloudinary avatar upload
│   │   ├── ratings.js         # Ratings calculation & upsert endpoints
│   │   ├── tmdb.js            # Movie search, details & hybrid ratings engine
│   │   └── watchlist.js       # Watchlist CRUD endpoints
│   ├── uploads/
│   │   └── .gitkeep           # Placeholder directory
│   ├── .env.example           # Example environment variable names
│   ├── app.js                 # Express server & static frontend serving
│   └── package.json           # Backend dependencies & startup scripts
├── frontend/
│   ├── css/
│   │   ├── home.css           # Dashboard layout & movie cards styling
│   │   ├── movieDetails.css   # Movie details page, trailer & review styling
│   │   ├── profile.css        # Profile page & modal styles
│   │   └── style.css          # Landing page & authentication card styles
│   ├── js/
│   │   ├── home.js            # Movie discovery & live search logic
│   │   └── movieDetails.js    # Movie page rendering, ratings & comments logic
│   ├── home.html              # Main dashboard for movie browsing & search
│   ├── index.html             # Landing page with splash animation
│   ├── login.html             # Login form
│   ├── movieDetails.html      # Full movie details, trailer, cast & reviews
│   ├── profile.html           # User profile & watchlist management
│   └── signup.html            # Registration form
├── .gitignore                 # Excluded files & directories
└── README.md                  # Project documentation
```

---

## 💻 Local Setup Guide

### 1. Prerequisites
- **Node.js** (v18 or higher)
- **MySQL** or **TiDB Serverless** database
- **TMDB API Key** ([Get your key](https://www.themoviedb.org/settings/api))
- **OMDb API Key** ([Get your key](http://www.omdbapi.com/apikey.aspx))
- **Cloudinary Account** ([Get your credentials](https://cloudinary.com/))

### 2. Clone the Repository
```bash
git clone https://github.com/Pranava19/CineReviews.git
cd CineReviews
```

### 3. Backend Setup
Navigate to the `backend` folder and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory based on `.env.example`:
```bash
cp .env.example .env
```

Start the server:
```bash
npm start
```
The server will connect to the database, synchronize Sequelize models, and serve both the API and frontend on `http://localhost:5000`.

### 4. Frontend Access
Once the backend is running, open `http://localhost:5000/` in your browser. All API calls are same-origin.

---

## 🔐 Environment Variables

The following environment variables are required in `backend/.env` (see `backend/.env.example`):

| Variable Name | Description |
|---|---|
| `PORT` | Server listening port (default: `5000`) |
| `DB_HOST` | Database hostname (e.g. localhost or TiDB gateway) |
| `DB_PORT` | Database port (e.g. `3306` or `4000`) |
| `DB_USER` | Database username |
| `DB_PASSWORD` | Database user password |
| `DB_NAME` | Database schema name |
| `DB_SSL` | Enable TLS/SSL connection (`true` / `false`) |
| `SECRET_KEY` | Secret key for JWT signing & verification |
| `TMDB_API_KEY` | The Movie Database API v3 key |
| `OMDB_API_KEY` | Open Movie Database API key |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary product environment cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |

---

## 🚀 Deployment Note

CineReviews is configured for single-service deployment on **Render**:
- **Root Directory**: `backend`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Health Check Path**: `/health`
- **Static Frontend**: Express serves the `frontend/` directory statically at root `/` via same-origin requests.

---

## 👤 Author

- **Name**: Pranav
- **GitHub**: [https://github.com/Pranava19](https://github.com/Pranava19)
- **Repository**: [https://github.com/Pranava19/CineReviews](https://github.com/Pranava19/CineReviews)
- **College**: PSG College of Technology

---

## 📜 License

Distributed under the MIT License.
