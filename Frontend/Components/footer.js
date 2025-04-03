document.addEventListener('DOMContentLoaded', function() {
    function MyComponent() {
        return `

        <div class="footer">
            <p> ©2025 حقوق النشر طلاب معهد اكتوبر العالي للهندسة</p>
        </div>

        `;
    }

    document.getElementById('footer').innerHTML = MyComponent();

});