const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navMenu.classList.toggle('show');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        navMenu.classList.remove('show');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .about-content, .contact-form').forEach(el => {
    observer.observe(el);
});

const hero = document.querySelector('.hero');

if (hero) {
    const heroImages = [
        'img/RenderNaveTexturizado.jpg',
        'img/RenderNaveTexturizado1.jpg',
        'img/CerditoTexturizado.jpg',
        'img/CerditoTexturizado1.jpg',
        'img/Espada.jpg',
        'img/RenderDuende_1.jpg',
        'img/RenderDuende2.jpg',
        'img/RenderDuende_3.jpg',
        'img/PiezaLego.jpg',
        'img/animation.gif',
        'img/InDesign.gif',
        'img/CinematicaNaufrago-ezgif.com-video-to-gif-converter.gif',
        'img/Laberinto-ezgif.com-video-to-gif-converter.gif',
        'img/RobotBoy-ezgif.com-video-to-gif-converter.gif'
    ];

    let currentIndex = 0;
    const blendDuration = 1200;
    const slideDuration = 3000;
    const bgCurrent = document.createElement('div');
    const bgNext = document.createElement('div');

    bgCurrent.className = 'hero-bg-layer hero-bg-layer--current';
    bgNext.className = 'hero-bg-layer hero-bg-layer--next';
    bgCurrent.style.backgroundImage = `url("${heroImages[currentIndex]}")`;
    bgNext.style.backgroundImage = `url("${heroImages[currentIndex]}")`;
    hero.prepend(bgNext);
    hero.prepend(bgCurrent);

    heroImages.forEach((src) => {
        const img = new Image();
        img.src = src;
    });

    setInterval(() => {
        const nextIndex = (currentIndex + 1) % heroImages.length;
        bgNext.style.backgroundImage = `url("${heroImages[nextIndex]}")`;
        hero.classList.add('blend-active');

        setTimeout(() => {
            bgCurrent.style.backgroundImage = `url("${heroImages[nextIndex]}")`;
            hero.classList.remove('blend-active');
            currentIndex = nextIndex;
        }, blendDuration);
    }, slideDuration);
}