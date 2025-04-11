document.addEventListener('DOMContentLoaded', function() {
    // News card interaction
    const newsCards = document.querySelectorAll('.news-card');
    
    newsCards.forEach(card => {
        card.addEventListener('click', function() {
            // In a real implementation, this would link to full news article
            console.log('News card clicked');
            // Example: window.location.href = '/news/' + this.dataset.newsId;
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update copyright year automatically
    const yearSpan = document.createElement('span');
    yearSpan.textContent = new Date().getFullYear();
    document.querySelector('footer p').innerHTML = `&copy; <span>${yearSpan.textContent}</span> Innovation Research Lab. All rights reserved.`;
    
    // Additional functionality can be added here
});