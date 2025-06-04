// login 警告邏輯（你應該已經有了）
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');

    alert("⚠️ 此為釣魚網站之測試，請勿輸入真實帳號密碼！");

    usernameField.value = "";
    passwordField.value = "";
});
// 🔔 點擊 Register 或 Forgot 時也提醒
document.getElementById('register-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert("⚠️ 此為釣魚網站之測試！");
});

document.getElementById('forgot-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert("⚠️ 此為釣魚網站之測試！");
});
