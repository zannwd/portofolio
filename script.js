// ===============================
// MOBILE NAVIGATION
// ===============================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu saat klik link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});


// ===============================
// SMOOTH SCROLL
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// ===============================
// ANIMATION (FIX BUG HILANG)
// ===============================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// ❗ FIX: jangan pakai "section"
document.querySelectorAll('.skill-card, .education-card, .timeline-content, .exp-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});


// ===============================
// CONTACT FORM
// ===============================
const form = document.querySelector('.contact-form');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Terima kasih! Pesan Anda telah dikirim.');
        this.reset();
    });
}

document.getElementById("emailForm").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "SERVICE_ID_KAMU",
        "TEMPLATE_ID_KAMU",
        this
    ).then(function () {
        alert("Pesan berhasil dikirim ke email!");
    }, function (error) {
        alert("Gagal kirim pesan!");
        console.log(error);
    });

    this.reset();
});


// ===============================
// ACTIVE LINK SCROLL
// ===============================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});