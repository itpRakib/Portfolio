// Initialize AOS
AOS.init({ duration: 1000, once: false, offset: 100 });

// Page Reload Effect
window.addEventListener('beforeunload', () => {
    const reloadEffect = document.getElementById('reloadEffect');
    if (reloadEffect) {
        reloadEffect.classList.add('active');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        
        navLinks.classList.remove('active');
        // If you add an animation to the hamburger icon, reset it here
    });
});

// Loading Screen - Hide after 2.8 seconds
setTimeout(() => {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.pointerEvents = 'none';
    }
}, 2800);

// ===== Advanced Custom Cursor =====
const cursorRing = document.querySelector('.cursor-ring');
const cursorDot = document.querySelector('.cursor-dot');
const cursorGlow = document.querySelector('.cursor-glow');
const cursorTrail = document.querySelector('.cursor-trail');

let mouseX = 0;
let mouseY = 0;
let trailX = 0;
let trailY = 0;
let isOnElement = false;

function filterCert(category) {
    const cards = document.querySelectorAll('.cert-card');
    const tabBtns = document.querySelectorAll('.tab-btn');

    // Update active tab styling
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase().includes(category)) btn.classList.add('active');
    });

    cards.forEach(card => {
        const isMatch = (category === 'all' || card.classList.contains(category));
        const isExtra = card.classList.contains('extra-certs');
        const isExpanded = !card.classList.contains('hidden');

        // Logic: Show if it matches category and is either not an 'extra' or 'extra' is expanded
        if (isMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function toggleCerts() {
    const extraCerts = document.querySelectorAll('.extra-certs');
    const btn = document.getElementById('toggleCertBtn');
    
    extraCerts.forEach(cert => {
        cert.classList.toggle('hidden');
    });

    // Update button text
    if (btn.innerText.includes("See More")) {
        btn.innerText = "Show Less";
    } else {
        btn.innerText = "See More Certificates";
        // Smooth scroll back to top of section when closing
        document.getElementById('certifications').scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleCerts() {
    const extraCerts = document.querySelectorAll('.extra-certs');
    const btn = document.getElementById('toggleCertBtn');
    
    extraCerts.forEach(cert => {
        cert.classList.toggle('hidden');
    });

    if (btn.innerText.includes("See More")) {
        btn.innerText = "Show Less";
    } else {
        btn.innerText = "See More Certificates";
    }
}

function filterCert(category) {
    const cards = document.querySelectorAll('.cert-card');
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        const matchesCategory = (category === 'all' || card.classList.contains(category));
        
        if (matchesCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Track mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Update cursor positions
    if (cursorRing) {
        cursorRing.style.left = mouseX + 'px';
        cursorRing.style.top = mouseY + 'px';
    }
    if (cursorDot) {
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    }
    if (cursorGlow) {
        cursorGlow.style.left = mouseX + 'px';
        cursorGlow.style.top = mouseY + 'px';
    }
    
    // Smooth trail effect
    trailX += (mouseX - trailX) * 0.3;
    trailY += (mouseY - trailY) * 0.3;
    
    if (cursorTrail) {
        cursorTrail.style.left = trailX + 'px';
        cursorTrail.style.top = trailY + 'px';
    }
});

// Show cursor elements on mouse enter
document.addEventListener('mouseenter', () => {
    if (cursorRing) cursorRing.style.opacity = '1';
    if (cursorDot) cursorDot.style.opacity = '1';
    if (cursorGlow) cursorGlow.style.opacity = '0.6';
});

// Hide cursor elements on mouse leave
document.addEventListener('mouseleave', () => {
    if (cursorRing) cursorRing.style.opacity = '0';
    if (cursorDot) cursorDot.style.opacity = '0';
    if (cursorGlow) cursorGlow.style.opacity = '0';
});

// Expand cursor on interactive elements
const interactiveElements = document.querySelectorAll('a, button, .btn, input, textarea, .skill-card, .project-card, .info-item, .hire-option');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        if (cursorRing) cursorRing.classList.add('active');
        if (cursorDot) cursorDot.classList.add('active');
        if (cursorGlow) cursorGlow.style.opacity = '1';
        isOnElement = true;
    });
    
    el.addEventListener('mouseleave', () => {
        if (cursorRing) cursorRing.classList.remove('active');
        if (cursorDot) cursorDot.classList.remove('active');
        if (cursorGlow) cursorGlow.style.opacity = '0.6';
        isOnElement = false;
    });
});

// Add trail effect
document.addEventListener('mousemove', () => {
    if (isOnElement && cursorTrail) {
        cursorTrail.style.opacity = '1';
    } else if (cursorTrail) {
        cursorTrail.style.opacity = '0';
    }
});

// Smooth scroll hint with cursor
document.addEventListener('scroll', () => {
    if (cursorRing) {
        cursorRing.style.borderColor = '#ff006e';
    }
});

// Canvas Matrix Background
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "01[]{}()<>+-*/.@#$%^&";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);
const colors = ['#ff006e', '#8338ec', '#3a86ff', '#00d4ff'];

