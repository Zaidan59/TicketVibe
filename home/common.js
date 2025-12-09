// FUNGSI UMUM UNTUK SEMUA HALAMAN
// Function untuk show notification
function showNotification(title, message, type = 'warning', onConfirm = null) {
    const oldNotification = document.querySelector('.notification-overlay');
    if (oldNotification) {
        oldNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'notification-overlay';
    
    const iconEmoji = type === 'warning' ? '⚠️' : type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
    
    notification.innerHTML = `
        <div class="notification-content">
            <button class="notification-close" onclick="closeNotification()">×</button>
            <div class="notification-icon ${type}">${iconEmoji}</div>
            <h2 class="notification-title">${title}</h2>
            <p class="notification-message">${message}</p>
            <div class="notification-actions">
                ${onConfirm ? `
                    <button class="notification-btn notification-btn-secondary" onclick="closeNotification()">Batal</button>
                    <button class="notification-btn notification-btn-primary" id="notificationConfirmBtn">OK</button>
                ` : `
                    <button class="notification-btn notification-btn-primary" onclick="closeNotification()">OK</button>
                `}
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 10);
    
    if (onConfirm) {
        document.getElementById('notificationConfirmBtn').addEventListener('click', () => {
            closeNotification();
            onConfirm();
        });
    }
}

// Function untuk show notification dengan 3 pilihan (untuk detail page)
function showNotificationWithOptions(title, message, onLogin, onContinueAsGuest) {
    const oldNotification = document.querySelector('.notification-overlay');
    if (oldNotification) {
        oldNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'notification-overlay';
    
    notification.innerHTML = `
        <div class="notification-content">
            <button class="notification-close" onclick="closeNotification()">×</button>
            <div class="notification-icon info">ℹ️</div>
            <h2 class="notification-title">${title}</h2>
            <p class="notification-message">${message}</p>
            <div class="notification-actions notification-actions-three">
                <button class="notification-btn notification-btn-secondary" onclick="closeNotification()">Batal</button>
                <button class="notification-btn notification-btn-tertiary" id="notificationGuestBtn">Lanjut sebagai Guest</button>
                <button class="notification-btn notification-btn-primary" id="notificationLoginBtn">Login</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Event listener untuk tombol Login
    document.getElementById('notificationLoginBtn').addEventListener('click', () => {
        closeNotification();
        onLogin();
    });
    
    // Event listener untuk tombol Guest
    document.getElementById('notificationGuestBtn').addEventListener('click', () => {
        closeNotification();
        onContinueAsGuest();
    });
}

// Function untuk close notification
function closeNotification() {
    const notification = document.querySelector('.notification-overlay');
    if (notification) {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }
}

// Function untuk show toast
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const iconEmoji = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
    
    toast.innerHTML = `
        <span class="toast-icon">${iconEmoji}</span>
        <span class="toast-message">${message}</span>
    `;
    
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Function untuk cek status login
function isUserLoggedIn() {
    // Cek localStorage saja karena kita menyimpan semua data di localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const hasUserEmail = localStorage.getItem('userEmail') !== null;
    
    return isLoggedIn && hasUserEmail;
}

// Function untuk update navbar berdasarkan status login
function updateNavbar() {
    const navMenu = document.querySelector('.nav-menu');
    if (!navMenu) return;
    
    if (isUserLoggedIn()) {
        const userName = localStorage.getItem('userName') || 'User';
        
        // Hapus tombol login/daftar
        const navButtons = navMenu.querySelector('.nav-buttons');
        if (navButtons) {
            navButtons.innerHTML = `
            
            <div id="profileDropdownArea" class="profile-dropdown-area"></div>
            `;
            // Render dropdown area content setelah memasang struktur nav
            renderProfileDropdown();
        }
    }
}

function renderProfileDropdown() {
    const dropdownArea = document.getElementById('profileDropdownArea');
    if (!dropdownArea) return;

    const userName = localStorage.getItem('userName') || 'User';

    dropdownArea.innerHTML = `
        <button class="profile-btn" aria-label="Profil" onclick="toggleDropdown()">
            <img src="https://e7.pngegg.com/pngimages/343/677/png-clipart-computer-icons-user-profile-login-my-account-icon-heroes-black-thumbnail.png" alt="Avatar ${userName}" class="profile-avatar" />
        <span class="nav-greeting">Halo, ${userName}</span></button>
        <div id="myDropdown" class="dropdown-content" aria-hidden="true">
            <a href="../profile/profile.html">👤 Profil Saya</a>
            <a href="../history/history.html">📜 Riwayat</a>
            <a href="../create/create.html">➕ Buat Event</a>
            <a href="#" onclick="logout()">🚪 Keluar</a>
        </div>
    `;
}

function toggleDropdown() {
    const dd = document.getElementById("myDropdown");
    if (!dd) return;
    dd.classList.toggle("show");
    dd.setAttribute('aria-hidden', !dd.classList.contains('show'));
}

// Menutup dropdown jika pengguna mengklik di luar menu
window.addEventListener('click', function(event) {
    // jika klik bukan pada tombol profile atau di dalam dropdown, tutup dropdown
    if (!event.target.closest('.profile-btn') && !event.target.closest('.dropdown-content')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                openDropdown.setAttribute('aria-hidden', 'true');
            }
        }
    }
});

// Panggil fungsi render saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    updateNavbar();
});

// Function untuk logout
function logout() {
    showNotification(
        'Konfirmasi Logout',
        'Apakah Anda yakin ingin keluar dari akun Anda?',
        'warning',
        () => {
            // Clear semua data user
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userName');
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userPhone');
            localStorage.removeItem('rememberMe');
            
            showToast('Berhasil logout', 'success');
            
            setTimeout(() => {
                window.location.href = '../home/index.html';
            }, 500);
        }
    );
}