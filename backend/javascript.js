
/********************************************************************************* */
/********************************************************************************* */
//phone number

       document.getElementById('copyButton').addEventListener('click', () => {
           const phoneNumber = document.getElementById('phoneNumber').textContent;
           
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

/********************************************************************************* */
/********************************************************************************* */
//QRcode 

       document.getElementById('showQr').addEventListener('click', () => {
           Swal.fire({
               title: 'كود الموقع',
               text: 'قم بمسح الكود للوصول لمشاركة الموقع ',
               imageUrl: "./اساسيات/QRcode_OHI.png", // يجب استبدالها بمسار الصورة الفعلي
               imageAlt: 'كيو ار كود  OHI',
               confirmButtonText: 'حسناً'
           });
       });


/********************************************************************************* */
/********************************************************************************* */
//sound

        function toggleAudio() {
            const audio = document.getElementById('sound-control');
            if (audio.paused) {
            audio.play();
            } else {
            audio.pause();
            }
        }

/********************************************************************************* */
/********************************************************************************* */
// loadingScreen

