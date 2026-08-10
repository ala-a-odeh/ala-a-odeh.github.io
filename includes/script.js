// ================================
// موقع علاء عودة لصيانة وتعديل أجهزة بلايستيشن
// JavaScript
// ================================

document.addEventListener("DOMContentLoaded", function () {

    // شاشة التحميل
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(function () {
            loader.classList.add("hide");

            setTimeout(function () {
                loader.style.display = "none";
            }, 600);

        }, 1800);
    }


    // تأثير ظهور العناصر عند النزول في الصفحة
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(function (element) {
        observer.observe(element);
    });


    // تأثير الضغط على الأزرار
    const buttons = document.querySelectorAll("button, .btn, a");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.classList.add("clicked");

            setTimeout(function () {
                button.classList.remove("clicked");
            }, 250);
        });
    });


    // التمرير السلس داخل الموقع
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId !== "#") {

                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });

    });


    // تأثير عند تحريك الهاتف أو الفأرة
    document.addEventListener("mousemove", function (event) {

        const x = (event.clientX / window.innerWidth - 0.5) * 10;
        const y = (event.clientY / window.innerHeight - 0.5) * 10;

        document.documentElement.style.setProperty("--mouse-x", x + "px");
        document.documentElement.style.setProperty("--mouse-y", y + "px");

    });


    // زر العودة إلى الأعلى
    const topButton = document.getElementById("topButton");

    if (topButton) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {
                topButton.classList.add("show");
            } else {
                topButton.classList.remove("show");
            }

        });

        topButton.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }


    // منع النقر بزر الفأرة الأيمن
    document.addEventListener("contextmenu", function (event) {
        event.preventDefault();
    });


    console.log("موقع علاء عودة جاهز للعمل ✅");

});