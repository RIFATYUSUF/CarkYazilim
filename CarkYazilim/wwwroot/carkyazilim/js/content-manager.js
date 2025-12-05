// Content Manager - İçerik Yönetimi (Entity Based)

// Default content data based on entities
const defaultContent = {
    header: {
        headerId: 1,
        title: 'Çark Yazılım',
        description: 'Geleceği Kodluyoruz'
    },
    teklifForm: {
        teklifFormId: 1,
        buttonText: 'Teklif Al',
        modalTitle: 'Teklif Formu',
        submitButtonText: 'Teklif Gönder',
        messagePlaceholder: 'Projeniz hakkında detaylı bilgi verin...',
        messageMaxLength: 2000,
        isActive: true
    },
    services: [
        {
            servicesId: 1,
            serviceTitle: 'Oyun Geliştirme',
            serviceDescription: 'Unity, Unreal Engine ve özel motorlarla PC, mobil ve konsol platformları için etkileyici oyunlar geliştiriyoruz.',
            icon: 'fa-gamepad',
            link: '#',
            isActive: true
        },
        {
            servicesId: 2,
            serviceTitle: 'Web Geliştirme',
            serviceDescription: 'Modern web teknolojileri ile responsive, hızlı ve SEO uyumlu web siteleri ve web uygulamaları geliştiriyoruz.',
            icon: 'fa-globe',
            link: '#',
            isActive: true
        },
        {
            servicesId: 3,
            serviceTitle: 'Mobil Uygulama',
            serviceDescription: 'iOS ve Android platformları için native ve cross-platform uygulamalar geliştiriyoruz.',
            icon: 'fa-mobile-alt',
            link: '#',
            isActive: true
        },
        {
            servicesId: 4,
            serviceTitle: 'Sosyal Medya Yönetimi',
            serviceDescription: 'Sosyal medya hesaplarınızı yönetiyoruz ve içeriklerinizi planlıyoruz.',
            icon: 'fa-shield-alt',
            link: '#',
            isActive: true
        },
        {
            servicesId: 5,
            serviceTitle: 'Yapay Zeka & ML',
            serviceDescription: 'Machine Learning, Deep Learning ve AI çözümleri ile işletmenizi geleceğe hazırlıyoruz.',
            icon: 'fa-robot',
            link: '#',
            isActive: true
        },
        {
            servicesId: 6,
            serviceTitle: 'Otomasyon Projeleri',
            serviceDescription: 'İşinizi kolaylaştıran otomasyon projeleri geliştiriyoruz.',
            icon: 'fa-cloud',
            link: '#',
            isActive: true
        }
    ],
    portfolio: [
        {
            portfolioId: 1,
            title: 'Mobil Oyun',
            description: 'Futuristik yarış oyunu - Unity ile geliştirildi, 1M+ indirme',
            imageUrl1: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            isActive: true
        },
        {
            portfolioId: 2,
            title: 'Web Sitesi',
            description: 'Web sitesi - React & Node.js, 50K+ aktif kullanıcı',
            imageUrl1: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            isActive: true
        },
        {
            portfolioId: 3,
            title: 'Mobil Uygulama',
            description: 'Sağlık takip uygulaması - Flutter, IoT entegrasyonu',
            imageUrl1: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            isActive: true
        }
    ],
    teamMembers: [
        {
            teamMemberId: 1,
            name: 'Oğulcan',
            surname: 'Gökçay',
            role: 'CEO & Kurucu',
            initials: 'OG',
            linkedInUrl: '#',
            twitterUrl: '#',
            gitHubUrl: '#',
            isActive: true
        },
        {
            teamMemberId: 2,
            name: 'Mertcan',
            surname: 'Gökçay',
            role: 'CEO & Kurucu',
            initials: 'MG',
            linkedInUrl: '#',
            twitterUrl: '#',
            gitHubUrl: '#',
            isActive: true
        },
        {
            teamMemberId: 3,
            name: 'Doğan',
            surname: 'Ali',
            role: 'Yazılım Geliştirici',
            initials: 'DA',
            linkedInUrl: '#',
            twitterUrl: '#',
            gitHubUrl: '#',
            isActive: true
        },
        {
            teamMemberId: 4,
            name: 'Rıfat Yusuf',
            surname: 'Altun',
            role: 'Yazılım Geliştirici',
            initials: 'RYA',
            linkedInUrl: '#',
            twitterUrl: '#',
            gitHubUrl: '#',
            isActive: true
        }
    ]
};

