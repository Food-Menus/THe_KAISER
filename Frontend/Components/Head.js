document.addEventListener('DOMContentLoaded', function() {
    function MyComponent(img , style) {
        return `

            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>October High Institute </title>
            <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">
            <link rel="icon" href="${img}" type="image/x-icon">
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
            <link rel="stylesheet" href="${style}">

        `;
    }

            const headElement = document.getElementById('head');
            const img = headElement.getAttribute('data-img');
            const style = headElement.getAttribute('data-style');
            
            document.getElementById('head').innerHTML = MyComponent(img, style);
});