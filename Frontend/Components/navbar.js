document.addEventListener('DOMContentLoaded', function() {
    function MyComponent(Location , img) {
        return `

        <div class="navbar">
            <div class="menu-toggle">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 20" width="50" height="80" fill="currentColor" style="color:#ffffff">
                    <path d="M5 5H13V19H5V5ZM19 19H15V5H19V19ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4ZM7 12L11 8.5V15.5L7 12Z"></path>
                </svg>
            </div>
 
            <img class="head-img" src="${img}" alt="شعار المعهد">
            
            <a href="${Location}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" width="50" height="80" fill="currentColor" style="color:#ffffff;">
                    <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                </svg>
            </a>
        </div>

        `;
    }

            const navbarElement = document.getElementById('navbar');
            const location = navbarElement.getAttribute('data-location');
            const img = navbarElement.getAttribute('data-img');
            
            document.getElementById('navbar').innerHTML = MyComponent(location, img);
});