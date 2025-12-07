// -----------------------------
//  SIMPLE ADMIN JS (CLEANED)
// -----------------------------

// TAB Switching
document.addEventListener('DOMContentLoaded', () => {

    // Eğer tab-btn varsa tab geçişlerini aktif et
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;

            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
        });
    });

    // Logout
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

    // Modal click-outside close
    const modal = document.getElementById('editModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeEditModal();
        });
    }
});

// -----------------------------
//  MODAL
// -----------------------------
function closeEditModal() {
    const modal = document.getElementById('editModal');
    if (modal) modal.classList.remove('active');
}
window.closeEditModal = closeEditModal;

// -----------------------------
//  NOTHING ELSE NEEDED
// -----------------------------
// Bütün defaultContent, localStorage, display/add/edit/delete fonksiyonları SILINDI.
// Veriler tamamen backend tarafından Razor ile render edilecek.
