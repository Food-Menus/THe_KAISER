       /**
         * 1. إدارة القائمة الجانبية
         * ------------------------
         * عند الضغط على أيقونة القائمة، تظهر القائمة الجانبية
         * وعند الضغط على زر الإغلاق، تختفي القائمة
         */
       const menuToggle = document.querySelector('.menu-toggle');
       const menuClose = document.querySelector('.menu-off');
       const sidebar = document.querySelector('.sidebar');

       // عند النقر على أيقونة القائمة
       menuToggle.addEventListener('click', () => {
           sidebar.classList.toggle('active');
       });

       // عند النقر على زر الإغلاق
       menuClose.addEventListener('click', () => {
           sidebar.classList.remove('active');
       });

       /**
        * 2. نسخ رقم الهاتف
        * -----------------
        * عند الضغط على زر "اتصل بنا"، يتم نسخ رقم الهاتف تلقائيًا
        */
       document.getElementById('copyButton').addEventListener('click', () => {
           const phoneNumber = document.getElementById('phoneNumber').textContent;
           
           // نسخ الرقم إلى الحافظة
           navigator.clipboard.writeText(phoneNumber).then(() => {
               // عرض رسالة نجاح
               Swal.fire({
                   title: 'تم النسخ',
                   text: 'تم نسخ رقم الهاتف بنجاح: ' + phoneNumber,
                   icon: 'success',
                   confirmButtonText: 'حسناً'
               });
           }).catch(() => {
               // في حالة حدوث خطأ
               Swal.fire({
                   title: 'خطأ',
                   text: 'تعذر نسخ الرقم، يرجى المحاولة مرة أخرى',
                   icon: 'error',
                   confirmButtonText: 'حسناً'
               });
           });
       });

       /**
        * 3. عرض الكيو آر كود
        * -------------------
        * عند الضغط على زر الكيو آر كود، تظهر صورة الكود في نافذة منبثقة
        */
       document.getElementById('showQr').addEventListener('click', () => {
           Swal.fire({
               title: 'كود الموقع',
               text: 'قم بمسح الكود للوصول لمشاركة الموقع ',
               imageUrl: "./اساسيات/QRcode_OHI.png", // يجب استبدالها بمسار الصورة الفعلي
               imageAlt: 'كيو ار كود  OHI',
               confirmButtonText: 'حسناً'
           });
       });