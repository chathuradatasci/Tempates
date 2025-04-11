document.addEventListener('DOMContentLoaded', function() {
    // Initialize team member expander
    initTeamExpander();
    
    // Set up navigation
    initNavigation();
});

function initTeamExpander() {
    const expanderButton = document.getElementById('team-expander-btn');
    const moreMembersDiv = document.getElementById('more-team-members');

    if (expanderButton && moreMembersDiv) {
        expanderButton.addEventListener('click', () => {
            const isHidden = moreMembersDiv.style.display === 'none' || 
                            getComputedStyle(moreMembersDiv).display === 'none';
            
            if (isHidden) {
                moreMembersDiv.style.display = 'grid';
                expanderButton.textContent = 'Show Less';
            } else {
                moreMembersDiv.style.display = 'none';
                expanderButton.textContent = 'Show More';
            }
        });
    }
}

function initNavigation() {
    // Handle elements with data-link attributes
    document.querySelectorAll('[data-link]').forEach(element => {
        // Skip the expander button
        if (element.id === 'team-expander-btn') return;

        // Add click handler
        element.addEventListener('click', (e) => {
            if (element.tagName === 'A') {
                e.preventDefault();
            }
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