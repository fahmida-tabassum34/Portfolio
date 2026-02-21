// Navigation functionality - FIXED VERSION
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded');
    
    // Get all page elements and navigation links
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Function to show a specific page and hide others
    function showPage(pageId) {
        console.log('Showing page:', pageId);
        
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
            page.style.display = 'none';
        });
        
        // Show the selected page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.style.display = 'block';
            // Small delay to ensure display change before adding class
            setTimeout(() => {
                targetPage.classList.add('active');
            }, 10);
        } else {
            console.error('Page not found:', pageId);
        }
        
        // Remove active class from all nav links
        navLinks.forEach(link => {
            link.classList.remove('active-link');
        });
        
        // Add active class to clicked nav link
        const activeLink = document.querySelector(`[href="#${pageId}"]`);
        if (activeLink) {
            activeLink.classList.add('active-link');
        }
    }
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href'); // Returns "#home-page" etc.
            const pageId = href.substring(1); // Remove the # character
            showPage(pageId);
        });
    });
    
    // Set initial page - show home page
    // First hide all pages
    pages.forEach(page => {
        page.style.display = 'none';
    });
    
    // Show home page
    const homePage = document.getElementById('home-page');
    if (homePage) {
        homePage.style.display = 'block';
        homePage.classList.add('active');
    }
    
    // Set active class on home link
    const homeLink = document.getElementById('home-link');
    if (homeLink) {
        homeLink.classList.add('active-link');
    }
    
    // Handle cases where pages might be initially visible
    // This ensures only one page is visible at start
    console.log('Navigation initialized');
});