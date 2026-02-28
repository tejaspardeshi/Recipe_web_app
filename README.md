# Recipe App

A modern, stylish, and responsive web application for browsing, searching, and filtering recipes by cuisine. Built with vanilla JavaScript, HTML, and CSS.

---

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Customization](#customization)
- [Credits](#credits)
- [License](#license)

---

## Features

- Browse a curated list of recipes with images and details
- Filter recipes by cuisine using checkboxes
- Search recipes by name in real-time
- View detailed recipe information and video on a dedicated page
- Responsive and modern UI with custom CSS

---

## Screenshots

| Home Page                       | Single Recipe Page                                |
| ------------------------------- | ------------------------------------------------- |
| ![Home](./screenshots/home.png) | ![Single Recipe](./screenshots/single-recipe.png) |

> _Add your own screenshots in the `screenshots/` folder for best results._

---

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Edge, Safari)
- No build tools or backend required

### Running Locally

1. **Clone or Download** this repository.
2. Open `index.html` in your browser.

---

## Project Structure

```
├── getCuisine.js           # Renders cuisine filter checkboxes
├── getRecipeCard.js        # Renders recipe cards
├── index.html              # Main homepage
├── index.js                # Main JS logic (search, filter, navigation)
├── reset.css               # CSS reset
├── single-recipe.html      # Single recipe detail page
├── single-recipe.js        # JS for single recipe page
├── style.css               # Main styles
├── utility.css             # Utility CSS classes
└── screenshots/            # (Optional) Add screenshots here
```

---

## Usage

- **Browse Recipes:** All recipes are shown on the homepage.
- **Filter by Cuisine:** Use the checkboxes on the left to filter recipes.
- **Search:** Type in the search box to filter recipes by name.
- **View Details:** Click on a recipe image to view its details and video.

---

## Customization

- To add more recipes or cuisines, update the mock data arrays in `index.js` and `single-recipe.js`.
- To connect to a real API, replace the mock data and use Axios (already included).
- Update styles in `style.css` and `utility.css` for branding.

---

## Credits

- [Unsplash](https://unsplash.com/) and other sources for sample images
- [Axios](https://axios-http.com/) for HTTP requests (included via CDN)
- [Google Fonts](https://fonts.google.com/) for typography

---

## License

This project is licensed under the MIT License.
