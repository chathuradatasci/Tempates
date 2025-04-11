document.addEventListener('DOMContentLoaded', function() {
    // Handle card clicks using data attributes instead of onclick
    const cards = document.querySelectorAll('.news-card, .publication-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const target = this.dataset.target;
            navigateTo(target);
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Improved navigation with error handling
function navigateTo(target) {
    fetch(target, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                window.location.href = target;
            } else {
                window.location.href = '404.html';
            }
        })
        .catch(() => {
            window.location.href = '404.html';
        });
}