// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for all internal links
    const allInternalLinks = document.querySelectorAll('a[href^="#"]');
    
    allInternalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (navToggle && navLinksContainer) {
        navToggle.addEventListener('click', function() {
            navLinksContainer.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = sanitizeInput(formData.get('name') || '');
            const email = sanitizeInput(formData.get('email') || '');
            const message = sanitizeInput(formData.get('message') || '');
            
            // Simple form validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Additional validation
            if (name.length < 2 || name.length > 100) {
                showNotification('Name must be between 2 and 100 characters', 'error');
                return;
            }
            
            if (message.length < 10 || message.length > 1000) {
                showNotification('Message must be between 10 and 1000 characters', 'error');
                return;
            }
            
            // Simulate form submission (you would replace this with actual form handling)
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            this.reset();
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .skill-item, .contact-item, .expertise-category, .education-item');
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Add typing animation to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Get the text content while preserving the structure
        const highlightSpan = heroTitle.querySelector('.highlight');
        const beforeText = "Hello, I'm ";
        const highlightText = highlightSpan ? highlightSpan.textContent : "Stephen Tyrrell";
        const fullText = beforeText + highlightText;
        
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < fullText.length) {
                if (i < beforeText.length) {
                    heroTitle.textContent += fullText.charAt(i);
                } else if (i === beforeText.length) {
                    // Start the highlight span
                    const span = document.createElement('span');
                    span.className = 'highlight';
                    heroTitle.appendChild(span);
                    span.textContent += fullText.charAt(i);
                } else {
                    // Continue adding to highlight span
                    const span = heroTitle.querySelector('.highlight');
                    span.textContent += fullText.charAt(i);
                }
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 500);
    }

    // Add parallax effect to floating elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const elements = document.querySelectorAll('.floating-element');
        
        elements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click-to-copy functionality for email
    const emailElement = document.querySelector('.contact-item span');
    if (emailElement && emailElement.textContent.includes('@')) {
        emailElement.style.cursor = 'pointer';
        emailElement.title = 'Click to copy email';
        
        emailElement.addEventListener('click', function() {
            navigator.clipboard.writeText(this.textContent).then(function() {
                showNotification('Email copied to clipboard!', 'success');
            });
        });
    }
});

// Utility functions
function isValidEmail(email) {
    // More robust email validation
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email) && email.length <= 254; // RFC 5321 limit
}

function sanitizeInput(input) {
    // Basic input sanitization
    return input.toString().trim().substring(0, 1000); // Limit length
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Set background color based on type
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #4facfe, #00f2fe)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #f093fb, #f5576c)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add some interactive easter eggs
let clickCount = 0;
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('highlight')) {
        clickCount++;
        if (clickCount === 5) {
            showNotification('🎉 You found the easter egg! Thanks for exploring!', 'success');
            clickCount = 0;
        }
    }
});

// Add smooth reveal animation on page load
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Initialize
document.body.style.opacity = '0';