function drawMatrix() {
    ctx.fillStyle = "rgba(10, 11, 16, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.font = fontSize + "px 'JetBrains Mono'";
    
    for (let i = 0; i < drops.length; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillStyle = color;
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.globalAlpha = Math.random() * 0.7 + 0.3;
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
    ctx.globalAlpha = 1;
}

setInterval(drawMatrix, 50);

// Resize canvas
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Hire Me Modal Functionality
const hireBtn = document.getElementById('hireBtn');
const floatingHireBtn = document.getElementById('floatingHireBtn');
const hireModal = document.getElementById('hireModal');
const closeModal = document.getElementById('closeModal');

hireBtn?.addEventListener('click', () => {
    hireModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
});

floatingHireBtn?.addEventListener('click', () => {
    hireModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeModal?.addEventListener('click', () => {
    hireModal?.classList.remove('active');
    document.body.style.overflow = 'auto';
});

hireModal?.addEventListener('click', (e) => {
    if (e.target === hireModal) {
        hireModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hireModal?.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Floating Hire Button Scroll Animation
let lastScrollTopFloating = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (floatingHireBtn) {
        if (currentScroll > lastScrollTopFloating) {
            // Scrolling DOWN
            floatingHireBtn.classList.remove('scroll-up');
            floatingHireBtn.classList.add('scroll-down');
        } else {
            // Scrolling UP
            floatingHireBtn.classList.remove('scroll-down');
            floatingHireBtn.classList.add('scroll-up');
        }
    }
    
    lastScrollTopFloating = currentScroll <= 0 ? 0 : currentScroll;
}, { passive: true });

// Photo Hover Effects
const profileImg = document.querySelector('.profile-img');
const aboutProfileImg = document.querySelector('.about-profile-img');

if (profileImg) {
    profileImg.addEventListener('mouseenter', function() {
        this.style.filter = 'brightness(1.3) contrast(1.2) saturate(1.3) drop-shadow(0 0 25px rgba(255, 0, 110, 0.7))';
        this.style.transform = 'scale(1.05)';
    });
    profileImg.addEventListener('mouseleave', function() {
        this.style.filter = 'brightness(1.1) contrast(1.1)';
        this.style.transform = 'scale(1)';
    });
}

if (aboutProfileImg) {
    aboutProfileImg.addEventListener('mouseenter', function() {
        this.style.filter = 'brightness(1.3) contrast(1.2) saturate(1.3) drop-shadow(0 0 25px rgba(255, 0, 110, 0.7))';
        this.style.transform = 'scale(1.08) rotate(-2deg)';
    });
    aboutProfileImg.addEventListener('mouseleave', function() {
        this.style.filter = 'brightness(1.15) contrast(1.1) saturate(1.1)';
        this.style.transform = 'scale(1) rotate(0deg)';
    });
}

// Hover Effects on Elements
document.querySelectorAll('a, .btn, .skill-card, .project-card, .info-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
        // Handled by cursor system already
    });
    el.addEventListener('mouseleave', () => {
        // Handled by cursor system already
    });
});

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
});

navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// Form Submit - Formspree handles submission
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    // Allow form to submit naturally to Formspree
    // Show success message after submission
    setTimeout(() => {
        alert('Thank you! Your message has been sent successfully. I\'ll get back to you soon!');
    }, 1000);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Hide custom cursor on mobile devices
if (window.innerWidth < 768) {
    document.documentElement.style.cursor = 'auto';
    if (cursorRing) cursorRing.style.display = 'none';
    if (cursorDot) cursorDot.style.display = 'none';
    if (cursorGlow) cursorGlow.style.display = 'none';
    if (cursorTrail) cursorTrail.style.display = 'none';
}

// ===== Animated Search Icon with Scroll Direction =====
const searchIcon = document.querySelector('.search-icon');
const searchBar = document.getElementById('searchBar');
let lastScrollTop = 0;
let isScrollingDown = false;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (searchIcon) {
        // Detect scroll direction
        if (currentScroll > lastScrollTop) {
            // Scrolling DOWN
            isScrollingDown = true;
            searchIcon.classList.remove('scroll-up');
            searchIcon.classList.add('scroll-down');
        } else {
            // Scrolling UP
            isScrollingDown = false;
            searchIcon.classList.remove('scroll-down');
            searchIcon.classList.add('scroll-up');
        }
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});



// Search functionality
if (searchBar) {
    searchBar.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        if (query.length > 0) {
            // Animate search icon on search
            searchIcon.style.animation = 'none';
            setTimeout(() => {
                searchIcon.style.animation = 'searchIconPulse 0.6s ease-out';
            }, 10);
            
            // Example search functionality - filter sections
            filterPortfolioContent(query);
        } else {
            // Reset search
            document.querySelectorAll('[data-searchable]').forEach(el => {
                el.style.opacity = '1';
                el.style.display = '';
            });
        }
    });
}

// Search filter function
function filterPortfolioContent(query) {
    const skills = document.querySelectorAll('.skill-card');
    const projects = document.querySelectorAll('.project-card');
    
    let hasResults = false;
    
    // Filter skills
    skills.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
            card.style.opacity = '1';
            card.style.display = '';
            hasResults = true;
        } else {
            card.style.opacity = '0.3';
            card.style.pointerEvents = 'none';
        }
    });
    
    // Filter projects
    projects.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
            card.style.opacity = '1';
            card.style.display = '';
            hasResults = true;
        } else {
            card.style.opacity = '0.3';
            card.style.pointerEvents = 'none';
        }
    });
}

console.log('%cWelcome to Rakibul\'s Portfolio!', 'color: #2563eb; font-size: 18px; font-weight: bold;');


// ===== Typing Animation for Hero Section =====
// ===== Typing Animation for Hero Section =====
const typingCodeElement = document.getElementById('typing-code');

if (typingCodeElement) {
    const codeLines = [
        "const passion = () => {",
        "  return {",
        "    skills: ['HTML', 'CSS', 'JS'],",
        "    backend: ['Python', 'MySQL'],",
        "    OS: 'Ubuntu/Linux',",
        "    status: 'Ready to Hire'",
        "  };",
        "}"
    ];

    let lineIndex = 0;
    let charIndex = 0;

    function typeLine() {
        if (lineIndex < codeLines.length) {
            const currentLine = codeLines[lineIndex];

            if (charIndex < currentLine.length) {
                // textContent prevents HTML parsing jitters
                typingCodeElement.textContent += currentLine.charAt(charIndex);
                charIndex++;
                setTimeout(typeLine, 30); 
            } else {
                typingCodeElement.textContent += '\n';
                lineIndex++;
                charIndex = 0;
                setTimeout(typeLine, 100);
            }
        }
    }

    setTimeout(typeLine, 1000);
}