document.addEventListener("DOMContentLoaded", () => {
  const categoryDescriptions = {
    painting: "Professional painters for walls, homes, and commercial spaces.",
    electrical: "Certified electricians for wiring, installations, and repairs.",
    carpentry: "Skilled carpenters for furniture, doors, cabinets & more.",
    plumbing: "Licensed plumbers for fixing leaks and full installations.",
    "generator repair": "Experts in generator maintenance and repairs.",
    "house cleaning": "Trusted cleaners for home, office, and deep cleaning."
  };

  const mockProviders = {
    painting: [
      {
        name: "Kolade Artworks",
        location: "Lagos",
        image: "images/painting1.jpg",
        rating: 4,
        bio: "Interior & exterior painting with vibrant finishes."
      },
      {
        name: "PaintPro Nigeria",
        location: "Abuja",
        image: "images/painting2.jpg",
        rating: 5,
        bio: "10+ years in large-scale residential painting projects."
      }
    ],
    electrical: [
      {
        name: "Femi Electricians",
        location: "Lagos",
        image: "images/electrician1.jpg",
        rating: 5,
        bio: "Fast, safe, and affordable wiring services."
      },
      {
        name: "PowerFix Solutions",
        location: "Port Harcourt",
        image: "images/electrician2.jpg",
        rating: 4,
        bio: "Panel setup, inverter, and rewiring pros."
      }
    ],
    carpentry: [
      {
        name: "Abdul Carpentry Co.",
        location: "Kano",
        image: "images/carpentry1.jpg",
        rating: 4,
        bio: "Furniture, doorframes, wardrobes built to order."
      }
    ],
    plumbing: [
      {
        name: "Aisha Bello",
        location: "Abuja",
        image: "images/plumber1.jpg",
        rating: 5,
        bio: "Specialist in clean water systems and leak repairs."
      }
    ],
    "generator repair": [
      {
        name: "GenFix Masters",
        location: "Lagos",
        image: "images/genrepair1.jpg",
        rating: 5,
        bio: "We fix all brands of generators, small and industrial."
      }
    ],
    "house cleaning": [
      {
        name: "SparkleClean Services",
        location: "Lagos",
        image: "images/cleaning1.jpg",
        rating: 4,
        bio: "Deep home cleaning and move-out cleaning services."
      }
    ]
  };

  const urlParams = new URLSearchParams(window.location.search);
  const categoryKey = urlParams.get("category")?.toLowerCase();

  const nameEl = document.getElementById("category-name");
  const descEl = document.getElementById("category-description");
  const container = document.getElementById("provider-list");

  if (!categoryKey || !mockProviders[categoryKey]) {
    nameEl.textContent = "Category Not Found";
    descEl.textContent = "Please choose a valid service category.";
    container.innerHTML = "";
    return;
  }

  nameEl.textContent = `${capitalizeWords(categoryKey)} Services`;
  descEl.textContent = categoryDescriptions[categoryKey] || "Find reliable professionals for your task.";

  const providers = mockProviders[categoryKey] || [];

  if (providers.length === 0) {
    container.innerHTML = "<p>No providers found in this category.</p>";
  } else {
    container.innerHTML = ""; // Clear before adding new ones
    providers.forEach((p, index) => {
      container.innerHTML += `
        <div class="provider-card">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>${p.location}</p>
          <div class="rating">${renderStars(p.rating)}</div>
          <p>${p.bio}</p>
          <button class="view-btn" data-index="${index}">View Profile</button>
        </div>
      `;

      // After providers.forEach block
document.querySelectorAll(".view-btn").forEach((btn, i) => {
  btn.addEventListener("click", () => {
    const selected = providers[i];
    localStorage.setItem("selectedProvider", JSON.stringify(selected));
    window.location.href = "provider-profile.html";
  });
});


    });
  }

  function renderStars(rating) {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  }

  function capitalizeWords(str) {
    return str
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  document.querySelector(".search-btn").addEventListener("click", () => {
    const location = document.querySelector(".category-filter input").value.toLowerCase();
    const sort = document.querySelector(".category-filter select").value;

    let filtered = providers.filter(p =>
      p.location.toLowerCase().includes(location)
    );

    if (sort === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sort === "new") {
      filtered.reverse(); // You can improve this with a timestamp later
    }

    renderProviders(filtered);
  });

  function renderProviders(providerList) {
    container.innerHTML = providerList.length
      ? providerList.map((p, index) => `
        <div class="provider-card">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>${p.location}</p>
          <div class="rating">${renderStars(p.rating)}</div>
          <p>${p.bio}</p>
          <button class="view-btn" data-index="${index}">View Profile</button>
        </div>
      `).join("")
      : "<p>No providers match your search.</p>";

    // Rebind click events
    document.querySelectorAll(".view-btn").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        const selected = providerList[i];
        localStorage.setItem("selectedProvider", JSON.stringify(selected));
        window.location.href = "provider-profile.html";
      });
    });
  }

});
