// Update navbar saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    updateNavbar();
    loadPurchaseHistory();
});

// Function untuk format harga
function formatPrice(price) {
    return 'Rp ' + price.toLocaleString('id-ID');
}

// Function untuk format tanggal
function formatDate(isoString) {
    const date = new Date(isoString);
    const options = { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleDateString('id-ID', options);
}

// Function untuk load purchase history
function loadPurchaseHistory() {
    const historyContent = document.getElementById('historyContent');
    
    // Cek apakah user sudah login
    if (!isUserLoggedIn()) {
        historyContent.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🔒</div>
                <h2>Login Diperlukan</h2>
                <p>Silakan login terlebih dahulu untuk melihat riwayat pembelian tiket Anda.</p>
                <a href="../auth/login.html" class="btn-browse">Login Sekarang</a>
            </div>
        `;
        return;
    }
    
    // Ambil data purchase history dari localStorage
    const purchaseHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
    
    // Filter history berdasarkan user yang login
    const userEmail = localStorage.getItem('userEmail') || sessionStorage.getItem('userEmail');
    const userHistory = purchaseHistory.filter(purchase => 
        purchase.buyerEmail === userEmail
    );
    
    if (userHistory.length === 0) {
        historyContent.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🎫</div>
                <h2>Belum Ada Pembelian</h2>
                <p>Anda belum memiliki riwayat pembelian tiket. Jelajahi event menarik dan dapatkan tiket sekarang!</p>
                <a href="../home/index.html" class="btn-browse">Jelajahi Event</a>
            </div>
        `;
        return;
    }
    
    // Urutkan dari yang terbaru
    userHistory.sort((a, b) => new Date(b.purchaseDate) - new Date(a.purchaseDate));
    
    // Render purchase cards
    const purchaseList = document.createElement('div');
    purchaseList.className = 'purchase-list';
    
    userHistory.forEach(purchase => {
        const card = createPurchaseCard(purchase);
        purchaseList.appendChild(card);
    });
    
    historyContent.appendChild(purchaseList);
}

// Function untuk create purchase card
function createPurchaseCard(purchase) {
    const card = document.createElement('div');
    card.className = 'purchase-card';
    
    // Calculate total tickets
    let totalTickets = 0;
    const ticketItemsHTML = purchase.ticketDetails.map((ticket, index) => {
        const quantity = purchase.tickets[index] || 0;
        if (quantity > 0) {
            totalTickets += quantity;
            const subtotal = ticket.price * quantity;
            return `
                <div class="ticket-item">
                    <div class="ticket-info">
                        <div class="ticket-type">${ticket.type}</div>
                        <div class="ticket-quantity">${quantity} × ${formatPrice(ticket.price)}</div>
                    </div>
                    <div class="ticket-price">${formatPrice(subtotal)}</div>
                </div>
            `;
        }
        return '';
    }).join('');
    
    const statusClass = purchase.status || 'pending';
    const statusText = statusClass === 'pending' ? 'Menunggu Verifikasi' : 
                      statusClass === 'success' ? 'Berhasil' : 'Dibatalkan';
    
    card.innerHTML = `
        <div class="purchase-header">
            <div class="purchase-info">
                <h3>${purchase.eventTitle}</h3>
                <div class="purchase-meta">
                    <span>📅 ${formatDate(purchase.purchaseDate)}</span>
                    <span>🎫 ${totalTickets} Tiket</span>
                    <span>💳 ${purchase.paymentMethod}</span>
                </div>
            </div>
            <span class="status-badge ${statusClass}">${statusText}</span>
        </div>
        
        <div class="ticket-details">
            ${ticketItemsHTML}
        </div>
        
        <div class="purchase-footer">
            <div class="total-info">
                <span class="total-label">Total Pembayaran</span>
                <span class="total-amount">${formatPrice(purchase.totalPrice)}</span>
            </div>
            <div class="purchase-actions">
                <button class="btn-detail" onclick="showPurchaseDetail('${purchase.orderNumber}')">
                    Lihat Detail
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Function untuk show purchase detail
function showPurchaseDetail(orderNumber) {
    const purchaseHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
    const purchase = purchaseHistory.find(p => p.orderNumber === orderNumber);
    
    if (!purchase) {
        showToast('Data pesanan tidak ditemukan', 'error');
        return;
    }
    
    // Calculate total tickets
    let totalTickets = 0;
    const ticketItemsHTML = purchase.ticketDetails.map((ticket, index) => {
        const quantity = purchase.tickets[index] || 0;
        if (quantity > 0) {
            totalTickets += quantity;
            const subtotal = ticket.price * quantity;
            return `
                <div class="ticket-item">
                    <div class="ticket-info">
                        <div class="ticket-type">${ticket.type}</div>
                        <div class="ticket-quantity">${quantity} × ${formatPrice(ticket.price)}</div>
                    </div>
                    <div class="ticket-price">${formatPrice(subtotal)}</div>
                </div>
            `;
        }
        return '';
    }).join('');
    
    const statusClass = purchase.status || 'pending';
    const statusText = statusClass === 'pending' ? 'Menunggu Verifikasi' : 
                      statusClass === 'success' ? 'Berhasil' : 'Dibatalkan';
    
    const detailHTML = `
        <div style="text-align: left;">
            <h3 style="font-size: 20px; margin-bottom: 16px; color: #fff;">${purchase.eventTitle}</h3>
            
            <div style="background: rgba(106, 93, 252, 0.1); padding: 12px; border-radius: 8px; margin-bottom: 16px;">
                <div style="font-size: 12px; color: #a0a0b0; margin-bottom: 4px;">Nomor Pesanan</div>
                <div style="font-size: 16px; font-weight: 700; color: #8c82ff;">${purchase.orderNumber}</div>
            </div>
            
            <div style="margin-bottom: 16px;">
                <div style="font-size: 14px; color: #a0a0b0; margin-bottom: 8px;">Status Pesanan</div>
                <span class="status-badge ${statusClass}">${statusText}</span>
            </div>
            
            <div style="margin-bottom: 16px;">
                <div style="font-size: 14px; color: #a0a0b0; margin-bottom: 8px;">Informasi Pembeli</div>
                <div style="color: #fff; font-size: 14px; line-height: 1.8;">
                    <div>👤 ${purchase.buyerName}</div>
                    <div>📧 ${purchase.buyerEmail}</div>
                    <div>📱 ${purchase.buyerPhone}</div>
                </div>
            </div>
            
            <div style="margin-bottom: 16px;">
                <div style="font-size: 14px; color: #a0a0b0; margin-bottom: 8px;">Detail Tiket</div>
                <div style="background: rgba(38, 38, 49, 0.8); border-radius: 8px; padding: 12px;">
                    ${ticketItemsHTML}
                </div>
            </div>
            
            <div style="margin-bottom: 16px;">
                <div style="font-size: 14px; color: #a0a0b0; margin-bottom: 8px;">Metode Pembayaran</div>
                <div style="color: #fff;">${purchase.paymentMethod}</div>
            </div>
            
            <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 16px; border-radius: 8px; border: 1px solid rgba(106, 93, 252, 0.3);">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 14px; color: #a0a0b0;">Total Pembayaran</span>
                    <span style="font-size: 24px; font-weight: 700; color: #fff;">${formatPrice(purchase.totalPrice)}</span>
                </div>
            </div>
        </div>
    `;
    
    showNotification(
        'Detail Pesanan',
        detailHTML,
        'info'
    );
}
