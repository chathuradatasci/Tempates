document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentIndex = 0;
    let slideInterval;
    
    // Initialize slider
    function initSlider() {
        // Create dots
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        // Start auto-rotation
        startAutoSlide();
        
        // Pause on hover
        document.querySelector('.research-slider').addEventListener('mouseenter', pauseAutoSlide);
        document.querySelector('.research-slider').addEventListener('mouseleave', startAutoSlide);
    }
    
    // Go to specific slide
    function goToSlide(index) {
        slides[currentIndex].classList.remove('active');
        dotsContainer.children[currentIndex].classList.remove('active');
        
        currentIndex = (index + slides.length) % slides.length;
        
        slides[currentIndex].classList.add('active');
        dotsContainer.children[currentIndex].classList.add('active');
    }
    
    // Next slide
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    // Previous slide
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    // Auto-slide functions
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    function pauseAutoSlide() {
        clearInterval(slideInterval);
    }
    
    // Button events
    document.querySelector('.prev').addEventListener('click', () => {
        pauseAutoSlide();
        prevSlide();
    });
    
    document.querySelector('.next').addEventListener('click', () => {
        pauseAutoSlide();
        nextSlide();
    });
    
    // Initialize
    initSlider();
    
    // Sponsor logo click handlers
    document.querySelectorAll('.sponsor-logo').forEach(logo => {
        logo.addEventListener('click', () => {
            window.location.href = logo.getAttribute('data-target');
        });
    });
});