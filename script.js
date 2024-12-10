// إخفاء جميع الفيديوهات وعرض الفيديو المناسب
document.querySelectorAll('.stage-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        // إخفاء جميع الفيديوهات
        document.querySelectorAll('.stage-video').forEach(video => video.style.display = 'none');
        // عرض الفيديو المختار
        document.getElementById(`stage-${index + 1}`).style.display = 'block';
    });
});
document.getElementById('upload-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const file = document.getElementById('video-file').files[0];

    // استخدام YouTube API لتحميل الفيديو
    const apiKey = "YOUR_API_KEY";
    const uploadUrl = `https://www.googleapis.com/upload/youtube/v3/videos?part=snippet,status&key=${apiKey}`;

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(uploadUrl, {
        method: "POST",
        body: formData,
        headers: {
            Authorization: `Bearer YOUR_ACCESS_TOKEN`,
            "Content-Type": "application/octet-stream",
        },
    });

    if (response.ok) {
        alert("تم رفع الفيديو بنجاح!");
    } else {
        alert("حدث خطأ أثناء رفع الفيديو.");
    }
});
document.querySelectorAll('.stage-card').forEach(card => {
    card.addEventListener('click', () => {
        // إزالة الأنيميشن من البطاقات الأخرى
        document.querySelectorAll('.stage-card').forEach(c => c.classList.remove('animate'));

        // إضافة أنيميشن للبطاقة المختارة
        card.classList.add('animate');
    });
});
// إخفاء جميع الفيديوهات وعرض الفيديو المناسب
document.querySelectorAll('.stage-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        // إخفاء جميع الفيديوهات
        document.querySelectorAll('.stage-video').forEach(video => video.style.display = 'none');
        // عرض الفيديو المختار
        document.getElementById(`stage-${index + 1}`).style.display = 'block';
    });
});
