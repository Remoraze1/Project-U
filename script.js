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
