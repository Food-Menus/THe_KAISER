document.addEventListener('DOMContentLoaded', function() {
    function MyComponent() {
        return `
        
        <div class="footer">
            <p> Copyright © [2025] The Kaiser. All rights reserved. </p>
        </div>

        `;
    }
    document.getElementById('footer').innerHTML = MyComponent();

});