// Navigation Configuration
// Detect environment and calculate proper base path
function getNavigationConfig() {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;

    // For local file:// protocol
    if (protocol === 'file:') {
        // Get the directory of the current file
        const currentDir = pathname.substring(0, pathname.lastIndexOf('/') + 1);
        return {
            baseURL: currentDir,
            isLocal: true
        };
    }

    // For HTTP/HTTPS (Live Server or GitHub Pages)
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
        // Live Server
        return {
            baseURL: '/docs/',
            isLocal: true
        };
    }

    // GitHub Pages
    return {
        baseURL: '/',
        isLocal: false
    };
}

const navConfig = getNavigationConfig();

// Navigation HTML Template
const NAVIGATION_HTML = `
    <nav>
        <div class="menu-toggle" id="mobile-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul id="nav-menu">
            <li><a href="#" data-target="index.html">Home</a></li>
            <li><a href="#" data-target="professional/professional.html">Professional Experience</a></li>
            <li><a href="#" data-target="blogs/blogs.html">Publications & Blogs</a></li>
            <li><a href="#" data-target="projects/projects.html">Side Projects</a></li>
            <li><a href="#" data-target="entrepreneurship/entrepreneurship.html">AudioFlo</a></li>
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
    
    // Set up navigation links based on environment
    const navLinks = document.querySelectorAll('#nav-menu a[data-target]');
    navLinks.forEach(link => {
        const target = link.getAttribute('data-target');
        let finalURL;

        if (navConfig.isLocal && window.location.protocol === 'file:') {
            // For file:// protocol, calculate relative path
            const currentPath = window.location.pathname;
            const currentDepth = (currentPath.match(/\//g) || []).length - 1;
            const docsDepth = currentPath.includes('/docs/') ?
                currentPath.split('/docs/')[1].split('/').length - 1 : 0;

            if (docsDepth > 0) {
                finalURL = '../'.repeat(docsDepth) + target;
            } else {
                finalURL = target;
            }
        } else {
            // For HTTP/HTTPS, use baseURL
            finalURL = navConfig.baseURL + target;
        }

        link.setAttribute('href', finalURL);
        link.removeAttribute('data-target');
    });
    
    // Set active navigation item based on current page
    setActiveNavigation();
    
    // Optional: Add console log for debugging
    console.log('Navigation configured:', navConfig);
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