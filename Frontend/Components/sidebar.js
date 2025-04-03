document.addEventListener('DOMContentLoaded', function() {
    function MyComponent(AI, about) {
        // قيم افتراضية إذا كانت السمات غير موجودة
        AI = AI || './default-ai.html';
        about = about || './default-about.html';
        
        return `
        <div class="sidebar">
            <h2 class="logo">THe KAISER site</h2>
            <div class="sidebar-menus">
                <a href="https://www.facebook.com/ohinstitute">الصفحة الرسمية</a>
                <a href="https://www.ohi.edu.eg/default.aspx">الموقع الرسمي</a>
                <a href="https://wa.me/+201102716716?text=مرحبا اريد التواصل معكم">الدعم الفني</a>
                <a href="${about}">من نحن</a>
                <a href="${AI}">المساعد الذكي</a>
                <a href="#" class="menu-off">إغلاق</a>
            </div>
        </div>
        `;
    }

    const sidebarElement = document.getElementById('sidebar');
    const AI = sidebarElement?.getAttribute('data-AI');
    const about = sidebarElement?.getAttribute('data-about');
    
    if (sidebarElement) {
        sidebarElement.innerHTML = MyComponent(AI, about);
        
        // الانتظار حتى يتم تحديث DOM
        setTimeout(() => {
            const menuToggle = document.querySelector('.menu-toggle');
            const menuClose = document.querySelector('.menu-off');
            const sidebar = document.querySelector('.sidebar');
            
            if (menuToggle && sidebar) {
                menuToggle.addEventListener('click', () => {
                    sidebar.classList.toggle('active');
                });
            }
            
            if (menuClose && sidebar) {
                menuClose.addEventListener('click', (e) => {
                    e.preventDefault();
                    sidebar.classList.remove('active');
                });
            }
        }, 0);
    }
});