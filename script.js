// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
// const contactForm = document.querySelector('.contact-form form');
// if (contactForm) {
//     contactForm.addEventListener('submit', function (e) {
//         e.preventDefault();

//         // Basic form validation
//         const name = this.querySelector('input[type="text"]').value;
//         const email = this.querySelector('input[type="email"]').value;
//         const message = this.querySelector('textarea').value;

//         if (!name || !email || !message) {
//             alert('Please fill in all required fields');
//             return;
//         }

//         // Here you would typically send the form data to a server
//         alert('Thank you for your message! I will get back to you soon.');
//         this.reset();
//     });
// }

// Add loading animation to project cards
document.querySelectorAll('.project-item').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Add back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.className = 'back-to-top';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add active class to current navigation item
const currentLocation = location.href;
const menuItems = document.querySelectorAll('.navbar a');
menuItems.forEach(item => {
    if (item.href === currentLocation) {
        item.classList.add('active');
    }
}); 