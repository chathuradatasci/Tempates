document.addEventListener('DOMContentLoaded', function() {
    // Initialize team member expander
    initTeamExpander();
    
    // Set up navigation
    initNavigation();
});

function initTeamExpander() {
    const expanderBtn = document.getElementById('team-expander');
    const moreMembers = document.getElementById('more-members-list');

    if (expanderBtn && moreMembers) {
        expanderBtn.addEventListener('click', () => {
            const isHidden = moreMembers.style.display === 'none' || 
                            getComputedStyle(moreMembers).display === 'none';
            
            if (isHidden) {
                moreMembers.style.display = 'grid';
                expanderBtn.textContent = 'Show Less';
            } else {
                moreMembers.style.display = 'none';
                expanderBtn.textContent = 'Show More';
            }
        });
    }
}

function initNavigation() {
    // Handle elements with data-link attributes
    document.querySelectorAll('[data-link]').forEach(element => {
        // Skip the expander button
        if (element.id === 'team-expander') return;

        // Add click handler
        element.addEventListener('click', (e) => {
            // Allow actual mailto/tel/external links to work normally
            if ((element.href && element.href.startsWith('mailto:')) ||
                (element.href && element.href.startsWith('tel:')) ||
                (element.target === '_blank')) {
                return;
            }

            e.preventDefault();
            const link = element.getAttribute('data-link');
            if (link) {
                window.location.href = link;
            }
        });

        // Add keyboard accessibility for non-interactive elements
        if (element.tagName !== 'A' && element.tagName !== 'BUTTON') {
            element.setAttribute('tabindex', '0');
            element.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const link = element.getAttribute('data-link');
                    if (link) {
                        window.location.href = link;
                    }
                }
            });
        }
    });

    // Handle standard navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = link.getAttribute('href');
        });
    });
}