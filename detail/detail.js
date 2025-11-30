// hamburger 
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
    const mobileSearch = document.createElement('div');
    mobileSearch.className = 'search search-mobile';
    mobileSearch.setAttribute('role', 'search');
    mobileSearch.innerHTML = `
        <input type="search" name="q" placeholder="Cari konser, lokasi..." aria-label="Cari" />
        <button type="submit" class="search-btn" aria-label="Cari">🔍</button>
    `;
    
    hamburger.addEventListener('click', () => {
        const opened = navLinks.classList.toggle('open');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', opened ? 'true' : 'false');
        
        if (opened && !navLinks.querySelector('.search-mobile')) {
            navLinks.insertBefore(mobileSearch, navLinks.firstChild);
        }
    });
}

// Data events
const allEvents = [
    {
        id: 1,
        title: "Taylor Swift - The Eras Tour",
        artist: "Taylor Swift",
        date: "15 Januari 2026",
        location: "Jakarta International Stadium",
        price: "Rp 1.500.000",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&fit=crop",
        category: "Pop",
        description: "Saksikan Taylor Swift membawakan hits terbaiknya dari setiap era kariernya yang luar biasa. Dari 'Love Story' hingga 'Anti-Hero', konser ini menjanjikan pengalaman musik yang tak terlupakan dengan produksi panggung spektakuler dan visual yang memukau. Jangan lewatkan kesempatan langka ini untuk menyaksikan salah satu artis terbesar di dunia!",
        tickets: [
            { type: "VIP", price: 3500000, stock: 50, benefits: ["Kursi terdepan premium", "Meet & greet dengan artis", "Merchandise eksklusif", "Akses early entry"] },
            { type: "Festival", price: 2000000, stock: 150, benefits: ["Kursi kategori A", "Akses lounge khusus", "Souvenir eksklusif"] },
            { type: "Tribune", price: 1500000, stock: 300, benefits: ["Kursi kategori B", "View panggung yang bagus"] },
            { type: "Standing", price: 1000000, stock: 500, benefits: ["Area standing", "Lebih dekat dengan panggung"] }
        ]
    },
    {
        id: 2,
        title: "Coldplay: Music of the Spheres",
        artist: "Coldplay",
        date: "20 Februari 2026",
        location: "Gelora Bung Karno",
        price: "Rp 2.000.000",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&fit=crop",
        category: "Rock",
        description: "Coldplay kembali dengan tur dunia 'Music of the Spheres' yang penuh warna dan energi. Nikmati lagu-lagu hits seperti 'Yellow', 'Fix You', 'Viva La Vida', dan lagu-lagu terbaru mereka. Konser ini dikenal dengan penggunaan teknologi panggung yang inovatif dan ramah lingkungan, dilengkapi dengan visual LED yang memukau dan efek khusus yang spektakuler.",
        tickets: [
            { type: "VVIP", price: 5000000, stock: 30, benefits: ["Kursi premium row 1-3", "Meet & greet eksklusif", "Soundcheck party", "Merchandise limited edition", "Dedicated entrance"] },
            { type: "VIP", price: 3500000, stock: 80, benefits: ["Kursi kategori A", "Akses VIP lounge", "Merchandise eksklusif", "Priority entry"] },
            { type: "Festival", price: 2000000, stock: 200, benefits: ["Kursi kategori B", "View panggung terbaik", "Souvenir resmi"] },
            { type: "Tribune", price: 1500000, stock: 400, benefits: ["Kursi kategori C", "View panggung yang baik"] }
        ]
    },
    {
        id: 3,
        title: "Ed Sheeran Mathematics Tour",
        artist: "Ed Sheeran",
        date: "10 Maret 2026",
        location: "Indonesia Convention Exhibition",
        price: "Rp 1.800.000",
        image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&fit=crop",
        category: "Pop",
        description: "Ed Sheeran akan tampil solo dengan gitar dan loop station-nya yang ikonik. Rasakan keintiman pertunjukan akustiknya sambil mendengarkan hits seperti 'Shape of You', 'Perfect', 'Thinking Out Loud', dan lagu-lagu dari album terbarunya. Konser ini menawarkan pengalaman musik yang personal dan mendalam dengan salah satu penyanyi-penulis lagu terbaik generasi ini.",
        tickets: [
            { type: "VIP", price: 3000000, stock: 60 },
            { type: "Festival", price: 1800000, stock: 180 },
            { type: "Tribune", price: 1200000, stock: 350 }
        ]
    },
    {
        id: 4,
        title: "BTS World Tour",
        artist: "BTS",
        date: "5 April 2026",
        location: "Jakarta International Stadium",
        price: "Rp 2.500.000",
        image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=500&fit=crop",
        category: "K-Pop",
        description: "BTS, boyband terbesar di dunia, hadir dengan tur dunia yang sangat dinanti-nantikan! Saksikan performa energik mereka dengan koreografi yang sempurna, produksi panggung kelas dunia, dan interaksi yang penuh kehangatan dengan ARMY. Dari 'Dynamite' hingga 'Butter', setiap lagu akan membuat Anda bernyanyi dan menari bersama jutaan penggemar di seluruh dunia.",
        tickets: [
            { type: "VVIP", price: 6000000, stock: 20 },
            { type: "VIP", price: 4000000, stock: 70 },
            { type: "Festival", price: 2500000, stock: 180 },
            { type: "Standing", price: 1500000, stock: 600 }
        ]
    },
    {
        id: 5,
        title: "Dewa 19 Reunion Concert",
        artist: "Dewa 19",
        date: "25 Januari 2026",
        location: "Istora Senayan",
        price: "Rp 750.000",
        image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=500&fit=crop",
        category: "Rock",
        description: "Dewa 19 reunion yang sangat ditunggu-tunggu! Dengarkan kembali lagu-lagu legendaris seperti 'Kangen', 'Separuh Nafas', 'Kamulah Satu-Satunya', dan masih banyak lagi. Ahmad Dhani bersama personel klasik akan membawakan nostalgia 90-an yang tak terlupakan. Konser ini akan menjadi momen bersejarah bagi para penggemar musik rock Indonesia.",
        tickets: [
            { type: "VIP", price: 1500000, stock: 100 },
            { type: "Festival", price: 900000, stock: 250 },
            { type: "Tribune", price: 750000, stock: 400 },
            { type: "Standing", price: 500000, stock: 550 }
        ]
    },
    {
        id: 6,
        title: "Sheila on 7 - Kisah Klasik",
        artist: "Sheila on 7",
        date: "8 Februari 2026",
        location: "The Kasablanka Hall",
        price: "Rp 650.000",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&fit=crop",
        category: "Pop Rock",
        description: "Sheila on 7 membawakan hits klasik mereka yang telah menemani perjalanan hidup jutaan penggemar di Indonesia. Dari 'Dan', 'Kita', 'Lapang Dada', hingga 'Melompat Lebih Tinggi', setiap lagu akan membangkitkan kenangan indah. Rasakan kehangatan dan energi positif yang selalu dibawakan oleh band legendaris Indonesia ini.",
        tickets: [
            { type: "VIP", price: 1200000, stock: 80 },
            { type: "Festival", price: 800000, stock: 200 },
            { type: "Tribune", price: 650000, stock: 320 }
        ]
    },
    {
        id: 7,
        title: "Tulus - Manusia Tour",
        artist: "Tulus",
        date: "14 Februari 2026",
        location: "Balai Sarbini",
        price: "Rp 500.000",
        image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&fit=crop",
        category: "Jazz/Pop",
        description: "Tulus akan menghadirkan konser intimate dengan aransemen jazz yang elegan. Dengarkan suara emasnya menyanyikan 'Hati-Hati di Jalan', 'Monokrom', 'Ruang Sendiri', dan lagu-lagu romantis lainnya. Konser ini cocok untuk Anda yang ingin menikmati musik berkualitas dalam suasana yang hangat dan personal, sempurna untuk perayaan Valentine.",
        tickets: [
            { type: "VIP", price: 1000000, stock: 60 },
            { type: "Festival", price: 750000, stock: 150 },
            { type: "Tribune", price: 500000, stock: 290 }
        ]
    },
    {
        id: 8,
        title: "Imagine Dragons Live",
        artist: "Imagine Dragons",
        date: "18 Maret 2026",
        location: "Gelora Bung Karno",
        price: "Rp 1.900.000",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&fit=crop",
        category: "Alternative Rock",
        description: "Imagine Dragons membawa energi rock alternatif mereka ke Indonesia! Bersiaplah untuk melompat dan bernyanyi bersama lagu-lagu hits seperti 'Radioactive', 'Believer', 'Thunder', dan 'Enemy'. Dengan produksi panggung yang megah, efek pyrotechnic yang spektakuler, dan performa vokal Dan Reynolds yang powerful, konser ini akan menjadi pengalaman yang tak terlupakan.",
        tickets: [
            { type: "VVIP", price: 4500000, stock: 40 },
            { type: "VIP", price: 3000000, stock: 90 },
            { type: "Festival", price: 1900000, stock: 220 },
            { type: "Tribune", price: 1300000, stock: 450 }
        ]
    },
    {
        id: 9,
        title: "Seventeen Right Here Tour",
        artist: "Seventeen",
        date: "22 Maret 2026",
        location: "Jakarta International Stadium",
        price: "Rp 2.200.000",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&fit=crop",
        category: "K-Pop",
        description: "SEVENTEEN, self-producing K-Pop group dengan 13 member berbakat, hadir dengan tur 'Right Here'! Saksikan performa sinkron mereka yang sempurna, koreografi yang memukau, dan energi yang luar biasa. Dari 'Very Nice' hingga 'Super', setiap lagu akan membuat CARATs bersorak kegirangan. Jangan lewatkan kesempatan bertemu dengan salah satu grup K-Pop tersukses!",
        tickets: [
            { type: "VVIP", price: 5500000, stock: 25 },
            { type: "VIP", price: 3800000, stock: 75 },
            { type: "Festival", price: 2200000, stock: 190 },
            { type: "Standing", price: 1400000, stock: 550 }
        ]
    },
    {
        id: 10,
        title: "Billie Eilish World Tour",
        artist: "Billie Eilish",
        date: "5 April 2026",
        location: "Indonesia Convention Exhibition",
        price: "Rp 1.600.000",
        image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&fit=crop",
        category: "Pop",
        description: "Billie Eilish, fenomena musik global, membawa suara uniknya ke Indonesia. Rasakan atmosfer gelap dan dreamy dari lagu-lagu hits seperti 'bad guy', 'happier than ever', 'ocean eyes', dan 'What Was I Made For?'. Dengan visual panggung yang artistik dan performa yang emosional, konser ini menawarkan pengalaman musik yang berbeda dan penuh makna.",
        tickets: [
            { type: "VIP", price: 2800000, stock: 70 },
            { type: "Festival", price: 1800000, stock: 160 },
            { type: "Tribune", price: 1600000, stock: 370 },
            { type: "Standing", price: 1000000, stock: 500 }
        ]
    },
    {
        id: 11,
        title: "Raisa - It's Personal",
        artist: "Raisa",
        date: "12 April 2026",
        location: "Balai Sarbini",
        price: "Rp 550.000",
        image: "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?w=500&fit=crop",
        category: "R&B/Soul",
        description: "Raisa menghadirkan konser intimate 'It's Personal' dengan nuansa R&B dan soul yang khas. Dengarkan suara merdu diva Indonesia ini menyanyikan 'Serba Salah', 'Mantan Terindah', 'Kali Kedua', dan lagu-lagu ballad romantis lainnya. Konser ini menawarkan pengalaman mendengar musik berkualitas dengan aransemen live band yang memukau.",
        tickets: [
            { type: "VIP", price: 1100000, stock: 50 },
            { type: "Festival", price: 700000, stock: 130 },
            { type: "Tribune", price: 550000, stock: 270 }
        ]
    },
    {
        id: 12,
        title: "The Weeknd After Hours",
        artist: "The Weeknd",
        date: "28 April 2026",
        location: "Gelora Bung Karno",
        price: "Rp 2.100.000",
        image: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=500&fit=crop",
        category: "R&B/Pop",
        description: "The Weeknd membawa After Hours Tour yang telah memukau jutaan penggemar di seluruh dunia. Dengan visual sinematik yang memukau, lighting yang dramatis, dan performa vokal yang luar biasa, Abel Tesfaye akan membawakan hits seperti 'Blinding Lights', 'Save Your Tears', 'Starboy', dan 'The Hills'. Bersiaplah untuk malam yang penuh dengan musik R&B berkualitas tinggi!",
        tickets: [
            { type: "VVIP", price: 5000000, stock: 35 },
            { type: "VIP", price: 3500000, stock: 85 },
            { type: "Festival", price: 2100000, stock: 200 },
            { type: "Tribune", price: 1500000, stock: 430 }
        ]
    }
];

