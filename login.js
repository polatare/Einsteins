document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // منع إعادة تحميل الصفحة

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!username || !password) {
            alert("من فضلك أدخل اسم المستخدم وكلمة المرور.");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem("loggedInUser", username);
                window.location.href = "index.html";
            } else {
                alert("خطأ في تسجيل الدخول! تأكد من صحة البيانات.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("حدث خطأ أثناء محاولة تسجيل الدخول.");
        }
    });

    // التحقق من زر Enter عند الضغط داخل أي حقل إدخال
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // منع الإرسال الافتراضي
            loginForm.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
        }
    });
});
