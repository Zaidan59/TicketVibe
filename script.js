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

// EVENTS DATA + RENDERER
const EVENTS = {
    trending: [
        {
            id: 'jazz-jkt',
            name: 'Jazz Night Jakarta',
            date: '12 November 2025',
            price: 'Rp 150.000',
            img: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&auto=format&fit=crop&q=60'
        },
        {
            id: 'rock-fest',
            name: 'Rock Fest 2023',
            date: '15 Oktober 2023',
            price: 'Rp 200.000',
            img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60'
        },
        {
            id: 'pop-night',
            name: 'Pop Night Extravaganza',
            date: '20 November 2023',
            price: 'Rp 180.000',
            img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=60'
        },
        {
            id: 'indie-show',
            name: 'Indie Showcase',
            date: '10 Januari 2024',
            price: 'Rp 120.000',
            img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60'
        }
    ],
    konser: [
        {
            id: 'indie-1',
            name: 'Indie Showcase',
            date: '10 Januari 2024',
            price: 'Rp 120.000',
            img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60'
        },
        {
            id: 'jazz-2',
            name: 'Jazz Night Jakarta',
            date: '12 November 2025',
            price: 'Rp 150.000',
            img: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&auto=format&fit=crop&q=60'
        },
        {
            id: 'jazz-2',
            name: 'Jazz Night Jakarta',
            date: '12 November 2025',
            price: 'Rp 150.000',
            img: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&auto=format&fit=crop&q=60'
        },
        {
            id: 'jazz-2',
            name: 'Jazz Night Jakarta',
            date: '12 November 2025',
            price: 'Rp 150.000',
            img: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&auto=format&fit=crop&q=60'
        },
        {
            id: 'jazz-2',
            name: 'Jazz Night Jakarta',
            date: '12 November 2025',
            price: 'Rp 150.000',
            img: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&auto=format&fit=crop&q=60'
        },
        {
            id: 'jazz-2',
            name: 'Jazz Night Jakarta',
            date: '12 November 2025',
            price: 'Rp 150.000',
            img: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&auto=format&fit=crop&q=60'
        },
    ]
};

function createEventCard(event){
    const card = document.createElement('article');
    card.className = 'event-card';
    card.setAttribute('data-id', event.id);

    const img = document.createElement('div');
    img.className = 'event-img';
    img.style.backgroundImage = `url('${event.img}')`;
    img.setAttribute('aria-hidden','true');

    const info = document.createElement('div');
    info.className = 'event-info';

    const name = document.createElement('div');
    name.className = 'event-name';
    name.textContent = event.name;

    const date = document.createElement('div');
    date.className = 'event-date';
    date.textContent = event.date;

    const price = document.createElement('div');
    price.className = 'event-price';
    price.textContent = event.price;

    // single action
    const actions = document.createElement('div');
    actions.className = 'event-actions';

    const detail = document.createElement('a');
    detail.className = 'btn-primary small';
    detail.href = `detail-event.html?id=${encodeURIComponent(event.id)}`;
    detail.textContent = 'Detail';
    detail.setAttribute('aria-label', `Lihat detail ${event.name}`);

    actions.appendChild(detail);

    const meta = document.createElement('div');
    meta.className = 'event-meta';
    meta.appendChild(price);
    meta.appendChild(actions);

    info.appendChild(name);
    info.appendChild(date);
    info.appendChild(meta);

    card.appendChild(img);
    card.appendChild(info);
    return card;
}

function renderEvents(containerId, events){
    const container = document.getElementById(containerId);
    if(!container) return;
    container.innerHTML = '';
    events.forEach(evt => {
        container.appendChild(createEventCard(evt));
    });
}

// Render on DOMContentLoaded
document.addEventListener('DOMContentLoaded', ()=>{
    renderEvents('trending-events', EVENTS.trending);
    renderEvents('konser-events', EVENTS.konser);
});
