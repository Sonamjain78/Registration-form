// Toggle Navigation Menu
function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function scrollToContent() {
    const contentSection = document.getElementById("content");
    contentSection.scrollIntoView({ behavior: "smooth" });
}
// Toggle Navigation Menu
function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Smooth Scroll for Buttons
function scrollToContent() {
    const contentSection = document.getElementById("content");
    contentSection.scrollIntoView({ behavior: "smooth" });
}

// Registration Form Submission (Optional)
document.querySelector('form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Registration Successful!');
});
