// Mock data for recipes (should match index.js)
const recipes = [
  {
    ID: "1",
    "image-url": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    TranslatedRecipeName: "Spaghetti Carbonara",
    Cuisine: "Italian",
    TotalTimeInMins: 30,
    videoUrl: "https://www.youtube.com/embed/3AAdKl1UYZs"
  },
  {
    ID: "2",
    "image-url": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/chicken-tikka-masala.jpg",
    TranslatedRecipeName: "Chicken Tikka Masala",
    Cuisine: "Indian",
    TotalTimeInMins: 45,
    videoUrl: "https://www.youtube.com/embed/vK6G9F7Kp6E"
  },
  {
    ID: "3",
    "image-url": "https://tse4.mm.bing.net/th/id/OIP.g1YHcYW0aAnnlPU3rtgW6AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    TranslatedRecipeName: "Sushi Roll",
    Cuisine: "Japanese",
    TotalTimeInMins: 50,
    videoUrl: "https://www.youtube.com/embed/8pQOa1g-5e4"
  },
  {
    ID: "4",
    "image-url": "https://blog.amigofoods.com/wp-content/uploads/2021/02/tacos-al-pastor.jpg",
    TranslatedRecipeName: "Tacos al Pastor",
    Cuisine: "Mexican",
    TotalTimeInMins: 35,
    videoUrl: "https://www.youtube.com/embed/1fqxMuPmGak"
  },
];

const cardId = localStorage.getItem("id");
const singleRecipe = recipes.find((r) => r.ID === cardId);

const container = document.getElementById("single-recipe-container");
if (singleRecipe && container) {
  let videoEmbed = "";
  if (singleRecipe.videoUrl) {
    if (singleRecipe.videoUrl.includes("youtube.com/embed/")) {
      videoEmbed = `<div style="margin: 2rem 0; text-align:center;"><iframe width="100%" height="315" src="${singleRecipe.videoUrl}" title="Recipe Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
    } else {
      videoEmbed = `<div style="margin: 2rem 0; text-align:center;"><video width="100%" height="315" controls><source src="${singleRecipe.videoUrl}" type="video/mp4">Your browser does not support the video tag.</video></div>`;
    }
  }
  container.innerHTML = `
    <div class="card shadow" style="max-width: 600px; margin: 0 auto;">
      <div class="card-image-container">
        <img class="card-image" src="${singleRecipe["image-url"]}" alt="${singleRecipe.TranslatedRecipeName}">
      </div>
      <div class="recipe-details">
        <div class="title" style="font-size:1.5rem; font-weight:bold;">${singleRecipe.TranslatedRecipeName}</div>
        <div class="ratings" style="margin-top: 1rem;">
          <span><b>Cuisine:</b> ${singleRecipe.Cuisine}</span>
          <span><b>Time:</b> ${singleRecipe.TotalTimeInMins} mins</span>
        </div>
        ${videoEmbed}
      </div>
    </div>
  `;
} else if (container) {
  container.innerHTML = '<div class="info fs-large">Recipe not found.</div>';
}
