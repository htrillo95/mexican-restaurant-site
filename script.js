/* ========================================
   EL CORAZÓN RESTAURANT - JAVASCRIPT
   ======================================== */

// Wait for DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // MOBILE MENU TOGGLE FUNCTIONALITY
    // ========================================
    
    // Get references to mobile menu elements
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu when hamburger is clicked
    hamburger.addEventListener('click', function() {
        // Toggle active class on hamburger for animation
        hamburger.classList.toggle('active');
        
        // Toggle active class on nav menu to show/hide
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.classList.toggle('menu-open');
    });
    
    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active classes to close menu
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // Close mobile menu when clicking outside of it
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target) || hamburger.contains(event.target);
        
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
    
    // ========================================
    // SMOOTH SCROLLING FOR NAVIGATION LINKS
    // ========================================
    
    // Add smooth scrolling behavior to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Get the target section ID from href attribute
            const targetId = this.getAttribute('href');
            
            // Only handle internal links (starting with #)
            if (targetId.startsWith('#')) {
                e.preventDefault();
                
                // Get the target element
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Calculate offset for fixed header
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    // Smooth scroll to target position
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ========================================
    // HEADER SCROLL EFFECT
    // ========================================
    
    // Get header element
    const header = document.querySelector('.header');
    
    // Function to handle header scroll effect
    function handleHeaderScroll() {
        const scrollY = window.scrollY;
        
        // Add/remove scrolled class based on scroll position
        if (scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', handleHeaderScroll);
    
    // ========================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ========================================
    
    // Create intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll('.menu-item, .gallery-item, .contact-item');
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // ========================================
    // GALLERY LIGHTBOX FUNCTIONALITY (Optional Enhancement)
    // ========================================
    
    // Add click event listeners to gallery items for potential lightbox
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // This is a placeholder for future lightbox functionality
            // You can implement a lightbox library here if needed
            console.log('Gallery item clicked - lightbox functionality can be added here');
        });
    });
    
    // ========================================
    // FORM VALIDATION (For Future Contact Form)
    // ========================================
    
    // Placeholder function for future contact form validation
    function validateContactForm(formData) {
        const errors = [];
        
        // Example validation logic (uncomment when contact form is added)
        /*
        if (!formData.name || formData.name.trim().length < 2) {
            errors.push('Name must be at least 2 characters long');
        }
        
        if (!formData.email || !isValidEmail(formData.email)) {
            errors.push('Please enter a valid email address');
        }
        
        if (!formData.message || formData.message.trim().length < 10) {
            errors.push('Message must be at least 10 characters long');
        }
        */
        
        return errors;
    }
    
    // Email validation helper function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // ========================================
    // PERFORMANCE OPTIMIZATIONS
    // ========================================
    
    // Throttle scroll events for better performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(function() {
            handleHeaderScroll();
        }, 10);
    });
    
    // ========================================
    // ACCESSIBILITY ENHANCEMENTS
    // ========================================
    
    // Add keyboard navigation support for mobile menu
    hamburger.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            hamburger.click();
        }
    });
    
    // Add focus management for mobile menu
    function manageFocus() {
        if (navMenu.classList.contains('active')) {
            // Focus first menu item when menu opens
            const firstMenuItem = navMenu.querySelector('.nav-link');
            if (firstMenuItem) {
                firstMenuItem.focus();
            }
        }
    }
    
    // Call focus management when menu toggles
    hamburger.addEventListener('click', manageFocus);
    
    // ========================================
    // UTILITY FUNCTIONS
    // ========================================
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to debounce function calls
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // ========================================
    // INITIALIZATION
    // ========================================
    
    // Initialize any components that need setup
    function initialize() {
        console.log('El Corazón Restaurant website initialized successfully!');
        
        // Add any additional initialization code here
        // For example: loading animations, preloader, etc.
    }
    
    // Call initialization function
    initialize();
    
    // ========================================
    // ERROR HANDLING
    // ========================================
    
    // Global error handler for uncaught errors
    window.addEventListener('error', function(e) {
        console.error('An error occurred:', e.error);
        // You can add error reporting here if needed
    });
    
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', function(e) {
        console.error('Unhandled promise rejection:', e.reason);
        // You can add error reporting here if needed
    });
    
});

/* ========================================
   ADDITIONAL CSS CLASSES FOR JAVASCRIPT FUNCTIONALITY
   ======================================== */

// Add these styles to your CSS file if you want enhanced scroll effects:

/*
.header.scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.menu-open {
    overflow: hidden;
}

.animate-in {
    animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
*/
