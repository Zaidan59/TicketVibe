// hamburger 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('open');
    });
}

// Data untuk event
const trendingEvents = [
  {
    id: 1,
    title: "Taylor Swift: The Eras Tour",
    artist: "Taylor Swift",
    date: "15 Nov 2025",
    location: "Jakarta International Stadium",
    price: "Rp.1.500.000",
    organizer: "Swifties Indonesia",
    category: "Concert",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&fit=crop",
    organizerImage:
      "https://ui-avatars.com/api/?name=Swifties+Indonesia&background=FF69B4&color=fff&size=40",
  },
  {
    id: 2,
    title: "Digital Marketing Summit",
    artist: "Various Artists",
    date: "15 Nov 2025",
    location: "Convention Center",
    price: "Rp.200.000",
    organizer: "Tech Indonesia",
    category: "Workshop",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
    organizerImage:
      "https://ui-avatars.com/api/?name=Tech+Indonesia&background=4169E1&color=fff&size=40",
  },
  {
    id: 3,
    title: "Yoga & Wellness Festival",
    artist: "Various Artists",
    date: "18 Nov 2025",
    location: "Green Park",
    price: "Rp.100.000",
    organizer: "Zen Movement",
    category: "Health",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
    organizerImage:
      "https://ui-avatars.com/api/?name=Zen+Movement&background=90EE90&color=000&size=40",
  },
  {
    id: 4,
    title: "Food Truck Festival",
    artist: "Various Chefs",
    date: "20 Nov 2025",
    location: "Food Park",
    price: "Rp.75.000",
    organizer: "Culinary Hub",
    category: "Food & Culinary",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=250&fit=crop",
    organizerImage:
      "https://ui-avatars.com/api/?name=Culinary+Hub&background=FF8C00&color=fff&size=40",
  }
];
const carouselEvent = [
  {
    image:
      "https://images.t2u.io/upload/a/0-1387-AWSS3eed4b619-7eb9-4338-8fa4-6c65d2e3ae8d-OZvJ_M.jpg",
  },
  {
    image:
      "https://images.t2u.io/upload/a/0-1307-AWSS3a596e019-c6a9-4c8e-a90c-78699215fa35-YBpw_M.jpg",
  },
  {
    image:
      "https://images.t2u.io/upload/a/0-1341-AWSS3f5cbed9f-db1b-4249-8cec-b400fae4904e-sOOs_M.png",
  },
];

const konserEvents = [
    {
        id: 5,
        title: "Dewa 19 Reunion Concert",
        artist: "Dewa 19",
        date: "25 Januari 2026",
        location: "Istora Senayan",
        price: "Rp 750.000",
        image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=500&fit=crop",
        category: "Rock"
    },
    {
        id: 6,
        title: "Sheila on 7 - Kisah Klasik",
        artist: "Sheila on 7",
        date: "8 Februari 2026",
        location: "The Kasablanka Hall",
        price: "Rp 650.000",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&fit=crop",
        category: "Pop Rock"
    },
    {
        id: 7,
        title: "Tulus - Manusia Tour",
        artist: "Tulus",
        date: "14 Februari 2026",
        location: "Balai Sarbini",
        price: "Rp 500.000",
        image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&fit=crop",
        category: "Jazz/Pop"
    },
    {
        id: 8,
        title: "Imagine Dragons Live",
        artist: "Imagine Dragons",
        date: "18 Maret 2026",
        location: "Gelora Bung Karno",
        price: "Rp 1.900.000",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&fit=crop",
        category: "Alternative Rock"
    },
    {
        id: 9,
        title: "Seventeen Right Here Tour",
        artist: "Seventeen",
        date: "22 Maret 2026",
        location: "Jakarta International Stadium",
        price: "Rp 2.200.000",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&fit=crop",
        category: "K-Pop"
    },
    {
        id: 10,
        title: "Billie Eilish World Tour",
        artist: "Billie Eilish",
        date: "5 April 2026",
        location: "Indonesia Convention Exhibition",
        price: "Rp 1.600.000",
        image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&fit=crop",
        category: "Pop"
    },
    {
        id: 11,
        title: "Raisa - It's Personal",
        artist: "Raisa",
        date: "12 April 2026",
        location: "Balai Sarbini",
        price: "Rp 550.000",
        image: "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?w=500&fit=crop",
        category: "R&B/Soul"
    },
    {
        id: 12,
        title: "The Weeknd After Hours",
        artist: "The Weeknd",
        date: "28 April 2026",
        location: "Gelora Bung Karno",
        price: "Rp 2.100.000",
        image: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=500&fit=crop",
        category: "R&B/Pop"
    }
];
const educationEvents = [
  {
    id: 13,
    title: "Workshop Software Engineering",
    artist: "Mas Fariz",
    date: "21 Desember 2025",
    location: "Online",
    price: "Rp 20.000",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&fit=crop",
    category: "workshop"
  }
];

