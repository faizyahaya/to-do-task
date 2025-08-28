  document.addEventListener("DOMContentLoaded", function () {
    const servicesData = [
      { icon: "fas fa-toolbox", name: "Appliance Repair" },
      { icon: "fas fa-bug-slash", name: "Pest Control" },
      { icon: "fas fa-paint-roller", name: "Home Painting" },
      { icon: "fas fa-couch", name: "Interior Decoration" },
      { icon: "fas fa-soap", name: "Sofa & Upholstery Cleaning" },
      { icon: "fas fa-bars-staggered", name: "Curtain Installation" },
      { icon: "fas fa-spray-can-sparkles", name: "Window Cleaning" },
      { icon: "fas fa-fan", name: "AC Installation & Servicing" },
      { icon: "fas fa-water", name: "Water Heater Repair" },
      { icon: "fas fa-baby", name: "Nanny / Babysitting" },
      { icon: "fas fa-person-cane", name: "Elderly Care / Caregiver" },
      { icon: "fas fa-house-user", name: "House Help (Live-in or Daytime)" },
      { icon: "fas fa-utensils", name: "Cook / Chef Services" },
      { icon: "fas fa-running", name: "Errand Running" },
      { icon: "fas fa-cart-shopping", name: "Grocery Shopping Assistant" },
      { icon: "fas fa-dog", name: "Dog Walking / Pet Sitting" },
      { icon: "fas fa-person-dress", name: "Makeup Artist" },
      { icon: "fas fa-cut", name: "Hairdresser (Female)" },
      { icon: "fas fa-scissors", name: "Barber (Male)" },
      { icon: "fas fa-spa", name: "Spa & Facial Services" },
      { icon: "fas fa-tooth", name: "Teeth Whitening" },
      { icon: "fas fa-hand-sparkles", name: "Manicure / Pedicure" },
      { icon: "fas fa-hand-holding-droplet", name: "Body Waxing" },
      { icon: "fas fa-bowl-food", name: "Catering Services" },
      { icon: "fas fa-calendar-days", name: "Event Planning" },
      { icon: "fas fa-camera-retro", name: "Photography / Videography" },
      { icon: "fas fa-music", name: "DJ & Music Services" },
      { icon: "fas fa-utensils", name: "Small Chops & Drinks Supply" },
      { icon: "fas fa-cake-candles", name: "Cake & Dessert Bakers" },
      { icon: "fas fa-microphone", name: "MC / Host" },
      { icon: "fas fa-bolt", name: "Electrical Repairs" },
      { icon: "fas fa-droplet", name: "Plumbing" },
      { icon: "fas fa-gear", name: "Generator Repair" },
      { icon: "fas fa-hammer", name: "Carpentry" },
      { icon: "fas fa-tv", name: "TV/Screen Repair" },
      { icon: "fas fa-mobile-screen", name: "Phone Repairs" },
      { icon: "fas fa-laptop", name: "Laptop Repairs" },
      { icon: "fas fa-car", name: "Mechanic (Car)" },
      { icon: "fas fa-motorcycle", name: "Mechanic (Bike)" },
      { icon: "fas fa-truck-monster", name: "Towing Services" },
      { icon: "fas fa-gas-pump", name: "Fuel Delivery" },
      { icon: "fas fa-gauge", name: "Car Diagnostics" },
      { icon: "fas fa-screwdriver-wrench", name: "Auto Accessories Installation" },
      { icon: "fas fa-circle-half-stroke", name: "Car Wash & Detailing" },
      { icon: "fas fa-person-dress", name: "Tailoring (Men & Women)" },
      { icon: "fas fa-shirt", name: "Fashion Styling" },
      { icon: "fas fa-wand-magic-sparkles", name: "Makeover / Personal Shopper" },
      { icon: "fas fa-user-tie", name: "Image Consulting" },
      { icon: "fas fa-mask-face", name: "Custom Costume Design" },
      { icon: "fas fa-tshirt", name: "Clothing Repairs" },
      { icon: "fas fa-vest-patches", name: "Embroidery / Monogramming" },
      { icon: "fas fa-book", name: "Private Academic Tutor" },
      { icon: "fas fa-language", name: "Language Classes (French, Arabic etc)" },
      { icon: "fas fa-paintbrush", name: "Art & Craft Classes" },
      { icon: "fas fa-music", name: "Music Lessons" },
      { icon: "fas fa-laptop-code", name: "Coding / Tech Skills" },
      { icon: "fas fa-person-chalkboard", name: "Adult Education" },
      { icon: "fas fa-person-running", name: "Fitness / Dance Classes" },
      { icon: "fas fa-truck", name: "Item Delivery (Bike/Car/Van)" },
      { icon: "fas fa-boxes-packing", name: "House / Office Moving" },
      { icon: "fas fa-people-carry-box", name: "Furniture Assembly" },
      { icon: "fas fa-warehouse", name: "Storage Services" },
      { icon: "fas fa-bicycle", name: "Errand Bike Services" },
      { icon: "fas fa-bag-shopping", name: "Market Runs / Bulk Purchases" },
      { icon: "fas fa-clipboard-check", name: "Pickup & Drop-off Scheduling" },
    ];

    const servicesContainer = document.getElementById("services");
    const searchInput = document.querySelector(".service-input");
    const searchBtn = document.querySelector(".search-btn");

    function renderServices(services) {
      servicesContainer.innerHTML = "";
      if (services.length === 0) {
        servicesContainer.innerHTML = "<p>No matching services found.</p>";
        return;
      }

      services.forEach(service => {
        const card = document.createElement("div");
        card.className = "service-card";
        card.innerHTML = `<i class="${service.icon}"></i><p>${service.name}</p>`;
        servicesContainer.appendChild(card);
      });
    }

    function filterServices() {
      const query = searchInput.value.toLowerCase().trim();
      const filtered = servicesData.filter(service =>
        service.name.toLowerCase().includes(query)
      );
      renderServices(filtered);
    }

    // Initial render
    renderServices(servicesData);

    searchBtn.addEventListener("click", filterServices);
    searchInput.addEventListener("input", filterServices); // Optional live search
  });
