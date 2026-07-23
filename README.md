# 🎬 CineReviews (Cinemind)

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express-v5.0-blue.svg)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-Sequelize-orange.svg)](https://sequelize.org/)
[![JavaScript](https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-yellow.svg)]()

**CineReviews** (also known as *Cinemind*) is a full-stack web application designed for cinephiles to discover movies, explore details, rate and review titles, manage custom watchlists, and maintain a personalized favorites list.

---

## ✨ Features

- 🍿 **Movie Discovery**: Browse trending, popular, and top-rated movies powered by **TMDB API**.
- 🔍 **Search & Details**: Search for any movie and view detailed information including cast, ratings, synopsis, and trailers.
- 🔐 **User Authentication**: Secure user registration and login using **JWT** and **bcrypt** password hashing.
- ⭐ **Ratings & Reviews**: Rate movies and post/read user comments and reviews.
- 📌 **Watchlist & Favorites**: Save movies to your personal watchlist or mark them as favorites.
- 👤 **User Profiles**: Manage user profiles with avatar upload functionality via **Multer**.
- 🛡️ **Security & Rate Limiting**: Built with **Helmet** for security headers and **express-rate-limit** for API rate protection.

---

## 🛠️ Tech Stack

### **Frontend**
- **HTML5**, **Vanilla CSS3** (Custom styling, glassmorphism, animations)
- **JavaScript (ES6+)** with Fetch API

### **Backend**
- **Node.js** & **Express.js** (RESTful API architecture)
- **Sequelize ORM** with **MySQL** database
- **JWT (JSON Web Tokens)** for authentication
- **Multer** for file handling & profile image uploads
- **Axios** for external API integrations (TMDB API)

---

## 📁 Project Structure

```
CineReviews/
├── backend/
│   ├── config/          # Database connection configuration (Sequelize)
│   ├── controllers/     # Authentication & core business logic
│   ├── middleware/      # Auth & file upload middlewares
│   ├── models/          # Sequelize models (User, Comments, Ratings, Watchlist, Favorites)
│   ├── routes/          # Express API route declarations
│   ├── uploads/         # Directory for uploaded user avatars
│   ├── app.js           # Express server entry point
│   └── package.json     # Node.js dependencies & scripts
├── frontend/
│   ├── index.html       # Landing page
│   ├── login.html       # Login page
│   ├── signup.html      # Registration page
│   ├── home.html        # Main movie discovery dashboard
│   ├── movieDetails.html# Movie details, reviews, and ratings
│   ├── profile.html     # User profile page
│   ├── *.css            # Modular styles
│   └── *.js             # Interactive scripts
├── .gitignore           # Git ignore rules
└── README.md            # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MySQL Server](https://www.mysql.com/)
- [TMDB API Key](https://www.themoviedb.org/documentation/api)

### Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Pranava19/CineReviews.git
   cd CineReviews
   ```

2. **Configure Backend Environment Variables**
   Navigate to the `backend` directory and create a `.env` file:
   ```bash
   cd backend
   ```
   Create `.env` with the following variables:
   ```env
   PORT=5000
   JWT_SECRET=your_jwt_secret_key
   DB_HOST=localhost
   DB_USER=your_db_user
   DB_PASS=your_db_password
   DB_NAME=cinereviews_db
   TMDB_API_KEY=your_tmdb_api_key
   ```

3. **Install Backend Dependencies**
   ```bash
   npm install
   ```

4. **Start the Backend Server**
   ```bash
   npm start
   ```
   The backend server will run at `http://localhost:5000`.

5. **Launch the Frontend**
   Open `frontend/index.html` in your browser or serve it using a local static web server.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
