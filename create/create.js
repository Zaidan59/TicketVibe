// Create Event Form Script
let currentStep = 1;
const totalSteps = 4;
let eventData = {};

// Initialize - gabungkan semua DOMContentLoaded jadi satu
document.addEventListener('DOMContentLoaded', function() {
    // Cek apakah user sudah login
    if (!isUserLoggedIn()) {
        showNotification(
            'Login Diperlukan',
            'Anda harus login terlebih dahulu untuk membuat event.',
            'warning',
            () => {
                // Simpan URL untuk redirect setelah login
                sessionStorage.setItem('redirectAfterLogin', window.location.href);
                window.location.href = '../auth/login.html';
            }
        );
        
        // Disable form
        const form = document.getElementById('eventForm');
        if (form) {
            form.style.pointerEvents = 'none';
            form.style.opacity = '0.5';
        }
        
        return;
    }
    
    // Jika sudah login, lanjutkan inisialisasi
    updateNavbar();
    initializeForm();
});

function updateNavbar() {
    const navMenu = document.querySelector('.nav-menu');
    if (!navMenu) return;
    
    if (isUserLoggedIn()) {
        const userName = localStorage.getItem('userName') || 'User';
        
        // Hapus tombol login/daftar
        const navButtons = navMenu.querySelector('.nav-buttons');
        if (navButtons) {
            navButtons.innerHTML = `
                <span class="nav-greeting">Halo, ${userName}</span>
                <div id="profileDropdownArea" class="profile-dropdown-area"></div>
            `;
            // Render dropdown area content setelah memasang struktur nav
            renderProfileDropdown();
        }
    }
}

function initializeForm() {
    const form = document.getElementById('eventForm');
    
    // Handle image upload
    const imageInput = document.getElementById('eventImage');
    if (imageInput) {
        imageInput.addEventListener('change', handleImageUpload);
    }
    
    // Handle image preview click
    const imagePreview = document.getElementById('imagePreview');
    if (imagePreview) {
        imagePreview.addEventListener('click', () => imageInput.click());
    }
    
    // Handle form submission
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}


// Handle image upload
function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const preview = document.getElementById('imagePreview');
      preview.innerHTML = `<img src="${e.target.result}" alt="Event Preview" />`;
    };
    reader.readAsDataURL(file);
  }
}

// Next step
function nextStep(currentStepNum) {
  // Validate current step
  if (!validateStep(currentStepNum)) {
    alert('Mohon lengkapi semua field yang diperlukan');
    return;
  }

  // Save step data
  saveStepData(currentStepNum);

  // Move to next step
  if (currentStep < totalSteps) {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    currentStep++;
    document.getElementById(`step-${currentStep}`).classList.add('active');
    
    // Update step indicator
    updateStepIndicator();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Show review on step 4
    if (currentStep === 4) {
      generateReview();
    }
  }
}

