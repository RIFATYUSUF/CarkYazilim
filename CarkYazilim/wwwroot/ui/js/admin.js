//// Admin Authentication
//const ADMIN_CREDENTIALS = {
//    username: 'admin',
//    password: 'admin123' // Production'da mutlaka değiştirilmeli!
//};

//// Check if user is logged in
//function checkAuth() {
//    const isAuthenticated = localStorage.getItem('adminAuthenticated');
//    const currentPage = window.location.pathname.split('/').pop();

//    const protectedPages = ['admin-panel.html', 'admin-content.html'];

//    if (protectedPages.includes(currentPage) && !isAuthenticated) {
//        window.location.href = 'admin-login.html';
//    }

//    if (currentPage === 'admin-login.html' && isAuthenticated) {
//        window.location.href = 'admin-panel.html';
//    }
//}

//// Login function
//function handleLogin() {
//    const loginForm = document.getElementById('adminLoginForm');
//    if (!loginForm) return;

//    loginForm.addEventListener('submit', (e) => {
//        e.preventDefault();

//        const username = document.getElementById('username').value;
//        const password = document.getElementById('password').value;
//        const usernameError = document.getElementById('usernameError');
//        const passwordError = document.getElementById('passwordError');
//        const loginBtn = document.getElementById('loginBtn');

//        // Clear previous errors
//        usernameError.textContent = '';
//        passwordError.textContent = '';

//        // Validate
//        if (!username) {
//            usernameError.textContent = 'Kullanıcı adı gereklidir';
//            return;
//        }

//        if (!password) {
//            passwordError.textContent = 'Şifre gereklidir';
//            return;
//        }

//        // Check credentials
//        if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
//            loginBtn.disabled = true;
//            loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Giriş yapılıyor...';

//            // Simulate login delay
//            setTimeout(() => {
//                localStorage.setItem('adminAuthenticated', 'true');
//                localStorage.setItem('adminLoginTime', new Date().toISOString());
//                window.location.href = 'admin-panel.html';
//            }, 500);
//        } else {
//            passwordError.textContent = 'Kullanıcı adı veya şifre hatalı';
//            loginBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Hata!';
//            setTimeout(() => {
//                loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Giriş Yap';
//            }, 2000);
//        }
//    });
//}

//// Password toggle
//function initPasswordToggle() {
//    const toggleBtn = document.getElementById('togglePassword');
//    const passwordInput = document.getElementById('password');

//    if (toggleBtn && passwordInput) {
//        toggleBtn.addEventListener('click', () => {
//            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
//            passwordInput.setAttribute('type', type);

//            const icon = toggleBtn.querySelector('i');
//            icon.classList.toggle('fa-eye');
//            icon.classList.toggle('fa-eye-slash');
//        });
//    }
//}

//// Logout function
//function handleLogout() {
//    const logoutBtn = document.getElementById('logoutBtn');
//    if (logoutBtn) {
//        logoutBtn.addEventListener('click', (e) => {
//            e.preventDefault();
//            if (confirm('Çıkış yapmak istediğinize emin misiniz?')) {
//                localStorage.removeItem('adminAuthenticated');
//                localStorage.removeItem('adminLoginTime');
//                window.location.href = 'admin-login.html';
//            }
//        });
//    }
//}

//// Get all teklif submissions
//function getTeklifler() {
//    const teklifler = localStorage.getItem('teklifSubmissions');
//    return teklifler ? JSON.parse(teklifler) : [];
//}

//// Save teklif submission
//function saveTeklif(teklifData) {
//    const teklifler = getTeklifler();
//    const newTeklif = {
//        id: Date.now().toString(),
//        ...teklifData,
//        date: new Date().toISOString()
//    };
//    teklifler.unshift(newTeklif);
//    localStorage.setItem('teklifSubmissions', JSON.stringify(teklifler));
//    return newTeklif;
//}

//// Display teklifler in admin panel
//function displayTeklifler(teklifler = null) {
//    const teklifList = document.getElementById('teklifList');
//    if (!teklifList) return;

//    const allTeklifler = teklifler || getTeklifler();

//    if (allTeklifler.length === 0) {
//        teklifList.innerHTML = `
//            <div class="empty-state">
//                <i class="fas fa-inbox"></i>
//                <h3>Henüz teklif bulunmuyor</h3>
//                <p>Teklif formlarından gelen veriler burada görüntülenecek</p>
//            </div>
//        `;
//        return;
//    }

