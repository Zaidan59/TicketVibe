// Check if user is logged in
document.addEventListener('DOMContentLoaded', () => {
    if (!isUserLoggedIn()) {
        showNotification(
            'Login Diperlukan',
            'Anda harus login terlebih dahulu untuk mengakses halaman profil.',
            'warning',
            () => {
                window.location.href = '../auth/login.html';
            }
        );
        return;
    }

    loadUserProfile();
    updateNavbar();
});

// Load user profile data
function loadUserProfile() {
    const userEmail = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('userName');
    const userPhone = localStorage.getItem('userPhone');

    // Update profile header
    document.getElementById('profileName').textContent = userName || 'User';
    document.getElementById('profileEmail').textContent = userEmail || '';

    // Update form fields
    document.getElementById('fullName').value = userName || '';
    document.getElementById('username').value = userName || '';
    document.getElementById('email').value = userEmail || '';
    document.getElementById('phone').value = userPhone || '';

    // Load additional data from localStorage if exists
    const birthdate = localStorage.getItem('userBirthdate');
    const address = localStorage.getItem('userAddress');
    
    if (birthdate) {
        document.getElementById('birthdate').value = birthdate;
    }
    if (address) {
        document.getElementById('address').value = address;
    }

    // Update stats
    const memberSince = localStorage.getItem('memberSince') || '2025';
    document.getElementById('memberSince').textContent = memberSince;

    // Load ticket stats from localStorage (example)
    const totalTickets = localStorage.getItem('totalTickets') || '0';
    const totalEvents = localStorage.getItem('totalEvents') || '0';
    document.getElementById('totalTickets').textContent = totalTickets;
    document.getElementById('totalEvents').textContent = totalEvents;
}

// Switch tabs
function switchTab(tabName) {
    // Update tab buttons
    const tabs = document.querySelectorAll('.profile-tab');
    tabs.forEach(tab => {
        if (tab.dataset.tab === tabName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Update tab content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`tab-${tabName}`).classList.add('active');
}

// Toggle edit mode
let isEditing = false;
function toggleEdit() {
    isEditing = !isEditing;
    const inputs = document.querySelectorAll('#profileForm input, #profileForm textarea');
    const formActions = document.getElementById('formActions');
    const editBtn = document.getElementById('editBtnText');

    if (isEditing) {
        inputs.forEach(input => {
            if (input.id !== 'email') { // Email biasanya tidak bisa diubah
                input.disabled = false;
            }
        });
        formActions.style.display = 'flex';
        editBtn.textContent = '❌ Batal';
    } else {
        inputs.forEach(input => input.disabled = true);
        formActions.style.display = 'none';
        editBtn.textContent = '✏️ Edit';
        loadUserProfile(); // Reload original data
    }
}

function cancelEdit() {
    toggleEdit();
}

// Save profile changes
document.getElementById('profileForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const username = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;
    const birthdate = document.getElementById('birthdate').value;
    const address = document.getElementById('address').value;

    // Validation
    if (!fullName || !username) {
        showNotification('Error', 'Nama dan username harus diisi!', 'error');
        return;
    }

    // Save to localStorage
    localStorage.setItem('userName', fullName);
    localStorage.setItem('userPhone', phone);
    localStorage.setItem('userBirthdate', birthdate);
    localStorage.setItem('userAddress', address);

    showToast('Profil berhasil diperbarui!', 'success');
    toggleEdit();
    loadUserProfile();
});

// Change password
document.getElementById('passwordForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validation
    if (!currentPassword || !newPassword || !confirmPassword) {
        showNotification('Error', 'Semua field password harus diisi!', 'error');
        return;
    }

    if (newPassword.length < 8) {
        showNotification('Error', 'Password baru minimal 8 karakter!', 'error');
        return;
    }

    if (newPassword !== confirmPassword) {
        showNotification('Error', 'Password baru dan konfirmasi tidak cocok!', 'error');
        return;
    }

    // In real app, verify current password with backend
    showNotification(
        'Konfirmasi',
        'Apakah Anda yakin ingin mengubah password?',
        'warning',
        () => {
            // Simulate password change
            showToast('Password berhasil diubah!', 'success');
            document.getElementById('passwordForm').reset();
        }
    );
});

// Toggle password visibility
function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}

// Change avatar
function changeAvatar() {
    showNotification(
        'Fitur Segera Hadir',
        'Fitur upload foto profil akan segera tersedia!',
        'info'
    );
}

// Deactivate account
function deactivateAccount() {
    showNotification(
        'Nonaktifkan Akun',
        'Apakah Anda yakin ingin menonaktifkan akun? Anda dapat mengaktifkannya kembali dengan login.',
        'warning',
        () => {
            showToast('Akun berhasil dinonaktifkan', 'success');
            setTimeout(() => {
                logout();
            }, 1500);
        }
    );
}

// Delete account
function deleteAccount() {
    showNotification(
        '⚠️ Hapus Akun Permanen',
        'PERINGATAN: Tindakan ini akan menghapus semua data Anda secara permanen dan tidak dapat dibatalkan. Apakah Anda yakin?',
        'error',
        () => {
            // Clear all user data
            localStorage.clear();
            showToast('Akun berhasil dihapus', 'success');
            setTimeout(() => {
                window.location.href = '../home/index.html';
            }, 1500);
        }
    );
}

// Save notification preferences
document.getElementById('emailNotif').addEventListener('change', (e) => {
    localStorage.setItem('emailNotif', e.target.checked);
    showToast('Preferensi notifikasi disimpan', 'success');
});

document.getElementById('pushNotif').addEventListener('change', (e) => {
    localStorage.setItem('pushNotif', e.target.checked);
    showToast('Preferensi notifikasi disimpan', 'success');
});

document.getElementById('promoNotif').addEventListener('change', (e) => {
    localStorage.setItem('promoNotif', e.target.checked);
    showToast('Preferensi notifikasi disimpan', 'success');
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('open');
    });
}
