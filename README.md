# 🎬 CineReviews (Cinemind)

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express-v5.0-blue.svg)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-Sequelize-orange.svg)](https://sequelize.org/)
[![JavaScript](https://img.shields.io/badge/Frontend-HTML5%2FCSS3%2FJS-yellow.svg)]()
[![Live Backend](https://img.shields.io/badge/Render-Deployed-brightgreen.svg)](https://movie-backend-1g7r.onrender.com)
[![Live App](https://img.shields.io/badge/Netlify-Live%20App-blue.svg)](https://cinemindss.netlify.app)

**CineReviews** (also known as *Cinemind*) is a full-stack movie discovery, rating, review, and personal watch-management web platform crafted for cinephiles. It integrates live movie metadata from **TMDB** and **OMDb**, calculates weighted hybrid rating metrics, and allows users to manage watchlists, favorites, reviews, and custom user profiles.

---

## 🚀 Live Demo

- **Frontend App**: [https://cinemindss.netlify.app](https://cinemindss.netlify.app)
- **Backend API**: [https://movie-backend-1g7r.onrender.com](https://movie-backend-1g7r.onrender.com)

---

## ✨ Features

### 🍿 Movie Discovery & Search
- **Regional & Global Discovery**: Real-time trending and popular movie lists with poster art and backdrop previews.
- **Instant Search**: Search movies by title with instant results.
- **Detailed Movie Pages**: Includes synopsis, release date, runtime, genres, top cast members, trailers (YouTube), and streaming providers (OTT platforms in India).

### 📊 Weighted Combined Rating Engine
- **Hybrid Score Calculation**: Dynamically computes a weighted average score aggregating:
  1. TMDB Vote Averages & Vote Counts
  2. OMDb IMDb Ratings & Vote Counts
  3. CineReviews Community Database User Ratings

### 🔐 Authentication & Profile Management
- **User Accounts**: Registration and login secured via **JWT** tokens and **bcrypt** password hashing.
- **Custom Profiles**: Edit display name, full name, bio, favorite genre, location, birthdate, and avatar image.
- **Avatar Uploads**: Profile picture upload handling with validation and file storage via **Multer**.

### ⭐ Reviews, Watchlist & Favorites
- **Star Ratings**: Submit or update 1-5 star ratings per movie.
- **Discussion & Comments**: Post public comments and reviews on any movie. Users can delete their own comments.
- **Watchlist**: Track movies you plan to watch with real-time status checking (`isInWatchlist`).
- **Favorites**: Save favorite movies to your profile dashboard.

---

## 🛠️ Tech Stack

| Layer | Technologies Used |
|---|---|
| **Frontend** | HTML5, CSS3 (Glassmorphism, Animations, Responsive Layouts), Vanilla JavaScript (ES6+ Fetch API) |
| **Backend** | Node.js, Express.js (REST API Architecture) |
| **Database** | MySQL, Sequelize ORM (`mysql2`) |
| **External APIs** | TMDB (The Movie Database API), OMDb (Open Movie Database API) |
| **Security** | JSON Web Tokens (`jsonwebtoken`), `bcryptjs`, `helmet`, `express-rate-limit`, CORS |
| **File Handling** | `multer` (Profile avatar storage & MIME-type validation) |
| **Deployment** | Netlify (Frontend), Render (Backend) |

---

## 📁 Repository Structure

```
CineReviews/
├── backend/
│   ├── config/
│   │   └── db.js              # MySQL connection & Sequelize initialization
│   ├── controllers/
│   │   └── authController.js  # Registration & Login handler logic
│   ├── middleware/
│   │   ├── authMiddleware.js  # JWT Verification middleware
│   │   └── upload.js          # Multer file upload setup
│   ├── models/
│   │   ├── User.js            # User model (auth, profile details, avatar)
│   │   ├── Comments.js        # Movie comments & author association
│   │   ├── Favorites.js       # User favorite movies
│   │   ├── Ratings.js         # User movie rating scores
│   │   └── Watchlist.js       # User movie watchlist
│   ├── routes/
│   │   ├── auth.js            # /signup & /login API routes
│   │   ├── profile.js         # Profile fetch & update (/profile)
│   │   ├── tmdb.js            # Movie search, details & hybrid ratings engine
│   │   ├── watchlist.js       # Watchlist CRUD endpoints
│   │   ├── favorites.js       # Favorites CRUD endpoints
│   │   ├── comments.js        # Comments CRUD endpoints
│   │   └── ratings.js         # Ratings calculation & upsert endpoints
│   ├── uploads/               # Directory for user profile pictures
│   ├── app.js                 # Express application entry point & middleware stack
│   ├── package.json           # Dependencies & startup scripts
│   └── .env                   # Environment config (git-ignored)
├── frontend/
│   ├── index.html             # Landing page with splash animation
│   ├── login.html             # Login form
│   ├── signup.html            # Registration form
│   ├── home.html              # Main dashboard for movie browsing & search
│   ├── movieDetails.html      # Full movie details, trailer, cast & reviews page
│   ├── profile.html           # User profile & watchlist management
│   ├── style.css              # Landing, login & global UI styles
│   ├── home.css               # Dashboard layout styles
│   ├── movieDetail.css        # Movie detail page layout & review styles
│   ├── profile.css            # Profile page & modal styles
│   ├── homescript.js          # Home page interactivity & search logic
│   ├── movieDetails.js        # Movie page data rendering & comment submission
│   └── script.js              # Global helper functions
├── .gitignore                 # Excluded files & directories
└── README.md                  # Project documentation
```

---

## 🔌 API Endpoint Documentation

### Authentication
- `POST /signup` — Register a new user (`username`, `email`, `password`)
- `POST /login` — Authenticate user and receive JWT token (`email`, `password`)

### Profile (`Authorization: Bearer <token>`)
- `GET /profile` — Retrieve current user profile
- `PUT /profile` — Update user profile details and profile picture (Multipart Form Data)

### Movies & Ratings (TMDB / OMDb Integration)
- `GET /popular-movies` — Get popular Tamil & regional movies
- `GET /search?query=:query` — Search movies by title
- `GET /movieDetails?id=:id` — Get basic movie details from TMDB
- `GET /fullMovieDetails?id=:id` — Get combined metadata (TMDB cast/trailer + OMDb IMDb rating + local user score + watch providers)
- `GET /watch-providers?id=:id` — Get regional streaming providers for a movie

### Watchlist & Favorites (`Authorization: Bearer <token>`)
- `GET /watchlist` — Get all items in user's watchlist
- `POST /watchlist` — Add movie to watchlist (`movieId`)
- `DELETE /watchlist/:movieId` — Remove movie from watchlist
- `GET /watchlist/check?movieId=:id` — Check if movie is in watchlist
- `GET /favorites` — Get all user favorites
- `POST /favorites` — Add movie to favorites (`movieId`)
- `DELETE /favorites/:movieId` — Remove movie from favorites
- `GET /favorites/check?movieId=:id` — Check if movie is in favorites

### Comments & Ratings
- `GET /api/comments/:movieId` — Fetch public comments for a movie
- `POST /api/comments` — Add a comment (`movieId`, `text`) *(Auth required)*
- `DELETE /api/comments/:id` — Delete a comment *(Author auth required)*
- `GET /api/ratings/:movieId` — Get community rating total and vote count
- `POST /api/ratings` — Upsert user rating (`movieId`, `score`) *(Auth required)*

---

## 💻 Local Installation & Setup Guide

### 1. Prerequisites
- **Node.js** (v18 or higher)
- **MySQL** Database Server
- **TMDB API Key** ([Get your key](https://www.themoviedb.org/settings/api))
- **OMDb API Key** ([Get your key](http://www.omdbapi.com/apikey.aspx))

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

Create a `.env` file in the `backend/` directory:
```env
PORT=5000
SECRET_KEY=your_jwt_secret_key
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=cinereviews_db
TMDB_API_KEY=your_tmdb_api_key
OMDB_API_KEY=your_omdb_api_key
```

Start the backend server:
```bash
npm start
```
The backend server will automatically connect to MySQL, initialize the `cinereviews_db` database, synchronize Sequelize models, and start listening on `http://localhost:5000`.

### 4. Frontend Setup
Open `frontend/index.html` in your browser or run a local development server (such as Live Server in VS Code).

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more details.