//    teklifList.innerHTML = allTeklifler.map(teklif => {
//        const date = new Date(teklif.date);
//        const formattedDate = date.toLocaleDateString('tr-TR', {
//            year: 'numeric',
//            month: 'long',
//            day: 'numeric',
//            hour: '2-digit',
//            minute: '2-digit'
//        });

//        return `
//            <div class="teklif-item" data-id="${teklif.id}">
//                <div class="teklif-header">
//                    <div>
//                        <h3>${escapeHtml(teklif.name || 'İsimsiz')}</h3>
//                        <div class="teklif-date">
//                            <i class="fas fa-clock"></i> ${formattedDate}
//                        </div>
//                    </div>
//                </div>
//                <div class="teklif-info">
//                    <div class="info-item">
//                        <i class="fas fa-envelope"></i>
//                        <span>${escapeHtml(teklif.email || 'Belirtilmemiş')}</span>
//                    </div>
//                    ${teklif.phone ? `
//                    <div class="info-item">
//                        <i class="fas fa-phone"></i>
//                        <span>${escapeHtml(teklif.phone)}</span>
//                    </div>
//                    ` : ''}
//                </div>
//                ${teklif.message ? `
//                <div class="teklif-message">
//                    <p>${escapeHtml(teklif.message).substring(0, 200)}${teklif.message.length > 200 ? '...' : ''}</p>
//                </div>
//                ` : ''}
//                <div class="teklif-actions">
//                    <button class="btn btn-primary btn-small" onclick="showTeklifDetail('${teklif.id}')">
//                        <i class="fas fa-eye"></i> Detaylar
//                    </button>
//                    <button class="btn btn-danger btn-small" onclick="deleteTeklif('${teklif.id}')">
//                        <i class="fas fa-trash"></i> Sil
//                    </button>
//                </div>
//            </div>
//        `;
//    }).join('');
//}

//// Show teklif detail
//function showTeklifDetail(id) {
//    const teklifler = getTeklifler();
//    const teklif = teklifler.find(t => t.id === id);

//    if (!teklif) {
//        alert('Teklif bulunamadı');
//        return;
//    }

//    const modal = document.getElementById('detailModal');
//    const modalBody = document.getElementById('modalBody');

//    const date = new Date(teklif.date);
//    const formattedDate = date.toLocaleDateString('tr-TR', {
//        year: 'numeric',
//        month: 'long',
//        day: 'numeric',
//        hour: '2-digit',
//        minute: '2-digit'
//    });

//    modalBody.innerHTML = `
//        <div class="teklif-info" style="margin-bottom: 20px;">
//            <div class="info-item">
//                <i class="fas fa-user"></i>
//                <span><strong>Ad Soyad:</strong> ${escapeHtml(teklif.name || 'Belirtilmemiş')}</span>
//            </div>
//            <div class="info-item">
//                <i class="fas fa-envelope"></i>
//                <span><strong>E-posta:</strong> ${escapeHtml(teklif.email || 'Belirtilmemiş')}</span>
//            </div>
//            ${teklif.phone ? `
//            <div class="info-item">
//                <i class="fas fa-phone"></i>
//                <span><strong>Telefon:</strong> ${escapeHtml(teklif.phone)}</span>
//            </div>
//            ` : ''}
//            <div class="info-item">
//                <i class="fas fa-clock"></i>
//                <span><strong>Tarih:</strong> ${formattedDate}</span>
//            </div>
//        </div>
//        ${teklif.message ? `
//        <div class="teklif-message">
//            <h4 style="color: var(--primary-color, #00ffff); margin-bottom: 10px;">Proje Detayları:</h4>
//            <p style="white-space: pre-wrap;">${escapeHtml(teklif.message)}</p>
//        </div>
//        ` : ''}
//    `;

//    modal.classList.add('active');
//}

//// Delete teklif
//function deleteTeklif(id) {
//    if (!confirm('Bu teklifi silmek istediğinize emin misiniz?')) {
//        return;
//    }

//    const teklifler = getTeklifler();
//    const filtered = teklifler.filter(t => t.id !== id);
//    localStorage.setItem('teklifSubmissions', JSON.stringify(filtered));

//    displayTeklifler();
//    updateStats();
//}

//// Update statistics
//function updateStats() {
//    const teklifler = getTeklifler();
//    const total = teklifler.length;

//    const now = new Date();
//    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//    const startOfWeek = new Date(now.getTime() - (now.getDay() * 24 * 60 * 60 * 1000));
//    startOfWeek.setHours(0, 0, 0, 0);
//    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

