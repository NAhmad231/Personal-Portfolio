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

  function filterSkills(category) {
            const allSkills = document.querySelectorAll('.skill');

            allSkills.forEach(skill => {
                if (category === 'all') {
                    skill.style.display = 'block';
                } else {
                    if (skill.classList.contains(category)) {
                        skill.style.display = 'block';
                    } else {
                        skill.style.display = 'none';
                    }
                }
            });
        }


// Initialize EmailJS
(function () {
    emailjs.init('X4SbwJKE49UoSRVTe'); // Keep only this, remove the empty one
})();

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('service_1dzptq3', 'template_8ifz8w4', this)
        .then(function () {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        }, function (error) {
            alert('Failed to send message, please try again.');
            console.log('FAILED...', error);
        });
});




