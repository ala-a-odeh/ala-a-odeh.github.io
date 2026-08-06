function runExploit(payloadPath) {
    // فتح الاتصال بملف الـ Bin وتمريره للذاكرة
    var xhr = new XMLHttpRequest();
    xhr.open('GET', payloadPath, true);
    xhr.responseType = 'arraybuffer';
    
    xhr.onload = function(e) {
        if (this.status == 200) {
            var payloadBuffer = new Uint8Array(this.response);
            console.log("Payload Loaded Successfully. Executing...");
            
            // هنا يتم استدعاء محرك الثغرة المباشرة للـ WebKit
            if (typeof triggerExploit === "function") {
                triggerExploit(payloadBuffer);
            } else {
                alert("جاري تشغيل الـ Payload عبر الثغرة...");
            }
        } else {
            alert("فشل تحميل ملف Payload: " + this.status);
        }
    };
    
    xhr.send();
}
