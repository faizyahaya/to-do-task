const categoryContent = {
  "home-services": {
    title: "Home Services",
    description: "Need help around the house? Explore our trusted home service offerings.",
    services: [
      { icon: "fa-toolbox", name: "Appliance Repair" },
      { icon: "fa-bug-slash", name: "Pest Control" },
      { icon: "fa-paint-roller", name: "Home Painting" },
      { icon: "fa-couch", name: "Interior Decoration" },
      { icon: "fa-soap", name: "Sofa & Upholstery Cleaning" },
      { icon: "fa-bars-staggered", name: "Curtain Installation" },
      { icon: "fa-spray-can-sparkles", name: "Window Cleaning" },
      { icon: "fa-fan", name: "AC Installation & Servicing" },
      { icon: "fa-water", name: "Water Heater Repair" }
    ]
  },
  "personal-help": {
    title: "Personal & Domestic Help",
    description: "Get reliable assistance with everyday personal and household tasks.",
    services: [
      { icon: "fa-baby", name: "Nanny / Babysitting" },
      { icon: "fa-person-cane", name: "Elderly Care / Caregiver" },
      { icon: "fa-house-user", name: "House Help (Live-in or Daytime)" },
      { icon: "fa-utensils", name: "Cook / Chef Services" },
      { icon: "fa-running", name: "Errand Running" },
      { icon: "fa-cart-shopping", name: "Grocery Shopping Assistant" },
      { icon: "fa-dog", name: "Dog Walking / Pet Sitting" }
    ]
  },
  "beauty-grooming": {
    title: "Beauty & Grooming",
    description: "Look and feel your best with expert beauty and grooming services.",
    services: [
      { icon: "fa-person-dress", name: "Makeup Artist" },
      { icon: "fa-cut", name: "Hairdresser (Female)" },
      { icon: "fa-scissors", name: "Barber (Male)" },
      { icon: "fa-spa", name: "Spa & Facial Services" },
      { icon: "fa-tooth", name: "Teeth Whitening" },
      { icon: "fa-hand-sparkles", name: "Manicure / Pedicure" },
      { icon: "fa-hand-holding-droplet", name: "Body Waxing" }
    ]
  },
  "food-events": {
    title: "Food & Event Services",
    description: "Plan perfect events or get delicious meals delivered to your door.",
    services: [
      { icon: "fa-bowl-food", name: "Catering Services" },
      { icon: "fa-calendar-days", name: "Event Planning" },
      { icon: "fa-camera-retro", name: "Photography / Videography" },
      { icon: "fa-music", name: "DJ & Music Services" },
      { icon: "fa-utensils", name: "Small Chops & Drinks Supply" },
      { icon: "fa-cake-candles", name: "Cake & Dessert Bakers" },
      { icon: "fa-microphone", name: "MC / Host" }
    ]
  },
  "repairs-maintenance": {
    title: "Repairs & Maintenance",
    description: "Get quick fixes and reliable maintenance for your home and gadgets.",
    services: [
      { icon: "fa-bolt", name: "Electrical Repairs" },
      { icon: "fa-droplet", name: "Plumbing" },
      { icon: "fa-gear", name: "Generator Repair" },
      { icon: "fa-hammer", name: "Carpentry" },
      { icon: "fa-tv", name: "TV/Screen Repair" },
      { icon: "fa-mobile-screen", name: "Phone Repairs" },
      { icon: "fa-laptop", name: "Laptop Repairs" }
    ]
  },
  "automotive-services": {
    title: "Automotive Services",
    description: "Keep your vehicle in top shape or get help when you're stuck.",
    services: [
      { icon: "fa-car", name: "Mechanic (Car)" },
      { icon: "fa-motorcycle", name: "Mechanic (Bike)" },
      { icon: "fa-truck-monster", name: "Towing Services" },
      { icon: "fa-gas-pump", name: "Fuel Delivery" },
      { icon: "fa-gauge", name: "Car Diagnostics" },
      { icon: "fa-screwdriver-wrench", name: "Auto Accessories Installation" },
      { icon: "fa-circle-half-stroke", name: "Car Wash & Detailing" }
    ]
  },
  "fashion-clothing": {
    title: "Fashion & Clothing",
    description: "Get dressed, styled, and fitted with help from fashion experts.",
    services: [
      { icon: "fa-person-dress", name: "Tailoring (Men & Women)" },
      { icon: "fa-shirt", name: "Fashion Styling" },
      { icon: "fa-wand-magic-sparkles", name: "Makeover / Personal Shopper" },
      { icon: "fa-user-tie", name: "Image Consulting" },
      { icon: "fa-mask-face", name: "Custom Costume Design" },
      { icon: "fa-tshirt", name: "Clothing Repairs" },
      { icon: "fa-vest-patches", name: "Embroidery / Monogramming" }
    ]
  },
  "tutoring-learning": {
    title: "Tutoring & Learning",
    description: "Learn something new or help your child excel with expert tutors.",
    services: [
      { icon: "fa-book", name: "Private Academic Tutor" },
      { icon: "fa-language", name: "Language Classes (French, Arabic etc)" },
      { icon: "fa-paintbrush", name: "Art & Craft Classes" },
      { icon: "fa-music", name: "Music Lessons" },
      { icon: "fa-laptop-code", name: "Coding / Tech Skills" },
      { icon: "fa-person-chalkboard", name: "Adult Education" },
      { icon: "fa-person-running", name: "Fitness / Dance Classes" }
    ]
  },
  "logistics-moving": {
    title: "Logistics & Moving",
    description: "Move anything, anywhere, with the help of trusted logistics pros.",
    services: [
      { icon: "fa-truck", name: "Item Delivery (Bike/Car/Van)" },
      { icon: "fa-boxes-packing", name: "House / Office Moving" },
      { icon: "fa-people-carry-box", name: "Furniture Assembly" },
      { icon: "fa-warehouse", name: "Storage Services" },
      { icon: "fa-bicycle", name: "Errand Bike Services" },
      { icon: "fa-bag-shopping", name: "Market Runs / Bulk Purchases" },
      { icon: "fa-clipboard-check", name: "Pickup & Drop-off Scheduling" }
    ]
  }
};

function loadCategoryServices(categoryKey) {
  const content = categoryContent[categoryKey];
  const titleEl = document.getElementById("category-title");
  const descEl = document.getElementById("category-description");
  const gridEl = document.getElementById("category-services");

  if (!content) {
    titleEl.textContent = "Category Not Found";
    descEl.textContent = "Please go back and select a valid category.";
    return;
  }

  titleEl.textContent = content.title;
  descEl.textContent = content.description;

  gridEl.innerHTML = content.services.map(service => `
    <div class="category-card">
      <i class="fa-solid ${service.icon}"></i>
      <p>${service.name}</p>
    </div>
  `).join("");
}