//    const today = teklifler.filter(t => new Date(t.date) >= startOfDay).length;
//    const thisWeek = teklifler.filter(t => new Date(t.date) >= startOfWeek).length;
//    const thisMonth = teklifler.filter(t => new Date(t.date) >= startOfMonth).length;

//    document.getElementById('totalTeklif').textContent = total;
//    document.getElementById('today').textContent = today;
//    document.getElementById('thisWeek').textContent = thisWeek;
//    document.getElementById('thisMonth').textContent = thisMonth;
//}

//// Search and filter
//function initFilters() {
//    const searchInput = document.getElementById('searchInput');
//    const sortSelect = document.getElementById('sortSelect');
//    const clearFilters = document.getElementById('clearFilters');

//    function applyFilters() {
//        const teklifler = getTeklifler();
//        let filtered = [...teklifler];

//        // Search filter
//        const searchTerm = searchInput.value.toLowerCase();
//        if (searchTerm) {
//            filtered = filtered.filter(t => 
//                (t.name && t.name.toLowerCase().includes(searchTerm)) ||
//                (t.email && t.email.toLowerCase().includes(searchTerm)) ||
//                (t.phone && t.phone.toLowerCase().includes(searchTerm)) ||
//                (t.message && t.message.toLowerCase().includes(searchTerm))
//            );
//        }

//        // Sort
//        const sortValue = sortSelect.value;
//        filtered.sort((a, b) => {
//            switch(sortValue) {
//                case 'newest':
//                    return new Date(b.date) - new Date(a.date);
//                case 'oldest':
//                    return new Date(a.date) - new Date(b.date);
//                case 'name':
//                    return (a.name || '').localeCompare(b.name || '');
//                default:
//                    return 0;
//            }
//        });

//        displayTeklifler(filtered);
//    }

//    if (searchInput) {
//        searchInput.addEventListener('input', applyFilters);
//    }

//    if (sortSelect) {
//        sortSelect.addEventListener('change', applyFilters);
//    }

//    if (clearFilters) {
//        clearFilters.addEventListener('click', () => {
//            searchInput.value = '';
//            sortSelect.value = 'newest';
//            displayTeklifler();
//        });
//    }
//}

//// Export to CSV
//function exportToCSV() {
//    const teklifler = getTeklifler();

//    if (teklifler.length === 0) {
//        alert('Dışa aktarılacak veri bulunmuyor');
//        return;
//    }

//    const headers = ['ID', 'Ad Soyad', 'E-posta', 'Telefon', 'Mesaj', 'Tarih'];
//    const rows = teklifler.map(t => [
//        t.id,
//        t.name || '',
//        t.email || '',
//        t.phone || '',
//        (t.message || '').replace(/\n/g, ' ').replace(/,/g, ';'),
//        new Date(t.date).toLocaleString('tr-TR')
//    ]);

//    const csvContent = [
//        headers.join(','),
//        ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
//    ].join('\n');

//    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
//    const link = document.createElement('a');
//    const url = URL.createObjectURL(blob);

//    link.setAttribute('href', url);
//    link.setAttribute('download', `teklifler_${new Date().toISOString().split('T')[0]}.csv`);
//    link.style.visibility = 'hidden';

//    document.body.appendChild(link);
//    link.click();
//    document.body.removeChild(link);
//}

//// Escape HTML to prevent XSS
//function escapeHtml(text) {
//    if (!text) return '';
//    const div = document.createElement('div');
//    div.textContent = text;
//    return div.innerHTML;
//}

//// Initialize admin panel
//function initAdminPanel() {
//    const refreshBtn = document.getElementById('refreshBtn');
//    const exportBtn = document.getElementById('exportBtn');
//    const closeModal = document.getElementById('closeModal');
//    const modal = document.getElementById('detailModal');

//    if (refreshBtn) {
//        refreshBtn.addEventListener('click', () => {
//            displayTeklifler();
//            updateStats();
//            refreshBtn.innerHTML = '<i class="fas fa-check"></i> Yenilendi';
//            setTimeout(() => {
//                refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Yenile';
//            }, 2000);
//        });
//    }

//    if (exportBtn) {
//        exportBtn.addEventListener('click', exportToCSV);
//    }

//    if (closeModal) {
//        closeModal.addEventListener('click', () => {
//            modal.classList.remove('active');
//        });
//    }

//    if (modal) {
//        modal.addEventListener('click', (e) => {
//            if (e.target === modal) {
//                modal.classList.remove('active');
//            }
//        });
//    }

//    displayTeklifler();
//    updateStats();
//    initFilters();
//}

