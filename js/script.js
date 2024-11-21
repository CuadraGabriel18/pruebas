    // JavaScript to toggle between the login and register forms
    function toggleTab(tab) {
        const loginForm = document.querySelector('.login-form');
        const signinForm = document.querySelector('.signin-form');
        const loginTab = document.querySelector('.tab[data-tab="login"]');
        const signinTab = document.querySelector('.tab[data-tab="signin"]');

        if (tab === 'login') {
            signinForm.style.display = 'none';
            loginForm.style.display = 'block';
            loginTab.classList.add('active');
            signinTab.classList.remove('active');
        } else {
            signinForm.style.display = 'block';
            loginForm.style.display = 'none';
            loginTab.classList.remove('active');
            signinTab.classList.add('active');
        }
    }
