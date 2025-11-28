// Function untuk format harga
function formatPrice(price) {
    return 'Rp ' + price.toLocaleString('id-ID');
}

// Load order data dari localStorage
const orderData = JSON.parse(localStorage.getItem('orderData'));

console.log('Order data:', orderData);

// Update navbar dan setup event listeners saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    updateNavbar();
    
    // Setup event listeners
    setupEventListeners();
});

if (!orderData || !orderData.eventId) {
    alert('Data pesanan tidak ditemukan. Anda akan dialihkan ke halaman home.');
    window.location.href = '../home/index.html';
} else {
    // Tampilkan data pesanan
    displayOrderSummary();
    
    // Pre-fill form jika sudah login
    if (isUserLoggedIn()) {
        const userEmail = localStorage.getItem('userEmail') || sessionStorage.getItem('userEmail');
        if (userEmail) {
            document.addEventListener('DOMContentLoaded', () => {
                document.getElementById('buyerEmail').value = userEmail;
                
                // Auto-fill nama dari email jika ada
                const userName = userEmail.split('@')[0];
                document.getElementById('buyerName').value = userName.charAt(0).toUpperCase() + userName.slice(1);
            });
        }
    }
}

// Function untuk tampilkan ringkasan pesanan
function displayOrderSummary() {
    document.getElementById('eventTitle').textContent = orderData.eventTitle;
    
    // Set category 
    const categoryEl = document.getElementById('eventCategory');
    if (orderData.eventCategory) {
        categoryEl.textContent = orderData.eventCategory;
    } else {
        categoryEl.style.display = 'none';
    }
    
    // Render ticket items
    const orderDetailsEl = document.getElementById('orderDetails');
    orderDetailsEl.innerHTML = '';
    
    let totalTickets = 0;
    let totalPrice = 0;
    
    orderData.ticketDetails.forEach((ticket, index) => {
        const quantity = orderData.tickets[index] || 0;
        
        if (quantity > 0) {
            totalTickets += quantity;
            const subtotal = ticket.price * quantity;
            totalPrice += subtotal;
            
            const ticketItem = document.createElement('div');
            ticketItem.className = 'ticket-item';
            ticketItem.innerHTML = `
                <div class="ticket-info">
                    <div class="ticket-type">${ticket.type}</div>
                    <div class="ticket-quantity">${quantity} × ${formatPrice(ticket.price)}</div>
                </div>
                <div class="ticket-price">${formatPrice(subtotal)}</div>
            `;
            orderDetailsEl.appendChild(ticketItem);
        }
    });
    
    // Update total
    document.getElementById('totalTickets').textContent = totalTickets;
    document.getElementById('totalPrice').textContent = formatPrice(totalPrice);
}

// Function untuk setup event listeners
function setupEventListeners() {
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.history.back();
        });
    }

    // Payment button handler
    const btnProceedPayment = document.getElementById('btnProceedPayment');
    if (btnProceedPayment) {
        btnProceedPayment.addEventListener('click', function() {
            // Validasi form
            const name = document.getElementById('buyerName').value.trim();
            const email = document.getElementById('buyerEmail').value.trim();
            const phone = document.getElementById('buyerPhone').value.trim();
            const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
            const agreeTerms = document.getElementById('agreeTerms').checked;
            
            // Validasi nama
            if (!name) {
                showNotification('Form Tidak Lengkap', 'Silakan masukkan nama lengkap Anda.', 'error');
                return;
            }
            
            // Validasi email
            if (!email) {
                showNotification('Form Tidak Lengkap', 'Silakan masukkan alamat email Anda.', 'error');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Email Tidak Valid', 'Silakan masukkan alamat email yang valid.', 'error');
                return;
            }
            
            // Validasi phone
            if (!phone) {
                showNotification('Form Tidak Lengkap', 'Silakan masukkan nomor telepon Anda.', 'error');
                return;
            }
            
            const phoneRegex = /^[0-9]{10,13}$/;
            if (!phoneRegex.test(phone.replace(/[\s-]/g, ''))) {
                showNotification('Nomor Tidak Valid', 'Silakan masukkan nomor telepon yang valid (10-13 digit).', 'error');
                return;
            }
            
            // Validasi payment method
            if (!paymentMethod) {
                showNotification('Pilih Metode Pembayaran', 'Silakan pilih metode pembayaran yang Anda inginkan.', 'warning');
                return;
            }
            
            // Validasi terms
            if (!agreeTerms) {
                showNotification('Syarat & Ketentuan', 'Anda harus menyetujui Syarat & Ketentuan untuk melanjutkan.', 'warning');
                return;
            }
            
            // Jika semua validasi lolos, tampilkan instruksi pembayaran
            const selectedMethod = paymentMethod.value;
            showPaymentInstructions(selectedMethod);
        });
    }
}

