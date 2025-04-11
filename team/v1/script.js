document.addEventListener('DOMContentLoaded', function() {
    // Initialize collapsible panels
    initCollapsiblePanels();
    
    // Set up navigation
    initNavigation();
});

function initCollapsiblePanels() {
    // Set up panel toggles
    document.querySelectorAll('.panel-header').forEach(header => {
        // Add click handler
        header.addEventListener('click', togglePanel);
        
        // Add keyboard accessibility
        header.setAttribute('tabindex', '0');
        header.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                togglePanel.call(this, e);
            }
        });
    });

    // Open first panel by default
    const firstPanel = document.querySelector('.panel-header');
    if (firstPanel) {
        firstPanel.click();
    }
}

function togglePanel() {
    const panelId = this.dataset.panelId;
    const content = document.getElementById(`panel-${panelId}`);
    
    if (content) {
        // Toggle active classes
        this.classList.toggle('active');
        content.classList.toggle('active');
        
        // Close other panels if this one is opening
        if (this.classList.contains('active')) {
            document.querySelectorAll('.panel-header').forEach(otherHeader => {
                if (otherHeader !== this && otherHeader.classList.contains('active')) {
                    otherHeader.classList.remove('active');
                    const otherContent = document.getElementById(`panel-${otherHeader.dataset.panelId}`);
                    if (otherContent) otherContent.classList.remove('active');
                }
            });
        }
    }
}

function initNavigation() {
    // Handle logo and main navigation
    document.querySelectorAll('[data-link]').forEach(element => {
        element.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            if (link) {
                window.location.href = link;
            }
        });
    });

    // Handle member item clicks
    document.querySelectorAll('.member-item').forEach(item => {
        item.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            if (link) {
                window.location.href = link;
            }
        });
        
        // Keyboard accessibility
        item.setAttribute('tabindex', '0');
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const link = this.getAttribute('data-link');
                if (link) {
                    window.location.href = link;
                }
            }
        });
    });

    // Allow normal behavior for actual links
    document.querySelectorAll('a:not([data-link])').forEach(link => {
        if (!link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', function(e) {
                // Let normal link behavior proceed
            });
        }
    });
}