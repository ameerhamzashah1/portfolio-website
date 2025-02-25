"use strict";
// Contact Page TypeScript (contact.ts)
// Selecting form elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
// Form submission event listener
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    if (validateForm()) {
        alert('Your message has been sent successfully!');
        form.reset();
    }
});
// Function to validate form inputs
function validateForm() {
    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        return false;
    }
    if (!validateEmail(emailInput.value.trim())) {
        alert('Please enter a valid email address.');
        return false;
    }
    if (messageInput.value.trim() === '') {
        alert('Please enter your message.');
        return false;
    }
    return true;
}
// Function to validate email format
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
// Social Media Icon Click Events
const socialLinks = document.querySelectorAll('.social-icons a');
socialLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const target = event.currentTarget;
        window.open(target.href, '_blank');
    });
});
