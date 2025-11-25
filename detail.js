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

// Data lengkap semua events
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
        description: "Saksikan Taylor Swift membawakan hits terbaiknya dari setiap era kariernya yang luar biasa. Dari 'Love Story' hingga 'Anti-Hero', konser ini menjanjikan pengalaman musik yang tak terlupakan dengan produksi panggung spektakuler dan visual yang memukau. Jangan lewatkan kesempatan langka ini untuk menyaksikan salah satu artis terbesar di dunia!"
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
        description: "Coldplay kembali dengan tur dunia 'Music of the Spheres' yang penuh warna dan energi. Nikmati lagu-lagu hits seperti 'Yellow', 'Fix You', 'Viva La Vida', dan lagu-lagu terbaru mereka. Konser ini dikenal dengan penggunaan teknologi panggung yang inovatif dan ramah lingkungan, dilengkapi dengan visual LED yang memukau dan efek khusus yang spektakuler."
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
        description: "Ed Sheeran akan tampil solo dengan gitar dan loop station-nya yang ikonik. Rasakan keintiman pertunjukan akustiknya sambil mendengarkan hits seperti 'Shape of You', 'Perfect', 'Thinking Out Loud', dan lagu-lagu dari album terbarunya. Konser ini menawarkan pengalaman musik yang personal dan mendalam dengan salah satu penyanyi-penulis lagu terbaik generasi ini."
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
        description: "BTS, boyband terbesar di dunia, hadir dengan tur dunia yang sangat dinanti-nantikan! Saksikan performa energik mereka dengan koreografi yang sempurna, produksi panggung kelas dunia, dan interaksi yang penuh kehangatan dengan ARMY. Dari 'Dynamite' hingga 'Butter', setiap lagu akan membuat Anda bernyanyi dan menari bersama jutaan penggemar di seluruh dunia."
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
        description: "Dewa 19 reunion yang sangat ditunggu-tunggu! Dengarkan kembali lagu-lagu legendaris seperti 'Kangen', 'Separuh Nafas', 'Kamulah Satu-Satunya', dan masih banyak lagi. Ahmad Dhani bersama personel klasik akan membawakan nostalgia 90-an yang tak terlupakan. Konser ini akan menjadi momen bersejarah bagi para penggemar musik rock Indonesia."
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
        description: "Sheila on 7 membawakan hits klasik mereka yang telah menemani perjalanan hidup jutaan penggemar di Indonesia. Dari 'Dan', 'Kita', 'Lapang Dada', hingga 'Melompat Lebih Tinggi', setiap lagu akan membangkitkan kenangan indah. Rasakan kehangatan dan energi positif yang selalu dibawakan oleh band legendaris Indonesia ini."
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
        description: "Tulus akan menghadirkan konser intimate dengan aransemen jazz yang elegan. Dengarkan suara emasnya menyanyikan 'Hati-Hati di Jalan', 'Monokrom', 'Ruang Sendiri', dan lagu-lagu romantis lainnya. Konser ini cocok untuk Anda yang ingin menikmati musik berkualitas dalam suasana yang hangat dan personal, sempurna untuk perayaan Valentine."
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
        description: "Imagine Dragons membawa energi rock alternatif mereka ke Indonesia! Bersiaplah untuk melompat dan bernyanyi bersama lagu-lagu hits seperti 'Radioactive', 'Believer', 'Thunder', dan 'Enemy'. Dengan produksi panggung yang megah, efek pyrotechnic yang spektakuler, dan performa vokal Dan Reynolds yang powerful, konser ini akan menjadi pengalaman yang tak terlupakan."
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
        description: "SEVENTEEN, self-producing K-Pop group dengan 13 member berbakat, hadir dengan tur 'Right Here'! Saksikan performa sinkron mereka yang sempurna, koreografi yang memukau, dan energi yang luar biasa. Dari 'Very Nice' hingga 'Super', setiap lagu akan membuat CARATs bersorak kegirangan. Jangan lewatkan kesempatan bertemu dengan salah satu grup K-Pop tersukses!"
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
        description: "Billie Eilish, fenomena musik global, membawa suara uniknya ke Indonesia. Rasakan atmosfer gelap dan dreamy dari lagu-lagu hits seperti 'bad guy', 'happier than ever', 'ocean eyes', dan 'What Was I Made For?'. Dengan visual panggung yang artistik dan performa yang emosional, konser ini menawarkan pengalaman musik yang berbeda dan penuh makna."
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
        description: "Raisa menghadirkan konser intimate 'It's Personal' dengan nuansa R&B dan soul yang khas. Dengarkan suara merdu diva Indonesia ini menyanyikan 'Serba Salah', 'Mantan Terindah', 'Kali Kedua', dan lagu-lagu ballad romantis lainnya. Konser ini menawarkan pengalaman mendengar musik berkualitas dengan aransemen live band yang memukau."
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
        description: "The Weeknd membawa After Hours Tour yang telah memukau jutaan penggemar di seluruh dunia. Dengan visual sinematik yang memukau, lighting yang dramatis, dan performa vokal yang luar biasa, Abel Tesfaye akan membawakan hits seperti 'Blinding Lights', 'Save Your Tears', 'Starboy', dan 'The Hills'. Bersiaplah untuk malam yang penuh dengan musik R&B berkualitas tinggi!"
    }
];

// Ambil event ID dari URL parameter
const urlParams = new URLSearchParams(window.location.search);
const eventId = parseInt(urlParams.get('id'));

// Temukan event berdasarkan ID
const event = allEvents.find(e => e.id === eventId);

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
} else {
    // Jika event tidak ditemukan, redirect ke home
    window.location.href = 'index.html';
}

// Event listener untuk tombol beli tiket
document.querySelector('.btn-buy-ticket').addEventListener('click', () => {
    // Cek apakah user sudah login
    if (!Auth.isLoggedIn()) {
        // Redirect ke login dengan menyimpan eventId
        window.location.href = `login.html?redirect=detail&eventId=${eventId}`;
        return;
    }
    
    // Jika sudah login, lanjutkan ke pembelian
    alert('Fitur pembelian tiket akan segera hadir! 🎫');
});

// Event listener untuk tombol share
document.querySelector('.btn-share').addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: event.title,
            text: `Lihat event ${event.title} di TicketVibe!`,
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        alert('Link disalin ke clipboard!');
        navigator.clipboard.writeText(window.location.href);
    }
});
