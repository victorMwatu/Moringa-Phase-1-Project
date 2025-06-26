# Moringa-Phase-1-Project  

# WorldFlavors 🌍🍽️

A simple and engaging web application that showcases traditional dishes from various countries around the world. Built with HTML, CSS, and JavaScript, WorldFlavors provides an interactive platform for food enthusiasts to explore, rate, and discuss global cuisine.

## ✨ Features

### 🍜 Dish Display
- Beautiful food images showcasing traditional dishes
- Country names and authentic dish names
- Descriptive summaries of each dish
- Direct links to complete recipes

### 👍 User Interactions
- Like System: Favorite your preferred dishes
- Rating System: Rate dishes from 1-5 stars
- User Engagement: Track popularity through likes and ratings

### 🔍 Search & Filter
- Search by country name
- Filter by region
- Find dishes by name
- Responsive search functionality

### 💬 Community Features
- Leave comments on dishes
- Read other users' experiences
- Build a community around global cuisine

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: JSON Server (Mock REST API)
- **Hosting**: 
  - Frontend: GitHub Pages
  - Backend: Render.com
- **Data**: JSON-based storage

## 📁 Project Structure

```
WorldFlavors/
├── css/
│   └── index.css          # Main stylesheet
├── src/
│   └── index.js           # JavaScript functionality
├── node_modules/          # Dependencies (auto-generated)
├── index.html             # Main HTML file
├── db.json               # JSON database
├── package.json          # Project dependencies (auto-generated)
├── package-lock.json     # Dependency lock file (auto-generated)
└── README.md             # Project documentation
```

## 🚀 Live Demo

- **Frontend**: Hosted on [GitHub Pages](https://pages.github.com/)
- **Backend**: Hosted on [Render.com](https://render.com/)  

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your machine
- npm (Node Package Manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/worldflavors.git
   cd worldflavors
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON Server**
   ```bash
   npx json-server --watch db.json --port 3000
   ```

4. **Open the application**
   - Open `index.html` in your browser
   - Or serve it using a local development server

### Development Setup

For local development, ensure your JSON Server is running on `http://localhost:3000` and update any API endpoints in your JavaScript code accordingly.

## 📊 Data Structure

The `db.json` file contains a `countries` array with dish objects that include:

- **Country**: Name of the country where the dish originates
- **Dish**: Traditional dish name and title
- **Description**: Detailed description of the dish, ingredients, and preparation style
- **Recipe Link**: Direct link to Wikibooks recipe page with cooking instructions
- **Image**: Wikimedia Commons image URL showcasing the dish
- **Continent**: Geographic continent classification for filtering purposes
- **Flag**: Flag CDN URL displaying the country's flag
- **id**: Unique identifier for each dish entry
- **comments**: Array of user-generated comments containing user names and their reviews  

## 🌐 Deployment

### Frontend (GitHub Pages)

The front end is hosted on Github Pages https://victormwatu.github.io/Moringa-Phase-1-Project.

### Backend (Render.com)

The backend is hosted on Render.com.


## 📝 API Endpoints

When running locally with JSON Server:

- `GET /dishes` - Fetch all dishes
- `POST /dishes` - Add a new dish
- `PUT /dishes/:id` - Update a dish
- `GET /comments` - Fetch all comments
- `POST /comments` - Add a new comment

## 🎨 Future Features 

- User authentication
- Advanced filtering options
- Social sharing capabilities
- Mobile app version

## 📄 License

This project is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License - see the [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) for details.

This license is chosen to be compatible with Wikipedia and Wikimedia Commons content used in this project.

## 🙏 Acknowledgments

- Food images sourced from [Wikipedia](https://wikipedia.org) and [Wikimedia Commons](https://commons.wikimedia.org)
- Flag images provided by [Flag CDN](https://flagcdn.com)
- Recipe links from [Wikibooks](https://en.wikibooks.org)

<br>
Author: Victor N. Mwatu<br>
Date: 26 June 2025
<br>
---