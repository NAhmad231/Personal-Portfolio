// Skill slider logic
let slider = document.getElementById('skillsSlider');
let skillItems = document.querySelectorAll('.skill-item');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
let visibleItems = 3;

function updateSlider() {
    let offset = -(currentIndex * (skillItems[0].offsetWidth + 20)); // 20 is the margin
    slider.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < skillItems.length - visibleItems) {
        currentIndex++;
        updateSlider();
    }
});

// Animate Progress Circles
function animateProgressCircles() {
    const progressCircles = document.querySelectorAll('.progress-circle');

    progressCircles.forEach(circle => {
        let progress = circle.getAttribute('data-progress');
        circle.style.setProperty('--progress', progress + '%');
    });
}

window.addEventListener('load', animateProgressCircles);

// Scroll Active Link
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('.container');
    let navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Initialize EmailJS
(function () {
    emailjs.init('X4SbwJKE49UoSRVTe');
})();

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('service_1dzptq3', 'template_8ifz8w4', this)
        .then(function () {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset();
        }, function (error) {
            alert('Failed to send message, please try again.');
            console.log('FAILED...', error);
        });
});

emailjs.init('');