// Musical Concert events
const musicalEvents = [
  {
    id: 14,
    title: "Rock Festival 2025",
    artist: "Various Artists",
    date: "28 Nov 2025",
    location: "GBK Stadium",
    price: "Rp.250.000",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&fit=crop",
    category: "musical"
  },
  {
    id: 15,
    title: "Classical Orchestra Night",
    artist: "Symphony Orchestra",
    date: "30 Nov 2025",
    location: "Concert Hall",
    price: "Rp.300.000",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=500&fit=crop",
    category: "musical"
  },
  {
    id: 16,
    title: "EDM Beach Party",
    artist: "DJ Sunset",
    date: "02 Dec 2025",
    location: "Bali Beach",
    price: "Rp.200.000",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&fit=crop",
    category: "musical"
  },
  {
    id: 17,
    title: "Indie Acoustic Session",
    artist: "Indie House Band",
    date: "05 Dec 2025",
    location: "Indie House Venue",
    price: "Rp.120.000",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=500&fit=crop",
    category: "musical"
  }
];

// Workshop events
const workshopEvents = [
  {
    id: 18,
    title: "Web Development Bootcamp",
    artist: "Code Academy",
    date: "13 Dec 2025",
    location: "Tech Hub Jakarta",
    price: "Rp.350.000",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&fit=crop",
    category: "workshop"
  },
  {
    id: 19,
    title: "Public Speaking Masterclass",
    artist: "Speak Pro",
    date: "15 Dec 2025",
    location: "Convention Center",
    price: "Rp.250.000",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&fit=crop",
    category: "workshop"
  },
  {
    id: 20,
    title: "UI/UX Design Workshop",
    artist: "Design Hub",
    date: "18 Dec 2025",
    location: "Creative Space",
    price: "Rp.300.000",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&fit=crop",
    category: "workshop"
  }
];

// Sports Events
const sportsEvents = [
  {
    id: 21,
    title: "Marathon Jakarta 2025",
    artist: "Run Indonesia",
    date: "28 Dec 2025",
    location: "Jakarta City",
    price: "Rp.150.000",
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=500&fit=crop",
    category: "sports"
  },
  {
    id: 22,
    title: "Basketball Tournament",
    artist: "Hoop Dreams",
    date: "30 Dec 2025",
    location: "Sports Arena",
    price: "Rp.100.000",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&fit=crop",
    category: "sports"
  },
  {
    id: 23,
    title: "Cycling Championship",
    artist: "Bike Nation",
    date: "02 Jan 2026",
    location: "Mountain Trail",
    price: "Rp.200.000",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=500&fit=crop",
    category: "sports"
  }
];

// Art & Exhibition events
const artEvents = [
  {
    id: 24,
    title: "Modern Art Exhibition",
    artist: "Art Gallery ID",
    date: "12 Jan 2026",
    location: "National Gallery",
    price: "Rp.50.000",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&fit=crop",
    category: "art"
  },
  {
    id: 25,
    title: "Photography Showcase",
    artist: "Lens Masters",
    date: "15 Jan 2026",
    location: "Photo Gallery",
    price: "Rp.40.000",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&fit=crop",
    category: "art"
  },
  {
    id: 26,
    title: "Street Art Festival",
    artist: "Urban Artists",
    date: "18 Jan 2026",
    location: "City Streets",
    price: "Free",
    image: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=500&fit=crop",
    category: "art"
  }
];

// Food Festival events
const foodEvents = [
  {
    id: 27,
    title: "Street Food Festival",
    artist: "Food Lovers",
    date: "28 Jan 2026",
    location: "Food Park",
    price: "Rp.50.000",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&fit=crop",
    category: "food"
  },
  {
    id: 28,
    title: "BBQ & Grill Night",
    artist: "Grill Masters",
    date: "30 Jan 2026",
    location: "BBQ Arena",
    price: "Rp.150.000",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&fit=crop",
    category: "food"
  },
  {
    id: 29,
    title: "Coffee & Cake Expo",
    artist: "Cafe Society",
    date: "02 Feb 2026",
    location: "Convention Hall",
    price: "Rp.75.000",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&fit=crop",
    category: "food"
  }
];

