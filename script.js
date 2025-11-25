// hamburger 
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        const opened = navLinks.classList.toggle('open');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', opened ? 'true' : 'false');
    });
}

// Data dummy untuk event konser
const trendingEvents = [
    {
        id: 1,
        title: "Taylor Swift - The Eras Tour",
        artist: "Taylor Swift",
        date: "15 Januari 2026",
        location: "Jakarta International Stadium",
        price: "Rp 1.500.000",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&fit=crop",
        category: "Pop"
    },
    {
        id: 2,
        title: "Coldplay: Music of the Spheres",
        artist: "Coldplay",
        date: "20 Februari 2026",
        location: "Gelora Bung Karno",
        price: "Rp 2.000.000",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&fit=crop",
        category: "Rock"
    },
    {
        id: 3,
        title: "Ed Sheeran Mathematics Tour",
        artist: "Ed Sheeran",
        date: "10 Maret 2026",
        location: "Indonesia Convention Exhibition",
        price: "Rp 1.800.000",
        image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&fit=crop",
        category: "Pop"
    },
    {
        id: 4,
        title: "BTS World Tour",
        artist: "BTS",
        date: "5 April 2026",
        location: "Jakarta International Stadium",
        price: "Rp 2.500.000",
        image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=500&fit=crop",
        category: "K-Pop"
    }
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

// Function untuk render event cards
function renderEvents(events, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = events.map(event => `
        <div class="event-card" onclick="window.location.href='detail.html?id=${event.id}'" style="cursor: pointer;">
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

// Update navbar berdasarkan status login
function updateNavbar() {
    const navLinks = document.querySelector('.nav-links');
    
    if (Auth.isLoggedIn()) {
        const user = Auth.getUser();
        navLinks.innerHTML = `
            <span style="color: #8c82ff; font-size: 14px; margin-right: 10px;">Hi, ${user.email.split('@')[0]}!</span>
            <button class="btn-login" onclick="Auth.logout()" aria-label="Logout">Logout</button>
        `;
    } else {
        navLinks.innerHTML = `
            <button class="btn-login" onclick="window.location.href='login.html'" aria-label="Masuk">Masuk</button>
            <button class="btn-signup" aria-label="Daftar">Daftar</button>
        `;
    }
}

// Render events saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    renderEvents(trendingEvents, 'trending-events');
    renderEvents(konserEvents, 'konser-events');
    updateNavbar();
});



