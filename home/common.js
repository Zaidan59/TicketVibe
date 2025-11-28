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
    return localStorage.getItem('userEmail') !== null || sessionStorage.getItem('isLoggedIn') === 'true';
}

// Function untuk update navbar berdasarkan status login
function updateNavbar() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks && isUserLoggedIn()) {
        const userName = localStorage.getItem('userName') || sessionStorage.getItem('userName') || 'User';
        
        navLinks.innerHTML = `
            <span class="nav-greeting">Halo, ${userName}</span>
            <a href="../history/history.html" class="nav-history">Riwayat</a>
            <button class="btn-logout" aria-label="Keluar" onclick="logout()">Keluar</button>
        `;
    }
}

// Function untuk logout
function logout() {
    showNotification(
        'Konfirmasi Logout',
        'Apakah Anda yakin ingin keluar dari akun Anda?',
        'warning',
        () => {
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userName');
            localStorage.removeItem('selectedEventId');
            sessionStorage.removeItem('isLoggedIn');
            sessionStorage.removeItem('userName');
            sessionStorage.removeItem('userEmail');
            sessionStorage.removeItem('redirectAfterLogin');
            showToast('Berhasil logout', 'success');
            setTimeout(() => {
                location.reload();
            }, 1000);
        }
    );
}
