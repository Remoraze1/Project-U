const validCredentials = [
    { username: "admin", password: "password123" },
    { username: "user1", password: "letmein" },
    { username: "hacker", password: "pwned" }
];

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const isValid = validCredentials.some(
        cred => cred.username === username && cred.password === password
    );

    if (isValid) {
        window.location.href = "nextPage.html"; // Replace with the URL of the next part of the website
    } else {
        document.getElementById('error-message').textContent = "Access Denied";
    }
});


document.getElementById('github-button').addEventListener('click', function() {
    window.location.href = 'https://github.com/Remoraze1';
});

document.getElementById('home-link').addEventListener('click', function() {
    showContent('home');
});

document.getElementById('info-link').addEventListener('click', function() {
    showContent('info');
});

function showContent(contentId) {
    document.querySelectorAll('.content').forEach(function(content) {
        content.classList.remove('active');
        content.classList.add('hidden');
    });
    const selectedContent = document.getElementById(contentId);
    selectedContent.classList.remove('hidden');
    selectedContent.classList.add('active');
}

// Ensure the Home page is active on page load
showContent('home');