// Previous step
function prevStep(currentStepNum) {
  if (currentStep > 1) {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    currentStep--;
    document.getElementById(`step-${currentStep}`).classList.add('active');
    
    // Update step indicator
    updateStepIndicator();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Validate step
function validateStep(stepNum) {
  const requiredFields = document.querySelectorAll(`#step-${stepNum} [required]`);
  
  for (let field of requiredFields) {
    if (stepNum === 1 && field.id === 'eventImage') {
      // Image validation
      if (!document.getElementById('eventImage').files.length) {
        return false;
      }
    } else if (stepNum === 3) {
      // Skip file input validation for step 3
      if (!field.value.trim()) {
        return false;
      }
    } else {
      if (!field.value.trim()) {
        return false;
      }
    }
  }
  
  return true;
}

// Save step data
function saveStepData(stepNum) {
  if (stepNum === 1) {
    eventData.eventName = document.getElementById('eventName').value;
    eventData.category = document.getElementById('category').value;
    eventData.organizer = document.getElementById('organizer').value;
    eventData.description = document.getElementById('description').value;
  } else if (stepNum === 2) {
    eventData.eventDate = document.getElementById('eventDate').value;
    eventData.eventTime = document.getElementById('eventTime').value;
    eventData.eventEndTime = document.getElementById('eventEndTime').value;
    eventData.location = document.getElementById('location').value;
    eventData.locationDetail = document.getElementById('locationDetail').value;
    eventData.city = document.getElementById('city').value;
    eventData.postalCode = document.getElementById('postalCode').value;
    eventData.capacity = document.getElementById('capacity').value;
  } else if (stepNum === 3) {
    eventData.tickets = [];
    const ticketItems = document.querySelectorAll('.ticket-item');
    ticketItems.forEach(item => {
      eventData.tickets.push({
        name: item.querySelector('.ticket-name').value,
        price: item.querySelector('.ticket-price').value,
        quota: item.querySelector('.ticket-quota').value,
        desc: item.querySelector('.ticket-desc').value || 'Akses standar'
      });
    });
  }
}

// Update step indicator
function updateStepIndicator() {
  document.querySelectorAll('.step').forEach((step, index) => {
    const stepNum = index + 1;
    step.classList.remove('active', 'completed');
    
    if (stepNum < currentStep) {
      step.classList.add('completed');
    } else if (stepNum === currentStep) {
      step.classList.add('active');
    }
  });
}

// Add ticket
function addTicket() {
  const ticketContainer = document.getElementById('ticketContainer');
  const ticketCount = ticketContainer.querySelectorAll('.ticket-item').length + 1;
  
  const newTicket = document.createElement('div');
  newTicket.className = 'ticket-item';
  newTicket.innerHTML = `
    <h4>Tiket #${ticketCount}
      <button type="button" class="btn-remove-ticket" onclick="removeTicket(this)">×</button>
    </h4>
    <div class="form-row">
      <div class="form-group">
        <label>Nama Tiket *</label>
        <input type="text" class="ticket-name" placeholder="Contoh: Early Bird, Regular, VIP" required />
      </div>

      <div class="form-group">
        <label>Harga (Rp) *</label>
        <input type="number" class="ticket-price" min="0" placeholder="0" required />
      </div>

      <div class="form-group">
        <label>Kuota *</label>
        <input type="number" class="ticket-quota" min="1" placeholder="Jumlah tiket" required />
      </div>
    </div>

    <div class="form-group">
      <label>Deskripsi Tiket</label>
      <input type="text" class="ticket-desc" placeholder="Contoh: Akses area VIP, welcome drink" />
    </div>
  `;
  
  ticketContainer.appendChild(newTicket);
}

// Remove ticket
function removeTicket(button) {
  button.closest('.ticket-item').remove();
  updateTicketNumbers();
}

// Update ticket numbers
function updateTicketNumbers() {
  const ticketItems = document.querySelectorAll('.ticket-item');
  ticketItems.forEach((item, index) => {
    item.querySelector('h4').childNodes[0].textContent = `Tiket #${index + 1}`;
  });
}

// Generate review
function generateReview() {
  const reviewContainer = document.getElementById('reviewContainer');
  
  // Parse date
  const dateObj = new Date(eventData.eventDate);
  const dateString = dateObj.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  let reviewHTML = `
    <div class="review-section">
      <h4>📋 Informasi Dasar</h4>
      <div class="review-item">
        <span class="review-label">Nama Event:</span>
        <span class="review-value">${eventData.eventName}</span>
      </div>
      <div class="review-item">
        <span class="review-label">Kategori:</span>
        <span class="review-value">${eventData.category}</span>
      </div>
      <div class="review-item">
        <span class="review-label">Penyelenggara:</span>
        <span class="review-value">${eventData.organizer}</span>
      </div>
      <div class="review-item">
        <span class="review-label">Deskripsi:</span>
        <span class="review-value">${eventData.description.substring(0, 100)}...</span>
      </div>
    </div>

    <div class="review-section">
      <h4>📅 Detail Event</h4>
      <div class="review-item">
        <span class="review-label">Tanggal:</span>
        <span class="review-value">${dateString}</span>
      </div>
      <div class="review-item">
        <span class="review-label">Waktu:</span>
        <span class="review-value">${eventData.eventTime} - ${eventData.eventEndTime}</span>
      </div>
      <div class="review-item">
        <span class="review-label">Lokasi:</span>
        <span class="review-value">${eventData.location}</span>
      </div>
      <div class="review-item">
        <span class="review-label">Alamat:</span>
        <span class="review-value">${eventData.locationDetail}, ${eventData.city}</span>
      </div>
      <div class="review-item">
        <span class="review-label">Kapasitas:</span>
        <span class="review-value">${eventData.capacity} peserta</span>
      </div>
    </div>

    <div class="review-section">
      <h4>🎫 Tiket & Harga</h4>
      ${eventData.tickets.map((ticket, index) => `
        <div class="review-item">
          <span class="review-label">${ticket.name}:</span>
          <span class="review-value">Rp ${parseInt(ticket.price).toLocaleString('id-ID')} (${ticket.quota} tiket)</span>
        </div>
      `).join('')}
    </div>
  `;

  reviewContainer.innerHTML = reviewHTML;
}

// Handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  
  // Save last step data
  saveStepData(3);
  
  // Validate terms
  if (!document.getElementById('agreeTerms').checked) {
    alert('Anda harus setuju dengan Syarat & Ketentuan');
    return;
  }

  // Submit form 
  console.log('Event Data:', eventData);
  
  // Show success message
  alert('✓ Event berhasil dibuat! Terimakasih telah menjadi bagian dari EVORA');
  
  // Redirect to dashboard
  setTimeout(() => {
    window.location.href = 'Dashboard.html';
  }, 1500);
}