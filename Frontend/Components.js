document.addEventListener('DOMContentLoaded', function() {

//******************************************************************************************//
//*****************************************head*********************************************//

    function HeadComponent(imgH, style) {
        return `
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>The KAISER Site</title>
            <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">
            <link rel="icon" href="${imgH}" type="image/x-icon">
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.all.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.all.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
            <link rel="stylesheet" href="${style}">
        `;
    }

    const headElement = document.getElementById('head');
    if (headElement) {
        const imgH = headElement.getAttribute('data-imgH');
        const style = headElement.getAttribute('data-style');
        headElement.innerHTML = HeadComponent(imgH, style);
    }

//******************************************************************************************//
//***************************************navbar*********************************************//

    function NavbarComponent(navLocation, imgN) {
        return `
        <div class="navbar">
            <div class="menu-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" width="50" height="80" fill="currentColor" style="color:#ffffff">
                    <path d="M5 5H13V19H5V5ZM19 19H15V5H19V19ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4ZM7 12L11 8.5V15.5L7 12Z"></path>
                </svg>
            </div>
            <img class="head-img" src="${imgN}" alt="شعار المعهد">
            <a href="${navLocation}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" width="50" height="80" fill="currentColor" style="color:#ffffff;">
                <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM12 11H16V13H12V16L8 12L12 8V11Z"></path>
                </svg>
            </a>
        </div>
        `;
    }

    const navbarElement = document.getElementById('navbar');
    if (navbarElement) {
        const navLocation = navbarElement.getAttribute('data-location');
        const imgN = navbarElement.getAttribute('data-imgN');
        navbarElement.innerHTML = NavbarComponent(navLocation, imgN);
    }

//******************************************************************************************//
//***************************************sidebar********************************************//

    function SidebarComponent(AI, about) {
        return `
        <div class="sidebar">
            <h2 class="logo">The KAISER Site</h2>
            <div class="sidebar-menus">
                <a href="https://www.facebook.com/Techno.Science.TC">صفحة تيكنو ساينس</a>
                <a href="https://thekaiser.vercel.app/">الصفحة الرئيسية</a>
                <a href="https://wa.me/+201147182463?text=ازيك يا قيصر">كلمه واتس</a>
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
    if (sidebarElement) {
        const AI = sidebarElement.getAttribute('data-AI');
        const about = sidebarElement.getAttribute('data-about');
        sidebarElement.innerHTML = SidebarComponent(AI, about);

        // Add event listeners after DOM update
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
    }

//******************************************************************************************//
//***************************************footer*********************************************//

    function FooterComponent() {
        return `
        <div class="footer">
            <p>Copyright © [2025] The Kaiser. All rights reserved.</p>
        </div>
        `;
    }

    const footerElement = document.getElementById('footer');
    if (footerElement) {
        footerElement.innerHTML = FooterComponent();
    }

});