// Ambil event ID dari URL parameter
const urlParams = new URLSearchParams(window.location.search);
const eventId = parseInt(urlParams.get('id'));

console.log('URL params:', window.location.search);
console.log('Event ID:', eventId);

// Temukan event berdasarkan ID
const event = allEvents.find(e => e.id === eventId);

console.log('Event found:', event ? event.title : 'NOT FOUND');
console.log('All events count:', allEvents.length);

// Tampilkan detail event
if (event) {
    document.getElementById('detail-img').src = event.image;
    document.getElementById('detail-img').alt = event.title;
    document.getElementById('detail-category').textContent = event.category;
    document.getElementById('detail-title').textContent = event.title;
    document.getElementById('detail-artist').textContent = event.artist;
    document.getElementById('detail-date').textContent = event.date;
    document.getElementById('detail-location').textContent = event.location;
    document.getElementById('detail-price').textContent = event.price;
    document.getElementById('detail-desc').textContent = event.description;
    
    // Update page title
    document.title = `${event.title} - TicketVibe`;
    
    // Render ticket types 
    setTimeout(() => {
        renderTicketTypes();
    }, 100);
} else {
    // Jika event tidak ditemukan, redirect ke home
    alert('Event not found! Redirecting to home...');
    window.location.href = '../home/index.html';
}

