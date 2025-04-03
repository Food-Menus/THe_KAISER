document.addEventListener('DOMContentLoaded', function() {
    function MyComponent(AI, about) {
        // قيم افتراضية إذا كانت السمات غير موجودة
        AI = AI || './default-ai.html';
        about = about || './default-about.html';
        
        return `
        <div class="sidebar">
            <h2 class="logo">The KAISER Site</h2>
            <div class="sidebar-menus">
                <a href="https://www.facebook.com/Techno.Science.TC">صفحة تيكنو ساينس</a>
                <a href="https://thekaiser.vercel.app/">الصفحة الرئيسية</a>
                <a href="https://wa.me/+201147182463?text=ازيك يا قيصر "> كلمه واتس</a>
                <a href="https://www.facebook.com/ohinstitute">فيس بوك</a>
                <a href="${about}">مين القيصر</a>
                <a href="${AI}">جارفيس</a>
                <br>
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