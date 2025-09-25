// Navigation Configuration
// Set the base URL for all navigation links
const BASE_URL = '/Users/liqiangding/Code/MyCodes/liqiangding.com/docs';

// Navigation HTML Template
const NAVIGATION_HTML = `
    <nav>
        <div class="menu-toggle" id="mobile-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul id="nav-menu">
            <li><a href="/docs/index.html">Home</a></li>
            <li><a href="/docs/professional/professional.html">Professional Experience</a></li>
            <li><a href="/docs/blogs/blogs.html">Publications & Blogs</a></li>
            <li><a href="/docs/projects/projects.html">Side Projects</a></li>
            <li><a href="/docs/entrepreneurship/entrepreneurship.html">AudioFlo</a></li>
        </ul>
    </nav>
`;

// Dynamic Navigation Setup
document.addEventListener('DOMContentLoaded', function() {
    // Inject navigation HTML if nav-container exists
    const navContainer = document.getElementById('nav-container');
    if (navContainer) {
        navContainer.innerHTML = NAVIGATION_HTML;
    }
    
    // Update navigation links with base URL
    const navLinks = document.querySelectorAll('#nav-menu a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href.startsWith('/docs/')) {
            link.setAttribute('href', BASE_URL + href.substring(5));
        }
    });
    
    // Set active navigation item based on current page
    setActiveNavigation();
    
    // Optional: Add console log for debugging
    console.log('Navigation configured with BASE_URL:', BASE_URL);
});

// Function to set active navigation item
function setActiveNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('#nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPath = link.getAttribute('href');
        if (currentPath.includes('entrepreneurship')) {
            if (linkPath.includes('entrepreneurship')) {
                link.classList.add('active');
            }
        } else if (currentPath.includes('professional')) {
            if (linkPath.includes('professional')) {
                link.classList.add('active');
            }
        } else if (currentPath.includes('research')) {
            if (linkPath.includes('research')) {
                link.classList.add('active');
            }
        } else if (currentPath.includes('projects')) {
            if (linkPath.includes('projects')) {
                link.classList.add('active');
            }
        } else if (currentPath.includes('blogs')) {
            if (linkPath.includes('blogs')) {
                link.classList.add('active');
            }
        } else if (currentPath.includes('index') || currentPath === '/') {
            if (linkPath.includes('index')) {
                link.classList.add('active');
            }
        }
    });
}