// Function untuk render event
function renderEvents(events, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = events.map(event => `
        <div class="event-card" onclick="window.location.href='../detail/detail.html?id=${event.id}'" style="cursor: pointer;">
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}">
                <span class="event-category">${event.category}</span>
            </div>
            <div class="event-details">
                <h3 class="event-title">${event.title}</h3>
                <p class="event-artist">${event.artist}</p>
                <div class="event-info">
                    <p class="event-date">📅 ${event.date}</p>
                    <p class="event-location">📍 ${event.location}</p>
                </div>
                <div class="event-footer">
                    <span class="event-price">${event.price}</span>
                </div>
            </div>
        </div>
    `).join('');
}

//carousel
function renderCarousel(containerId, imagesArray) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = `
  <div class="carousel-wrapper">
      <div class="carousel-track">
          ${imagesArray
            .map(
              (img) => `
             <div class='carousel-slide'>
                <img src='${img.image}' alt='Event Carousel'>
             </div>`
            )
            .join("")}
      </div>

      <div class="carousel-controls">
          <button class="carousel-prev" aria-label="Previous slide">&#10094;</button>
          <button class="carousel-next" aria-label="Next slide">&#10095;</button>
      </div>
      
      <div class="carousel-indicators">
          ${imagesArray.map((_, index) => `
              <span class="carousel-indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
          `).join('')}
      </div>
  </div>
`;
    const track = container.querySelector(".carousel-track");
    const slides = container.querySelectorAll(".carousel-slide");
    const prevBtn = container.querySelector(".carousel-prev");
    const nextBtn = container.querySelector(".carousel-next");
    const indicators = container.querySelectorAll(".carousel-indicator");
    let currentIndex = 0;
    let autoPlayInterval;

    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update indicators
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
      });
    }

    function goToSlide(index) {
      currentIndex = index;
      updateCarousel();
      resetAutoPlay();
    }

    function nextSlide() {
      currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
      updateCarousel();
    }

    function prevSlide() {
      currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
      updateCarousel();
    }

    // Auto-play functionality
    function startAutoPlay() {
      autoPlayInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
    }

    function stopAutoPlay() {
      clearInterval(autoPlayInterval);
    }

    function resetAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }

    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetAutoPlay();
    });
    
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetAutoPlay();
    });

    // Indicator click events
    indicators.forEach((indicator) => {
      indicator.addEventListener('click', () => {
        const index = parseInt(indicator.dataset.index);
        goToSlide(index);
      });
    });

    // Pause auto-play on hover
    container.addEventListener('mouseenter', stopAutoPlay);
    container.addEventListener('mouseleave', startAutoPlay);

    updateCarousel();
    startAutoPlay();
  }
}

// Render events saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    renderEvents(trendingEvents, 'trending-events');
    renderCarousel("carousel-event", carouselEvent);
    
    // Combine all events for filtering
    const allEvents = [
        ...trendingEvents, 
        ...konserEvents, 
        ...educationEvents,
        ...musicalEvents,
        ...workshopEvents,
        ...sportsEvents,
        ...artEvents,
        ...foodEvents
    ];
    renderEvents(allEvents, 'all-events');
    
    // Category filter functionality
    const categoryButtons = document.querySelectorAll('.category-btn');
    const allEventsContainer = document.getElementById('all-events');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.dataset.category;
            
            // Filter events
            let filteredEvents;
            if (category === 'all') {
                filteredEvents = allEvents;
            } else {
                filteredEvents = allEvents.filter(event => event.category === category);
            }
            
            // Render filtered events
            renderEvents(filteredEvents, 'all-events');
            
            // Scroll to events section
            allEventsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    
    updateNavbar();
    
    // Initialize search functionality
    initializeSearch();
});

