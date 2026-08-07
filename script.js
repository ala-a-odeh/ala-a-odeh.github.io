script.js
// ================================
// Alaa Odeh PS4 Host
// script.js
// ================================

const statusText = document.querySelector(".status h2");

const messages = [
    "جاري الاتصال بالخادم...",
    "تم تحميل الهوست بنجاح",
    "الهوست جاهز للاستخدام",
    "اختر العملية المطلوبة"
];

let index = 0;

setInterval(() => {
    index++;

    if(index >= messages.length){
        index = 0;
    }

    statusText.innerText = messages[index];

},3000);


// تأثير عند الضغط على الأزرار

const buttons = document.querySelectorAll("button");

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        button.style.transform="scale(0.95)";

        setTimeout(()=>{

            button.style.transform="scale(1)";

        },150);

        alert("هذه نسخة تجريبية من الموقع، سيتم ربط هذا الزر بوظيفته لاحقاً.");

    });

});


// كتابة إصدار الجهاز (يمكن تعديله لاحقاً)

document.addEventListener("DOMContentLoaded",()=>{

    const version = document.querySelectorAll(".card p")[2];

    version.innerHTML = "الإصدار : <span class='green'>9.00</span>";

});
// إخفاء شاشة التحميل

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loader").style.display="none";

    },2500);

});