// Object untuk menyimpan jumlah tiket yang dipilih
let selectedTickets = {};

// Function untuk format harga
function formatPrice(price) {
    return 'Rp ' + price.toLocaleString('id-ID');
}

// Function untuk render ticket types
function renderTicketTypes() {
    const ticketTypesContainer = document.getElementById('ticketTypes');
    if (!ticketTypesContainer) {
        console.error('ticketTypes container not found');
        return;
    }
    
    if (!event.tickets || event.tickets.length === 0) {
        console.error('No tickets available');
        return;
    }
    
    console.log('Rendering', event.tickets.length, 'ticket types');
    ticketTypesContainer.innerHTML = '';
    
    event.tickets.forEach((ticket, index) => {
        const maxQuantity = Math.min(4, ticket.stock);
        
        // Buat kartu tiket
        const ticketCard = document.createElement('div');
        ticketCard.className = 'ticket-card';
        
        // Buat header kartu dengan info dan kontrol jumlah
        const cardHeader = document.createElement('div');
        cardHeader.className = 'ticket-card-header';
        
        // Buat info tiket
        const ticketInfo = document.createElement('div');
        ticketInfo.className = 'ticket-info';
        ticketInfo.innerHTML = `
            <div class="ticket-type-name">${ticket.type}</div>
            <div class="ticket-price">${formatPrice(ticket.price)}</div>
            <div class="ticket-stock">Tersedia: ${ticket.stock} tiket | Max: 4 tiket/jenis</div>
        `;
        
        // buat atur jumlah tiket
        const quantityControl = document.createElement('div');
        quantityControl.className = 'ticket-quantity-control';
        
        // Tombol kurang
        const decreaseBtn = document.createElement('button');
        decreaseBtn.type = 'button';
        decreaseBtn.className = 'quantity-btn decrease-btn';
        decreaseBtn.textContent = '-';
        decreaseBtn.onclick = function() {
            const currentQty = selectedTickets[index] || 0;
            if (currentQty > 0) {
                selectedTickets[index] = currentQty - 1;
                quantityInput.value = selectedTickets[index];
                updateTotalPrice();
            }
        };
        
        // Input
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.className = 'quantity-input';
        quantityInput.id = `quantity-${index}`;
        quantityInput.value = '0';
        quantityInput.min = '0';
        quantityInput.max = maxQuantity;
        quantityInput.readOnly = true;
        
        // Tombol tambah
        const increaseBtn = document.createElement('button');
        increaseBtn.type = 'button';
        increaseBtn.className = 'quantity-btn increase-btn';
        increaseBtn.textContent = '+';
        increaseBtn.onclick = function() {
            const currentQty = selectedTickets[index] || 0;
            if (currentQty < maxQuantity) {
                selectedTickets[index] = currentQty + 1;
                quantityInput.value = selectedTickets[index];
                updateTotalPrice();
            } else if (currentQty >= 4) {
                showToast('Maksimal 4 tiket per jenis!', 'error');
            } else {
                showToast('Stok tiket tidak mencukupi!', 'error');
            }
        };
        
        // Masukkan tombol dan input ke kontrol jumlah
        quantityControl.appendChild(decreaseBtn);
        quantityControl.appendChild(quantityInput);
        quantityControl.appendChild(increaseBtn);
        
        // Masukkan ke header kartu
        cardHeader.appendChild(ticketInfo);
        cardHeader.appendChild(quantityControl);
        
        // Buat bagian benefit jika tersedia
        if (ticket.benefits && ticket.benefits.length > 0) {
            const benefitsDiv = document.createElement('div');
            benefitsDiv.className = 'ticket-benefits';
            
            const benefitsTitle = document.createElement('div');
            benefitsTitle.className = 'ticket-benefits-title';
            benefitsTitle.textContent = 'Benefit yang didapat:';
            benefitsDiv.appendChild(benefitsTitle);
            
            ticket.benefits.forEach(benefit => {
                const benefitItem = document.createElement('div');
                benefitItem.className = 'benefit-item';
                benefitItem.textContent = benefit;
                benefitsDiv.appendChild(benefitItem);
            });
            
            ticketCard.appendChild(cardHeader);
            ticketCard.appendChild(benefitsDiv);
        } else {
            ticketCard.appendChild(cardHeader);
        }
        
        // masukkan ticket card ke container
        ticketTypesContainer.appendChild(ticketCard);
        
        // Inisialisasi selectedTickets
        selectedTickets[index] = 0;
    });
    
    console.log('Ticket cards rendered:', ticketTypesContainer.children.length);
}