// Get content from localStorage
function getContent() {
    const stored = localStorage.getItem('siteContent');
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error('Content parse error:', e);
            return defaultContent;
        }
    }
    return defaultContent;
}

// Save content to localStorage
function saveContent(content) {
    localStorage.setItem('siteContent', JSON.stringify(content));
}

// Initialize content manager page
function initContentManager() {
    // Tab switching
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;
            
            // Remove active class from all
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked
            btn.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
        });
    });
    
    // Load content
    loadAllContent();
    
    // Logout handler
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Çıkış yapmak istediğinize emin misiniz?')) {
                localStorage.removeItem('adminAuthenticated');
                localStorage.removeItem('adminLoginTime');
                window.location.href = 'admin-login.html';
            }
        });
    }
    
    // Modal close on outside click
    const modal = document.getElementById('editModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeEditModal();
            }
        });
    }
}

// Load all content to form
function loadAllContent() {
    const content = getContent();
    
    // Header
    document.getElementById('headerTitle').value = content.header?.title || '';
    document.getElementById('headerDescription').value = content.header?.description || '';
    
    // Teklif Form
    document.getElementById('teklifButtonText').value = content.teklifForm?.buttonText || '';
    document.getElementById('teklifModalTitle').value = content.teklifForm?.modalTitle || '';
    document.getElementById('teklifSubmitButtonText').value = content.teklifForm?.submitButtonText || '';
    document.getElementById('teklifMessagePlaceholder').value = content.teklifForm?.messagePlaceholder || '';
    document.getElementById('teklifMessageMaxLength').value = content.teklifForm?.messageMaxLength || 2000;
    document.getElementById('teklifIsActive').checked = content.teklifForm?.isActive !== false;
    
    // Display lists
    displayServices();
    displayPortfolio();
    displayTeamMembers();
}

// Save all content from form
function saveAllContent() {
    const content = {
        header: {
            headerId: getContent().header?.headerId || 1,
            title: document.getElementById('headerTitle').value,
            description: document.getElementById('headerDescription').value
        },
        teklifForm: {
            teklifFormId: getContent().teklifForm?.teklifFormId || 1,
            buttonText: document.getElementById('teklifButtonText').value,
            modalTitle: document.getElementById('teklifModalTitle').value,
            submitButtonText: document.getElementById('teklifSubmitButtonText').value,
            messagePlaceholder: document.getElementById('teklifMessagePlaceholder').value,
            messageMaxLength: parseInt(document.getElementById('teklifMessageMaxLength').value) || 2000,
            isActive: document.getElementById('teklifIsActive').checked
        },
        services: getContent().services || defaultContent.services,
        portfolio: getContent().portfolio || defaultContent.portfolio,
        teamMembers: getContent().teamMembers || defaultContent.teamMembers
    };
    
    saveContent(content);
    
    // Show success message
    const successMsg = document.getElementById('successMessage');
    successMsg.classList.add('show');
    setTimeout(() => {
        successMsg.classList.remove('show');
    }, 3000);
}

// Display services
function displayServices() {
    const content = getContent();
    const services = content.services || defaultContent.services;
    const servicesList = document.getElementById('servicesList');
    
    if (!servicesList) return;
    
    servicesList.innerHTML = services.map(service => `
        <div class="item-card" data-id="${service.servicesId}">
            <div class="item-info">
                <h4>
                    <i class="fas ${service.icon}"></i> ${escapeHtml(service.serviceTitle)}
                    ${service.isActive ? '<span style="color: #00ff00; font-size: 12px; margin-left: 10px;">✓ Aktif</span>' : '<span style="color: #ff4444; font-size: 12px; margin-left: 10px;">✗ Pasif</span>'}
                </h4>
                <p>${escapeHtml(service.serviceDescription)}</p>
                <p style="font-size: 11px; color: rgba(255,255,255,0.5); margin-top: 5px;">
                    Icon: ${service.icon} | Link: ${service.link}
                </p>
            </div>
            <div class="item-actions">
                <button class="btn btn-primary btn-small" onclick="editService(${service.servicesId})">
                    <i class="fas fa-edit"></i> Düzenle
                </button>
                <button class="btn btn-danger btn-small" onclick="deleteService(${service.servicesId})">
                    <i class="fas fa-trash"></i> Sil
                </button>
            </div>
        </div>
    `).join('');
}

