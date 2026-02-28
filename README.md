<div align="center">

# 🍳 Recipe App

*A modern, sleek, and responsive web application for discovering, searching, and filtering culinary delights.*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](#)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](#)

[**View Live Demo**](#) </div>

---

## 📑 Table of Contents
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Usage](#-usage)
- [Customization](#-customization)
- [Credits & Author](#-credits--author)
- [License](#-license)

---

## ✨ Features

- 🔍 **Real-Time Search:** Find recipes instantly by typing in the search bar.
- 🏷️ **Dynamic Filtering:** Seamlessly filter recipes by cuisine using interactive checkboxes.
- 📱 **Fully Responsive:** A modern UI built with custom CSS that looks great on desktop, tablet, and mobile.
- 🎬 **Immersive Details:** Dedicated recipe pages featuring in-depth information and embedded video tutorials.
- ⚡ **Lightweight:** Built entirely with Vanilla JavaScript, HTML, and CSS—no heavy frameworks required.

---

## 📸 Screenshots

| Home Page | Single Recipe Page |
| :---: | :---: |
| <img src="./screenshots/home.png" alt="Home Page" width="400"/> | <img src="./screenshots/single-recipe.png" alt="Single Recipe Page" width="400"/> |

> *Tip: Place your high-resolution images in the `screenshots/` directory for the best display.*

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari).
- *No build tools or backend setup required!*

### Running Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/recipe-app.git](https://github.com/yourusername/recipe-app.git)
Navigate to the project directory:

Bash
cd recipe-app
Open the app:
Simply open index.html in your preferred web browser, or use an extension like VS Code Live Server.

📂 Project Structure
Plaintext
📦 recipe-app
 ┣ 📜 getCuisine.js      # Renders cuisine filter checkboxes
 ┣ 📜 getRecipeCard.js   # Generates and renders recipe cards
 ┣ 📜 index.html         # Main homepage structure
 ┣ 📜 index.js           # Core logic (search, filter, navigation)
 ┣ 📜 reset.css          # CSS reset for cross-browser consistency
 ┣ 📜 single-recipe.html # Single recipe detail page structure
 ┣ 📜 single-recipe.js   # Logic for fetching/displaying single recipe
 ┣ 📜 style.css          # Main application styles
 ┣ 📜 utility.css        # Reusable utility CSS classes
 ┗ 📂 screenshots/       # Project screenshots
💻 Usage
Browse: Scroll through the homepage to discover curated recipes.

Filter: Check the cuisine boxes on the sidebar to narrow down your options.

Search: Start typing in the search bar to filter visible recipes by name.

Learn More: Click on any recipe image or card to open its dedicated details page, complete with instructions and video.

🛠️ Customization
Add Data: To add more recipes or cuisines, simply update the mock data arrays located in index.js and single-recipe.js.

API Integration: Ready to scale? Replace the mock data with live fetching. Axios is already included via CDN for easy HTTP requests.

Styling: Tweak style.css and utility.css to match your own branding and design preferences.

🤝 Credits & Author
Built by Tejas Pardeshi

GitHub: @yourusername

LinkedIn: Your Profile

Resources Used:

Images sourced from Unsplash.

Typography powered by Google Fonts.

HTTP requests handled by Axios.

📄 License
This project is open-source and available under the MIT License.