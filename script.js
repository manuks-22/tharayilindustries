/**
 * Single Page Application Navigation Logic
 */
function navigate(pageId) {
    // 1. Target all sections with class 'page'
    const sections = document.querySelectorAll('.page');
    
    // 2. Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 3. Show the selected section
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
    }

    // 4. Update the Browser Hash (e.g., yoursite.com/#services)
    window.location.hash = pageId;

    // 5. Close Mobile Menu if open
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('mobile-active');

    // 6. Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile Menu Toggle Event
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-active');
});

// Initialize site based on URL (e.g., if user refreshes on #services)
window.addEventListener('load', () => {
    const hash = window.location.hash.replace('#', '') || 'about';
    navigate(hash);
});

// Support Browser Back/Forward buttons
window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '') || 'about';
    navigate(hash);
});