// Add service
function addService() {
    const content = getContent();
    const newId = Math.max(...(content.services || []).map(s => s.servicesId || 0), 0) + 1;
    const newService = {
        servicesId: newId,
        serviceTitle: 'Yeni Hizmet',
        serviceDescription: 'Hizmet açıklaması buraya yazılacak',
        icon: 'fa-star',
        link: '#',
        isActive: true
    };
    
    if (!content.services) content.services = [];
    content.services.push(newService);
    saveContent(content);
    displayServices();
    editService(newId);
}

// Current editing item
let currentEditingItem = null;
let currentEditingType = null;

// Edit service
function editService(id) {
    const content = getContent();
    const service = content.services.find(s => s.servicesId === id);
    if (!service) return;
    
    currentEditingItem = service;
    currentEditingType = 'service';
    
    const modal = document.getElementById('editModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = 'Service Düzenle';
    modalBody.innerHTML = `
        <div class="form-group">
            <label>Service Title</label>
            <input type="text" id="editServiceTitle" value="${escapeHtml(service.serviceTitle)}" class="form-group input">
        </div>
        <div class="form-group">
            <label>Service Description</label>
            <textarea id="editServiceDescription" class="form-group textarea">${escapeHtml(service.serviceDescription)}</textarea>
        </div>
        <div class="form-group">
            <label>Icon (Font Awesome class, örn: fa-gamepad)</label>
            <input type="text" id="editServiceIcon" value="${escapeHtml(service.icon)}" class="form-group input">
        </div>
        <div class="form-group">
            <label>Link</label>
            <input type="text" id="editServiceLink" value="${escapeHtml(service.link)}" class="form-group input">
        </div>
        <div class="form-group checkbox-group">
            <input type="checkbox" id="editServiceIsActive" ${service.isActive ? 'checked' : ''}>
            <label for="editServiceIsActive">Aktif</label>
        </div>
    `;
    
    modal.classList.add('active');
}

// Delete service
function deleteService(id) {
    if (!confirm('Bu service\'i silmek istediğinize emin misiniz?')) return;
    
    const content = getContent();
    content.services = content.services.filter(s => s.servicesId !== id);
    saveContent(content);
    displayServices();
}

// Display portfolio
function displayPortfolio() {
    const content = getContent();
    const portfolio = content.portfolio || defaultContent.portfolio;
    const portfolioList = document.getElementById('portfolioList');
    
    if (!portfolioList) return;
    
    portfolioList.innerHTML = portfolio.map(item => `
        <div class="item-card" data-id="${item.portfolioId}">
            <div class="item-info">
                <h4>
                    ${escapeHtml(item.title)}
                    ${item.isActive ? '<span style="color: #00ff00; font-size: 12px; margin-left: 10px;">✓ Aktif</span>' : '<span style="color: #ff4444; font-size: 12px; margin-left: 10px;">✗ Pasif</span>'}
                </h4>
                <p>${escapeHtml(item.description)}</p>
                <p style="font-size: 11px; color: rgba(255,255,255,0.5); margin-top: 5px;">
                    Image: ${item.imageUrl1 ? item.imageUrl1.substring(0, 50) + '...' : 'Yok'}
                </p>
            </div>
            <div class="item-actions">
                <button class="btn btn-primary btn-small" onclick="editPortfolio(${item.portfolioId})">
                    <i class="fas fa-edit"></i> Düzenle
                </button>
                <button class="btn btn-danger btn-small" onclick="deletePortfolio(${item.portfolioId})">
                    <i class="fas fa-trash"></i> Sil
                </button>
            </div>
        </div>
    `).join('');
}

// Add portfolio
function addPortfolio() {
    const content = getContent();
    const newId = Math.max(...(content.portfolio || []).map(p => p.portfolioId || 0), 0) + 1;
    const newPortfolio = {
        portfolioId: newId,
        title: 'Yeni Portfolio',
        description: 'Portfolio açıklaması buraya yazılacak',
        imageUrl1: '',
        isActive: true
    };
    
    if (!content.portfolio) content.portfolio = [];
    content.portfolio.push(newPortfolio);
    saveContent(content);
    displayPortfolio();
    editPortfolio(newId);
}

// Edit portfolio
function editPortfolio(id) {
    const content = getContent();
    const portfolio = content.portfolio.find(p => p.portfolioId === id);
    if (!portfolio) return;
    
    currentEditingItem = portfolio;
    currentEditingType = 'portfolio';
    
    const modal = document.getElementById('editModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = 'Portfolio Düzenle';
    modalBody.innerHTML = `
        <div class="form-group">
            <label>Title</label>
            <input type="text" id="editPortfolioTitle" value="${escapeHtml(portfolio.title)}" class="form-group input">
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea id="editPortfolioDescription" class="form-group textarea">${escapeHtml(portfolio.description)}</textarea>
        </div>
        <div class="form-group">
            <label>Image URL</label>
            <input type="text" id="editPortfolioImageUrl" value="${escapeHtml(portfolio.imageUrl1 || '')}" class="form-group input">
        </div>
        <div class="form-group checkbox-group">
            <input type="checkbox" id="editPortfolioIsActive" ${portfolio.isActive ? 'checked' : ''}>
            <label for="editPortfolioIsActive">Aktif</label>
        </div>
    `;
    
    modal.classList.add('active');
}

// Delete portfolio
function deletePortfolio(id) {
    if (!confirm('Bu portfolio\'yu silmek istediğinize emin misiniz?')) return;
    
    const content = getContent();
    content.portfolio = content.portfolio.filter(p => p.portfolioId !== id);
    saveContent(content);
    displayPortfolio();
}

// Display team members
function displayTeamMembers() {
    const content = getContent();
    const members = content.teamMembers || defaultContent.teamMembers;
    const teamList = document.getElementById('teamList');
    
    if (!teamList) return;
    
    teamList.innerHTML = members.map(member => `
        <div class="item-card" data-id="${member.teamMemberId}">
            <div class="item-info">
                <h4>
                    ${escapeHtml(member.name)} ${escapeHtml(member.surname)} (${escapeHtml(member.initials)})
                    ${member.isActive ? '<span style="color: #00ff00; font-size: 12px; margin-left: 10px;">✓ Aktif</span>' : '<span style="color: #ff4444; font-size: 12px; margin-left: 10px;">✗ Pasif</span>'}
                </h4>
                <p>${escapeHtml(member.role)}</p>
                <p style="font-size: 11px; color: rgba(255,255,255,0.5); margin-top: 5px;">
                    LinkedIn: ${member.linkedInUrl} | Twitter: ${member.twitterUrl} | GitHub: ${member.gitHubUrl}
                </p>
            </div>
            <div class="item-actions">
                <button class="btn btn-primary btn-small" onclick="editTeamMember(${member.teamMemberId})">
                    <i class="fas fa-edit"></i> Düzenle
                </button>
                <button class="btn btn-danger btn-small" onclick="deleteTeamMember(${member.teamMemberId})">
                    <i class="fas fa-trash"></i> Sil
                </button>
            </div>
        </div>
    `).join('');
}

// Add team member
function addTeamMember() {
    const content = getContent();
    const newId = Math.max(...(content.teamMembers || []).map(t => t.teamMemberId || 0), 0) + 1;
    const newMember = {
        teamMemberId: newId,
        name: 'Yeni',
        surname: 'Üye',
        role: 'Pozisyon',
        initials: 'YU',
        linkedInUrl: '#',
        twitterUrl: '#',
        gitHubUrl: '#',
        isActive: true
    };
    
    if (!content.teamMembers) content.teamMembers = [];
    content.teamMembers.push(newMember);
    saveContent(content);
    displayTeamMembers();
    editTeamMember(newId);
}

// Edit team member
function editTeamMember(id) {
    const content = getContent();
    const member = content.teamMembers.find(m => m.teamMemberId === id);
    if (!member) return;
    
    currentEditingItem = member;
    currentEditingType = 'teamMember';
    
    const modal = document.getElementById('editModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = 'Team Member Düzenle';
    modalBody.innerHTML = `
        <div class="form-row">
            <div class="form-group">
                <label>Name</label>
                <input type="text" id="editTeamName" value="${escapeHtml(member.name)}" class="form-group input">
            </div>
            <div class="form-group">
                <label>Surname</label>
                <input type="text" id="editTeamSurname" value="${escapeHtml(member.surname)}" class="form-group input">
            </div>
        </div>
        <div class="form-group">
            <label>Role</label>
            <input type="text" id="editTeamRole" value="${escapeHtml(member.role)}" class="form-group input">
        </div>
        <div class="form-group">
            <label>Initials (örn: OG)</label>
            <input type="text" id="editTeamInitials" value="${escapeHtml(member.initials)}" class="form-group input">
        </div>
        <div class="form-group">
            <label>LinkedIn URL</label>
            <input type="text" id="editTeamLinkedIn" value="${escapeHtml(member.linkedInUrl)}" class="form-group input">
        </div>
        <div class="form-group">
            <label>Twitter URL</label>
            <input type="text" id="editTeamTwitter" value="${escapeHtml(member.twitterUrl)}" class="form-group input">
        </div>
        <div class="form-group">
            <label>GitHub URL</label>
            <input type="text" id="editTeamGitHub" value="${escapeHtml(member.gitHubUrl)}" class="form-group input">
        </div>
        <div class="form-group checkbox-group">
            <input type="checkbox" id="editTeamIsActive" ${member.isActive ? 'checked' : ''}>
            <label for="editTeamIsActive">Aktif</label>
        </div>
    `;
    
    modal.classList.add('active');
}

// Save modal content
function saveModalContent() {
    if (!currentEditingItem || !currentEditingType) return;
    
    const content = getContent();
    
    if (currentEditingType === 'service') {
        currentEditingItem.serviceTitle = document.getElementById('editServiceTitle').value;
        currentEditingItem.serviceDescription = document.getElementById('editServiceDescription').value;
        currentEditingItem.icon = document.getElementById('editServiceIcon').value;
        currentEditingItem.link = document.getElementById('editServiceLink').value;
        currentEditingItem.isActive = document.getElementById('editServiceIsActive').checked;
        saveContent(content);
        displayServices();
    } else if (currentEditingType === 'portfolio') {
        currentEditingItem.title = document.getElementById('editPortfolioTitle').value;
        currentEditingItem.description = document.getElementById('editPortfolioDescription').value;
        currentEditingItem.imageUrl1 = document.getElementById('editPortfolioImageUrl').value;
        currentEditingItem.isActive = document.getElementById('editPortfolioIsActive').checked;
        saveContent(content);
        displayPortfolio();
    } else if (currentEditingType === 'teamMember') {
        currentEditingItem.name = document.getElementById('editTeamName').value;
        currentEditingItem.surname = document.getElementById('editTeamSurname').value;
        currentEditingItem.role = document.getElementById('editTeamRole').value;
        currentEditingItem.initials = document.getElementById('editTeamInitials').value;
        currentEditingItem.linkedInUrl = document.getElementById('editTeamLinkedIn').value;
        currentEditingItem.twitterUrl = document.getElementById('editTeamTwitter').value;
        currentEditingItem.gitHubUrl = document.getElementById('editTeamGitHub').value;
        currentEditingItem.isActive = document.getElementById('editTeamIsActive').checked;
        saveContent(content);
        displayTeamMembers();
    }
    
    closeEditModal();
}

// Close edit modal
function closeEditModal() {
    const modal = document.getElementById('editModal');
    modal.classList.remove('active');
    currentEditingItem = null;
    currentEditingType = null;
}

// Delete team member
function deleteTeamMember(id) {
    if (!confirm('Bu team member\'ı silmek istediğinize emin misiniz?')) return;
    
    const content = getContent();
    content.teamMembers = content.teamMembers.filter(m => m.teamMemberId !== id);
    saveContent(content);
    displayTeamMembers();
}

// Escape HTML
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Make functions available globally
window.addService = addService;
window.editService = editService;
window.deleteService = deleteService;
window.addPortfolio = addPortfolio;
window.editPortfolio = editPortfolio;
window.deletePortfolio = deletePortfolio;
window.addTeamMember = addTeamMember;
window.editTeamMember = editTeamMember;
window.deleteTeamMember = deleteTeamMember;
window.saveAllContent = saveAllContent;
window.loadAllContent = loadAllContent;
window.saveModalContent = saveModalContent;
window.closeEditModal = closeEditModal;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'admin-content.html') {
        initContentManager();
    }
});
