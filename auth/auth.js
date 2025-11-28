const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const remember = document.querySelector('input[name="remember"]').checked;

        // Validasi
        if (!email || !password) {
            showToast('Mohon isi semua field!', 'error');
            return;
        }

        // Simulasi login
        console.log('Login attempt:', { email, password, remember });
        
        // Simpan session jika remember me dicentang
        const userName = email.split('@')[0];
        if (remember) {
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userName', userName);
        } else {
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userName', userName);
            sessionStorage.setItem('userEmail', email);
        }

        showToast('Login berhasil!', 'success');
        
        // Cek apakah ada URL untuk redirect setelah login
        setTimeout(() => {
            const redirectUrl = sessionStorage.getItem('redirectAfterLogin');
            if (redirectUrl) {
                sessionStorage.removeItem('redirectAfterLogin');
                window.location.href = redirectUrl;
            } else {
                // Redirect ke halaman utama
                window.location.href = '../home/index.html';
            }
        }, 1000);
    });
}

// Register Form Handler
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terms = document.querySelector('input[name="terms"]').checked;

        // Validasi
        if (!fullname || !email || !phone || !password || !confirmPassword) {
            showToast('Mohon isi semua field!', 'error');
            return;
        }

        // Validasi email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast('Format email tidak valid!', 'error');
            return;
        }

        // Validasi phone
        const phoneRegex = /^08\d{8,}$/;
        if (!phoneRegex.test(phone)) {
            showToast('Nomor telepon harus dimulai dengan 08 dan minimal 10 digit!', 'error');
            return;
        }

        // Validasi password minimal 8 karakter
        if (password.length < 8) {
            showToast('Password harus minimal 8 karakter!', 'error');
            return;
        }

        // Validasi password match
        if (password !== confirmPassword) {
            showToast('Password tidak cocok!', 'error');
            return;
        }

        // Validasi terms
        if (!terms) {
            showToast('Mohon setujui syarat dan ketentuan!', 'error');
            return;
        }

        // Simulasi registrasi
        console.log('Register attempt:', { fullname, email, phone, password });
        
        showToast('Registrasi berhasil! Silakan login.', 'success');
        
        // Redirect ke halaman login
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    });
}

// Social Login
const socialButtons = document.querySelectorAll('.btn-social');
socialButtons.forEach(button => {
    button.addEventListener('click', function() {
        const provider = this.classList.contains('google') ? 'Google' : 'Facebook';
        showToast(`Login dengan ${provider} belum diimplementasikan.`, 'info');
    });
});

// Password visibility toggle
function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling;
    const eyeIcon = button.querySelector('.eye-icon');
    
    if (input.type === 'password') {
        input.type = 'text';
        eyeIcon.textContent = '🙈';
    } else {
        input.type = 'password';
        eyeIcon.textContent = '👁️';
    }
}
