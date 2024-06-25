// script.js
document.getElementById('show-register').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('login-title').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('register-title').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('register-title').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('login-title').style.display = 'block';
});
