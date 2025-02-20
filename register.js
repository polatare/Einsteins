document.getElementById("registerForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const phone = document.getElementById("phone").value;
    const guardian_phone = document.getElementById("guardian_phone").value;
    const national_id = document.getElementById("national_id").value;
    const password = document.getElementById("password").value;

    const userData = {
        fullname,
        phone,
        guardian_phone,
        national_id,
        password
    };

    console.log("📤 Sending Register Data:", userData); // ✅ تأكيد البيانات المرسلة

    const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    });

    const data = await response.json();
    console.log("📩 Server Response:", data); // ✅ تأكيد استجابة السيرفر
    alert(data.message);
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // منع الإرسال الفوري للنموذج

        const fullname = document.getElementById("fullname").value.trim();
        if (fullname === "") return;

        const registerBox = document.querySelector(".register-box");

        // إنشاء رسالة الترحيب
        const welcomeMessage = document.createElement("div");
        welcomeMessage.classList.add("welcome-message");
        welcomeMessage.textContent = `Welcome ${fullname}!`;

        document.body.appendChild(welcomeMessage);

        // إضافة أنيميشن اختفاء نموذج التسجيل
        registerBox.classList.add("fade-out");
        welcomeMessage.classList.add("fade-in");

        setTimeout(() => {
            registerBox.style.display = "none"; // إخفاء نموذج التسجيل
        }, 1000); // مدة الأنيميشن

        // الانتقال إلى صفحة تسجيل الدخول بعد 3 ثوانٍ
        setTimeout(() => {
            window.location.href = "login.html";
        }, 3000);
    });
});