//// Add sample data function
//function addSampleTeklifler() {
//    const sampleData = [
//        {
//            id: '1',
//            name: 'Ahmet Yılmaz',
//            email: 'ahmet.yilmaz@example.com',
//            phone: '0532 123 45 67',
//            message: 'Merhaba, web sitesi geliştirme projemiz için teklif almak istiyoruz. E-ticaret sitesi yapılacak ve yaklaşık 50 ürün kategorisi olacak. Detaylı bilgi için görüşmek isteriz.',
//            date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
//        },
//        {
//            id: '2',
//            name: 'Ayşe Demir',
//            email: 'ayse.demir@example.com',
//            phone: '0543 987 65 43',
//            message: 'Mobil uygulama geliştirme hizmetiniz hakkında bilgi almak istiyorum. iOS ve Android için bir fitness uygulaması planlıyoruz.',
//            date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
//        },
//        {
//            id: '3',
//            name: 'Mehmet Kaya',
//            email: 'mehmet.kaya@example.com',
//            phone: '0555 111 22 33',
//            message: 'Oyun geliştirme konusunda uzman olduğunuzu duydum. Unity ile 2D bir platform oyunu yapmak istiyoruz. Bütçe ve süre konusunda bilgi alabilir miyiz?',
//            date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
//        },
//        {
//            id: '4',
//            name: 'Zeynep Şahin',
//            email: 'zeynep.sahin@example.com',
//            phone: '0533 444 55 66',
//            message: 'Kurumsal web sitesi yenileme projemiz var. Mevcut sitemizi modern bir tasarımla güncellemek istiyoruz. SEO optimizasyonu da dahil olmalı.',
//            date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
//        },
//        {
//            id: '5',
//            name: 'Can Özkan',
//            email: 'can.ozkan@example.com',
//            phone: '0544 777 88 99',
//            message: 'Yapay zeka destekli bir chatbot sistemi geliştirmek istiyoruz. Müşteri hizmetleri için kullanılacak. Teknik detaylar ve maliyet hakkında bilgi almak istiyoruz.',
//            date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString()
//        },
//        {
//            id: '6',
//            name: 'Elif Yıldız',
//            email: 'elif.yildiz@example.com',
//            phone: '',
//            message: 'Sosyal medya yönetimi hizmetiniz hakkında bilgi almak istiyorum. Instagram ve LinkedIn hesaplarımızı profesyonel şekilde yönetmek istiyoruz.',
//            date: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString()
//        },
//        {
//            id: '7',
//            name: 'Burak Arslan',
//            email: 'burak.arslan@example.com',
//            phone: '0536 222 33 44',
//            message: 'Otomasyon projesi için danışmanlık almak istiyoruz. İş süreçlerimizi dijitalleştirmek ve otomatikleştirmek istiyoruz. Ön görüşme yapabilir miyiz?',
//            date: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString()
//        },
//        {
//            id: '8',
//            name: 'Selin Aydın',
//            email: 'selin.aydin@example.com',
//            phone: '0555 666 77 88',
//            message: 'E-ticaret platformu geliştirme projemiz var. Ödeme entegrasyonları, stok yönetimi ve kargo entegrasyonu gerekiyor. Detaylı teklif almak istiyoruz.',
//            date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
//        }
//    ];

//    // Check if sample data already exists
//    const existing = getTeklifler();
//    if (existing.length === 0) {
//        localStorage.setItem('teklifSubmissions', JSON.stringify(sampleData));
//        return true;
//    }
//    return false;
//}

//// Initialize on page load
//document.addEventListener('DOMContentLoaded', () => {
//    checkAuth();

//    const currentPage = window.location.pathname.split('/').pop();

//    if (currentPage === 'admin-login.html') {
//        handleLogin();
//        initPasswordToggle();
//    } else if (currentPage === 'admin-panel.html') {
//        handleLogout();
//        // Add sample data if empty
//        addSampleTeklifler();
//        initAdminPanel();
//    }
//});

//// Make functions available globally for onclick handlers
//window.showTeklifDetail = showTeklifDetail;
//window.deleteTeklif = deleteTeklif;

document.addEventListener("DOMContentLoaded", () => {
    // Modal aç/kapat
    const modal = document.getElementById("detailModal");
    const closeBtn = document.getElementById("closeModal");

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
        });
    }

    // Filtreleme sadece DOM üzerinde yapılır
    const searchInput = document.getElementById("searchInput");

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const term = searchInput.value.toLowerCase();
            const items = document.querySelectorAll(".teklif-item");

            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(term) ? "block" : "none";
            });
        });
    }
});