// Function untuk update total
function updateTotalPrice() {
    if (!event || !event.tickets) return;
    
    let totalTickets = 0;
    let totalPrice = 0;
    
    event.tickets.forEach((ticket, index) => {
        const quantity = selectedTickets[index] || 0;
        totalTickets += quantity;
        totalPrice += ticket.price * quantity;
    });
    
    const totalTicketsEl = document.getElementById('totalTickets');
    const totalPriceEl = document.getElementById('totalPrice');
    
    if (totalTicketsEl) {
        totalTicketsEl.textContent = totalTickets;
    }
    if (totalPriceEl) {
        totalPriceEl.textContent = formatPrice(totalPrice);
    }
    
    console.log('Total updated - Tickets:', totalTickets, 'Price:', totalPrice);
}

// Handler untuk tombol Beli Tiket
const buyTicketBtn = document.getElementById('buyTicketBtn');
if (buyTicketBtn) {
    buyTicketBtn.addEventListener('click', function() {
        // Cek apakah ada tiket yang dipilih
        const totalTickets = Object.values(selectedTickets).reduce((sum, qty) => sum + qty, 0);
        
        if (totalTickets === 0) {
            showNotification(
                'Pilih Tiket',
                'Silakan pilih minimal 1 tiket untuk melanjutkan pembelian.',
                'warning'
            );
            return;
        }
        
        // Fungsi untuk menyimpan data pemesanan dan lanjut ke checkout
        const proceedToCheckout = () => {
            const orderData = {
                eventId: eventId,
                eventTitle: event.title,
                eventCategory: event.category,
                tickets: selectedTickets,
                ticketDetails: event.tickets,
                totalTickets: totalTickets,
                totalPrice: event.tickets.reduce((sum, ticket, index) => {
                    return sum + (ticket.price * (selectedTickets[index] || 0));
                }, 0),
                isGuest: !isUserLoggedIn()
            };
            localStorage.setItem('orderData', JSON.stringify(orderData));
            
            showToast('Menuju halaman checkout...', 'success');
            setTimeout(() => {
                window.location.href = '../payment/checkout.html?id=' + eventId;
            }, 1000);
        };
        
        if (isUserLoggedIn()) {
            // Jika sudah login, langsung lanjut
            proceedToCheckout();
        } else {
            // Jika belum login, tampilkan pilihan
            showNotificationWithOptions(
                'Lanjutkan Pembelian',
                'Anda dapat login untuk mendapatkan riwayat pembelian dan penawaran khusus, atau melanjutkan sebagai guest.',
                () => {
                    // Pilih Login
                    sessionStorage.setItem('redirectAfterLogin', window.location.href);
                    window.location.href = '../auth/login.html';
                },
                () => {
                    // Pilih lanjut sebagai Guest
                    proceedToCheckout();
                }
            );
        }
    });
}
updateNavbar();