// Search functionality with dropdown
function initializeSearch() {
    const searchInput = document.querySelector('.search input[type="search"]');
    const searchBtn = document.querySelector('.search-btn');
    
    if (!searchInput) return;
    
    // Create search results dropdown
    const searchDropdown = document.createElement('div');
    searchDropdown.className = 'search-dropdown';
    searchDropdown.style.display = 'none';
    searchInput.parentElement.appendChild(searchDropdown);
    
    // Get all events for search
    const allEvents = [
        ...trendingEvents,
        ...konserEvents,
        ...educationEvents,
        ...musicalEvents,
        ...workshopEvents,
        ...sportsEvents,
        ...artEvents,
        ...foodEvents
    ];
    
    // Search on input
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        if (searchTerm.length < 2) {
            searchDropdown.style.display = 'none';
            return;
        }
        
        // Filter events
        const results = allEvents.filter(event => 
            event.title.toLowerCase().includes(searchTerm) ||
            event.artist.toLowerCase().includes(searchTerm) ||
            event.location.toLowerCase().includes(searchTerm) ||
            event.category.toLowerCase().includes(searchTerm)
        );
        
        // Display results
        if (results.length > 0) {
            displaySearchResults(results, searchDropdown);
            searchDropdown.style.display = 'block';
        } else {
            searchDropdown.innerHTML = '<div class="search-no-results">❌ Tidak ada hasil ditemukan</div>';
            searchDropdown.style.display = 'block';
        }
    });
    
    // Search on button click
    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            performSearch(searchInput.value);
        });
    }
    
    // Search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch(searchInput.value);
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search')) {
            searchDropdown.style.display = 'none';
        }
    });
}

function displaySearchResults(results, dropdown) {
    // Limit to 5 results
    const limitedResults = results.slice(0, 5);
    
    dropdown.innerHTML = limitedResults.map(event => `
        <div class="search-result-item" onclick="goToEvent(${event.id})">
            <img src="${event.image}" alt="${event.title}" class="search-result-image">
            <div class="search-result-info">
                <div class="search-result-title">${event.title}</div>
                <div class="search-result-meta">
                    <span>📅 ${event.date}</span>
                    <span>📍 ${event.location}</span>
                </div>
                <div class="search-result-price">${event.price}</div>
            </div>
        </div>
    `).join('');
    
    // Add "Show all results" if more than 5
    if (results.length > 5) {
        dropdown.innerHTML += `
            <div class="search-show-all" onclick="showAllSearchResults()">
                Lihat semua ${results.length} hasil →
            </div>
        `;
    }
}

function performSearch(searchTerm) {
    const allEvents = [
        ...trendingEvents,
        ...konserEvents,
        ...educationEvents,
        ...musicalEvents,
        ...workshopEvents,
        ...sportsEvents,
        ...artEvents,
        ...foodEvents
    ];
    
    const results = allEvents.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Clear all event sections
    document.getElementById('all-events').innerHTML = '';
    
    // Update section title
    const sectionTitle = document.querySelector('.section-title');
    if (results.length > 0) {
        sectionTitle.textContent = `Hasil Pencarian: "${searchTerm}" (${results.length} event)`;
        renderEvents(results, 'all-events');
    } else {
        sectionTitle.textContent = `Hasil Pencarian: "${searchTerm}"`;
        document.getElementById('all-events').innerHTML = `
            <div style="text-align: center; padding: 60px 20px;">
                <h3 style="font-size: 24px; margin-bottom: 10px;">😔 Tidak ada hasil</h3>
                <p style="color: #666;">Coba kata kunci lain atau browse event lainnya</p>
            </div>
        `;
    }
    
    // Scroll to results
    document.getElementById('all-events').scrollIntoView({ behavior: 'smooth' });
    
    // Hide dropdown
    document.querySelector('.search-dropdown').style.display = 'none';
}

function goToEvent(eventId) {
    window.location.href = `../detail/detail.html?id=${eventId}`;
}

function showAllSearchResults() {
    const searchInput = document.querySelector('.search input[type="search"]');
    performSearch(searchInput.value);
}


// Proteksi link Create Event
document.addEventListener('DOMContentLoaded', function() {
    const createEventLinks = document.querySelectorAll('a[href="../create/create.html"], a[href="create/create.html"]');
    
    createEventLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!isUserLoggedIn()) {
                e.preventDefault();
                showNotification(
                    'Login Diperlukan',
                    'Anda harus login terlebih dahulu untuk membuat event.',
                    'warning',
                    () => {
                        sessionStorage.setItem('redirectAfterLogin', '../create/create.html');
                        window.location.href = '../auth/login.html';
                    }
                );
            }
        });
    });
});