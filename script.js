// Array of 4-5 Rooms for each of the 10 cities
const roomsData = [
  // DELHI (5 Rooms)
  { id: 1, city: "Delhi", title: "North Campus Student PG", type: "PG", price: 7500, location: "Kamla Nagar, Delhi", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80" },
  { id: 2, city: "Delhi", title: "Luxury Single AC Room", type: "Single Room", price: 12000, location: "Satya Niketan, Delhi", image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80" },
  { id: 3, city: "Delhi", title: "Cozy Studio Flat", type: "Studio", price: 16000, location: "Lajpat Nagar, Delhi", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80" },
  { id: 4, city: "Delhi", title: "Twin Sharing Boys PG", type: "Shared Room", price: 5500, location: "Mukherjee Nagar, Delhi", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80" },
  { id: 5, city: "Delhi", title: "Girls Premium Stay", type: "PG", price: 8500, location: "Hauz Khas, Delhi", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80" },

  // MEERUT (4 Rooms)
  { id: 6, city: "Meerut", title: "University View Single Room", type: "Single Room", price: 5000, location: "CCSU Road, Meerut", image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80" },
  { id: 7, city: "Meerut", title: "Shastri Nagar Girls PG", type: "PG", price: 4500, location: "Shastri Nagar, Meerut", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80" },
  { id: 8, city: "Meerut", title: "Shared Room Near Subharti", type: "Shared Room", price: 3500, location: "NH-58, Meerut", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80" },
  { id: 9, city: "Meerut", title: "Modern 1BHK Studio", type: "Studio", price: 9000, location: "Modipuram, Meerut", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80" },

  // GURUGRAM (4 Rooms)
  { id: 10, city: "Gurugram", title: "Cyber City Corporate PG", type: "PG", price: 11000, location: "DLF Phase 3, Gurugram", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80" },
  { id: 11, city: "Gurugram", title: "Premium Single AC Studio", type: "Studio", price: 18000, location: "Sector 44, Gurugram", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80" },
  { id: 12, city: "Gurugram", title: "Student Shared Room", type: "Shared Room", price: 6500, location: "Sector 14, Gurugram", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80" },
  { id: 13, city: "Gurugram", title: "Furnished Private Room", type: "Single Room", price: 13000, location: "Sector 56, Gurugram", image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80" },

  // NOIDA (4 Rooms)
  { id: 14, city: "Noida", title: "Knowledge Park Student PG", type: "PG", price: 7000, location: "Knowledge Park, Greater Noida", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80" },
  { id: 15, city: "Noida", title: "Sector 62 Single Bed", type: "Single Room", price: 9500, location: "Sector 62, Noida", image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80" },
  { id: 16, city: "Noida", title: "Shared Double Room", type: "Shared Room", price: 5000, location: "Sector 15, Noida", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80" },
  { id: 17, city: "Noida", title: "Studio Apartment Near Metro", type: "Studio", price: 14000, location: "Sector 18, Noida", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80" },

  // DEHRADUN (4 Rooms)
  { id: 18, city: "Dehradun", title: "Hill View Girls PG", type: "PG", price: 6000, location: "Rajpur Road, Dehradun", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80" },
  { id: 19, city: "Dehradun", title: "Single Room near UPES", type: "Single Room", price: 7500, location: "Bidholi, Dehradun", image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80" },
  { id: 20, city: "Dehradun", title: "Shared Room for Boys", type: "Shared Room", price: 4000, location: "Prem Nagar, Dehradun", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80" },
  { id: 21, city: "Dehradun", title: "Independent Studio", type: "Studio", price: 11000, location: "Clement Town, Dehradun", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80" },

  // PUNE (4 Rooms)
  { id: 22, city: "Pune", title: "Viman Nagar Student PG", type: "PG", price: 8000, location: "Viman Nagar, Pune", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80" },
  { id: 23, city: "Pune", title: "Kothrud Single AC Room", type: "Single Room", price: 10000, location: "Kothrud, Pune", image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80" },
  { id: 24, city: "Pune", title: "Hinjewadi Shared Accommodation", type: "Shared Room", price: 5500, location: "Hinjewadi, Pune", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80" },
  { id: 25, city: "Pune", title: "Luxury Studio Apartment", type: "Studio", price: 15000, location: "Baner, Pune", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80" },

  // PUNJAB (4 Rooms)
  { id: 26, city: "Punjab", title: "Lovely Student Residence", type: "PG", price: 5500, location: "Phagwara, Punjab", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80" },
  { id: 27, city: "Punjab", title: "Chandigarh University PG", type: "Single Room", price: 7000, location: "Gharuan, Punjab", image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80" },
  { id: 28, city: "Punjab", title: "Budget Shared Stay", type: "Shared Room", price: 3800, location: "Ludhiana, Punjab", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80" },
  { id: 29, city: "Punjab", title: "Studio Apartment", type: "Studio", price: 10000, location: "Mohali, Punjab", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80" },

  // LUCKNOW (4 Rooms)
  { id: 30, city: "Lucknow", title: "Hazratganj Girls PG", type: "PG", price: 5000, location: "Hazratganj, Lucknow", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80" },
  { id: 31, city: "Lucknow", title: "Gomti Nagar Single Room", type: "Single Room", price: 7500, location: "Gomti Nagar, Lucknow", image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80" },
  { id: 32, city: "Lucknow", title: "Shared Room near LU", type: "Shared Room", price: 4000, location: "Mahanagar, Lucknow", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80" },
  { id: 33, city: "Lucknow", title: "Furnished Studio Flat", type: "Studio", price: 11000, location: "Aliganj, Lucknow", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80" },

  // JAIPUR (4 Rooms)
  { id: 34, city: "Jaipur", title: "Malviya Nagar Student PG", type: "PG", price: 5500, location: "Malviya Nagar, Jaipur", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80" },
  { id: 35, city: "Jaipur", title: "Raja Park AC Room", type: "Single Room", price: 8000, location: "Raja Park, Jaipur", image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80" },
  { id: 36, city: "Jaipur", title: "Shared Boys Hostel", type: "Shared Room", price: 3500, location: "Gopalpura Bypass, Jaipur", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80" },
  { id: 37, city: "Jaipur", title: "Modern Studio Space", type: "Studio", price: 10500, location: "Vaishali Nagar, Jaipur", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80" },

  // MUZAFFARNAGAR (4 Rooms)
  { id: 38, city: "Muzaffarnagar", title: "New Mandi Student Stay", type: "Single Room", price: 4000, location: "New Mandi, Muzaffarnagar", image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80" },
  { id: 39, city: "Muzaffarnagar", title: "Jansath Road PG", type: "PG", price: 3500, location: "Jansath Road, Muzaffarnagar", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80" },
  { id: 40, city: "Muzaffarnagar", title: "Shared Double Room", type: "Shared Room", price: 2800, location: "Circular Road, Muzaffarnagar", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80" },
  { id: 41, city: "Muzaffarnagar", title: "Cozy Studio Flat", type: "Studio", price: 7000, location: "Sadat Hostel Area, Muzaffarnagar", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80" }
];

// Display rooms on Load (Accommodation Page)
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("rooms-container");
  
  if (container) {
    // Check if redirected with city param
    const urlParams = new URLSearchParams(window.location.search);
    const cityParam = urlParams.get('city');
    
    if (cityParam) {
      document.getElementById('city-filter').value = cityParam;
    }
    
    applyFilters();
  }
});

// Filter Functionality
function applyFilters() {
  const cityVal = document.getElementById("city-filter").value;
  const typeVal = document.getElementById("type-filter").value;
  const container = document.getElementById("rooms-container");

  const filtered = roomsData.filter(room => {
    const matchCity = (cityVal === "All" || room.city.toLowerCase() === cityVal.toLowerCase());
    const matchType = (typeVal === "All" || room.type.toLowerCase() === typeVal.toLowerCase());
    return matchCity && matchType;
  });

  renderRooms(filtered);
}

// Render Room Cards
function renderRooms(rooms) {
  const container = document.getElementById("rooms-container");
  container.innerHTML = "";

  if (rooms.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #7f8c8d; font-size: 18px;">No accommodations found matching your filter.</p>`;
    return;
  }

  rooms.forEach(room => {
    const card = document.createElement("div");
    card.className = "room-card";
    card.innerHTML = `
      <img src="${room.image}" alt="${room.title}">
      <div class="room-info">
        <span class="room-type-badge">${room.type}</span>
        <h3>${room.title}</h3>
        <p class="location"><i class="fa-solid fa-location-dot"></i> ${room.location}</p>
        <p class="price">₹${room.price.toLocaleString('en-IN')} <span style="font-size: 13px; color: #555;">/ month</span></p>
        <button class="btn-contact" onclick="openModal('${room.title}')"><i class="fa-solid fa-phone"></i> Contact Owner</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Home Search Handler
function searchCity() {
  const citySelect = document.getElementById("home-city-select");
  const selectedCity = citySelect.value;
  if (selectedCity) {
    window.location.href = `accommodation.html?city=${selectedCity}`;
  } else {
    alert("Please select a city first!");
  }
}

// City Card Click Handler
function filterByCity(cityName) {
  window.location.href = `accommodation.html?city=${cityName}`;
}

// Modal Functions
function openModal(roomTitle) {
  document.getElementById("modal-room-title").innerText = "Inquiry for: " + roomTitle;
  document.getElementById("booking-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("booking-modal").style.display = "none";
}

function handleModalSubmit(event) {
  event.preventDefault();
  alert("Thank you! Your inquiry has been sent to Palak Tyagi & Niyati's team. We will contact you shortly.");
  closeModal();
}

function handleContactSubmit(event) {
  event.preventDefault();
  alert("Thank you for contacting us! Palak Tyagi & Niyati will get back to you soon.");
}