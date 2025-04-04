const googleSheetUrl = 'https://docs.google.com/spreadsheets/d/1dv6GrVRTnSFgXtFjaTJC5CNpyI6P7inqm75pYdzw2IA/gviz/tq?tqx=out:json';
const targetObject = {};

fetch(googleSheetUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text(); // الحصول على البيانات كنص
    })
    .then(data => {
        // تحويل النص إلى JSON
        const jsonData = JSON.parse(data.substr(47).slice(0, -2)); // إزالة بعض البيانات الزائدة
        const rows = jsonData.table.rows;

        // إنشاء كائن لتخزين البيانات
        const result = {};

        // ربط البيانات من الصفوف
        rows.forEach(row => {
            const key = row.c[0] ? row.c[0].v : null; // أول خلية في العمود الأول
            const value = row.c[1] ? row.c[1].v : null; // أول خلية في العمود الثاني
            if (key && value) {
                result[key] = value; // ربط المفتاح بالقيمة
            }
        });


        for (const key in result) {
            if (result.hasOwnProperty(key)) {
                targetObject[key] = result[key];
            }
        }

        const loginForm = document.getElementById('loginForm');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = usernameInput.value;
            const password = passwordInput.value;

            // التحقق من صحة بيانات الدخول
            if (targetObject[username] && targetObject[username].toString() === password) {
                // تخزين بيانات الدخول في Local Storage
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);

                // تحويل المستخدم إلى صفحة الملف الشخصي
                window.location.href = 'Profile.html';
                swal("تم التسجيل", "تم تسجيل الدخول بنجاح.", "success");
        } else {
            swal("خطأ في تسجيل الدخول", 'اسم المستخدم أو كلمة المرور غير صحيحة', "error");
            }
        });


    })
    .catch(error => {
        console.error('Error fetching data from Google Sheets:', error);
    });