// Function untuk tampilkan notifikasi, tutup notifikasi, tampilkan toast
function generateOrderNumber() {
    const prefix = 'TV';
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${prefix}${timestamp}${random}`;
}

// Function untuk tampilkan instruksi pembayaran
function showPaymentInstructions(method) {
    const orderNumber = generateOrderNumber();
    const totalAmount = orderData.totalPrice;
    
    let instructions = '';
    let methodName = '';
    
    switch(method) {
        case 'bank_transfer':
            methodName = 'Transfer Bank';
            instructions = `
                <div class="payment-instructions">
                    <div class="instruction-header">
                        <div class="instruction-icon">🏦</div>
                        <h3>Instruksi Transfer Bank</h3>
                    </div>
                    <div class="order-info">
                        <p><strong>Nomor Pesanan:</strong> ${orderNumber}</p>
                        <p><strong>Total Pembayaran:</strong> <span class="amount">${formatPrice(totalAmount)}</span></p>
                    </div>
                    <div class="instruction-steps">
                        <h4>Pilih salah satu bank berikut:</h4>
                        <div class="bank-list">
                            <div class="bank-item">
                                <strong>Bank BCA</strong>
                                <p>No. Rek: 1234567890</p>
                                <p>a.n. PT TicketVibe Indonesia</p>
                            </div>
                            <div class="bank-item">
                                <strong>Bank Mandiri</strong>
                                <p>No. Rek: 0987654321</p>
                                <p>a.n. PT TicketVibe Indonesia</p>
                            </div>
                            <div class="bank-item">
                                <strong>Bank BNI</strong>
                                <p>No. Rek: 5555666777</p>
                                <p>a.n. PT TicketVibe Indonesia</p>
                            </div>
                        </div>
                        <div class="instruction-note">
                            <p><strong>Langkah-langkah:</strong></p>
                            <ol>
                                <li>Transfer sejumlah <strong>${formatPrice(totalAmount)}</strong></li>
                                <li>Simpan bukti transfer</li>
                                <li>Pembayaran akan diverifikasi dalam 1x24 jam</li>
                                <li>E-ticket akan dikirim ke email Anda setelah verifikasi</li>
                            </ol>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'ewallet':
            methodName = 'E-Wallet';
            instructions = `
                <div class="payment-instructions">
                    <div class="instruction-header">
                        <div class="instruction-icon">💳</div>
                        <h3>Instruksi E-Wallet</h3>
                    </div>
                    <div class="order-info">
                        <p><strong>Nomor Pesanan:</strong> ${orderNumber}</p>
                        <p><strong>Total Pembayaran:</strong> <span class="amount">${formatPrice(totalAmount)}</span></p>
                    </div>
                    <div class="instruction-steps">
                        <h4>Pilih e-wallet Anda:</h4>
                        <div class="ewallet-list">
                            <div class="ewallet-item">
                                <strong>GoPay</strong>
                                <p>Nomor: 081234567890</p>
                            </div>
                            <div class="ewallet-item">
                                <strong>OVO</strong>
                                <p>Nomor: 081234567890</p>
                            </div>
                            <div class="ewallet-item">
                                <strong>Dana</strong>
                                <p>Nomor: 081234567890</p>
                            </div>
                            <div class="ewallet-item">
                                <strong>ShopeePay</strong>
                                <p>Nomor: 081234567890</p>
                            </div>
                        </div>
                        <div class="instruction-note">
                            <p><strong>Langkah-langkah:</strong></p>
                            <ol>
                                <li>Buka aplikasi e-wallet pilihan Anda</li>
                                <li>Transfer ke nomor di atas sebesar <strong>${formatPrice(totalAmount)}</strong></li>
                                <li>Screenshot bukti transfer</li>
                                <li>E-ticket akan dikirim otomatis dalam 5-10 menit</li>
                            </ol>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'credit_card':
            methodName = 'Kartu Kredit/Debit';
            instructions = `
                <div class="payment-instructions">
                    <div class="instruction-header">
                        <div class="instruction-icon">💳</div>
                        <h3>Pembayaran Kartu Kredit/Debit</h3>
                    </div>
                    <div class="order-info">
                        <p><strong>Nomor Pesanan:</strong> ${orderNumber}</p>
                        <p><strong>Total Pembayaran:</strong> <span class="amount">${formatPrice(totalAmount)}</span></p>
                    </div>
                    <div class="instruction-steps">
                        <div class="instruction-note">
                            <p>Anda akan dialihkan ke halaman pembayaran kartu kredit yang aman.</p>
                            <p><strong>Kartu yang diterima:</strong></p>
                            <ul>
                                <li>Visa</li>
                                <li>Mastercard</li>
                                <li>JCB</li>
                                <li>American Express</li>
                            </ul>
                            <p>Pembayaran akan diproses secara real-time dan e-ticket akan langsung dikirim ke email Anda.</p>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'qris':
            methodName = 'QRIS';
            instructions = `
                <div class="payment-instructions">
                    <div class="instruction-header">
                        <div class="instruction-icon">📱</div>
                        <h3>Pembayaran QRIS</h3>
                    </div>
                    <div class="order-info">
                        <p><strong>Nomor Pesanan:</strong> ${orderNumber}</p>
                        <p><strong>Total Pembayaran:</strong> <span class="amount">${formatPrice(totalAmount)}</span></p>
                    </div>
                    <div class="instruction-steps">
                        <div class="qris-code">
                            <div class="qr-placeholder">
                                <p style="font-size: 60px; margin: 0;">📱</p>
                                <p style="margin: 10px 0 0 0; color: #6b7280;">QR Code akan muncul di sini</p>
                            </div>
                        </div>
                        <div class="instruction-note">
                            <p><strong>Langkah-langkah:</strong></p>
                            <ol>
                                <li>Buka aplikasi e-wallet atau mobile banking Anda</li>
                                <li>Pilih menu Scan QR atau QRIS</li>
                                <li>Scan QR code di atas</li>
                                <li>Konfirmasi pembayaran sebesar <strong>${formatPrice(totalAmount)}</strong></li>
                                <li>E-ticket akan dikirim otomatis ke email Anda</li>
                            </ol>
                        </div>
                    </div>
                </div>
            `;
            break;
    }
    
    // Tampilkan notifikasi dengan instruksi
    const notification = document.createElement('div');
    notification.className = 'notification-overlay';
    
    notification.innerHTML = `
        <div class="notification-content notification-large">
            <button class="notification-close" onclick="closePaymentModal()">×</button>
            ${instructions}
            <div class="notification-actions">
                <button class="notification-btn notification-btn-secondary" onclick="closePaymentModal()">Kembali</button>
                <button class="notification-btn notification-btn-primary" onclick="confirmPayment('${orderNumber}', '${methodName}')">Saya Sudah Transfer</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 10);
}

// Function untuk tutup notifikasi pembayaran
function closePaymentModal() {
    const notification = document.querySelector('.notification-overlay');
    if (notification) {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }
}

// Function untuk konfirmasi pembayaran
function confirmPayment(orderNumber, methodName) {
    closePaymentModal();
    
    // Simpan data pembelian ke history
    const purchaseHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
    const purchaseData = {
        orderNumber: orderNumber,
        eventTitle: orderData.eventTitle,
        eventCategory: orderData.eventCategory,
        ticketDetails: orderData.ticketDetails,
        tickets: orderData.tickets,
        totalTickets: orderData.totalTickets,
        totalPrice: orderData.totalPrice,
        paymentMethod: methodName,
        purchaseDate: new Date().toISOString(),
        buyerName: document.getElementById('buyerName').value,
        buyerEmail: document.getElementById('buyerEmail').value,
        buyerPhone: document.getElementById('buyerPhone').value,
        status: 'pending'
    };
    
    purchaseHistory.push(purchaseData);
    localStorage.setItem('purchaseHistory', JSON.stringify(purchaseHistory));
    
    // Simulasi pemrosesan
    showNotification(
        'Pembayaran Sedang Diproses',
        `Terima kasih! Pembayaran Anda melalui ${methodName} sedang kami proses.\n\nNomor Pesanan: ${orderNumber}\n\nE-ticket akan dikirim ke email Anda setelah pembayaran terverifikasi.`,
        'success',
        () => {
            // Hapus data pesanan
            localStorage.removeItem('orderData');
            // masuk ke halaman history
            window.location.href = '../history/history.html';
        }
    );
}
