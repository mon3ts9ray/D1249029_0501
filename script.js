document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    alert("⚠️ 此為釣魚網站之測試，請勿輸入真實帳號密碼！");
    usernameField.value = "";
    passwordField.value = "";
});

document.getElementById('register-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert("⚠️ 此為釣魚網站之測試！");
});

document.getElementById('forgot-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert("⚠️ 此為釣魚網站之測試！");
});
