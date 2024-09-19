
// Select the menu icon and navbar
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle the active class to show/hide navbar
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

const textArray = ["Data Analyst", "Data Scientist","AI & ML Developer","Front End Developer"];
let textIndex = 0;
let charIndex = 0;
let currentText = "";
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenWords = 1000;

function typeText() {
    const textElement = document.querySelector(".changing-text");

    if (charIndex < textArray[textIndex].length) {
        currentText += textArray[textIndex].charAt(charIndex);
        textElement.textContent = currentText;
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delayBetweenWords);
    }
}

function eraseText() {
    const textElement = document.querySelector(".changing-text");

    if (charIndex > 0) {
        currentText = textArray[textIndex].substring(0, charIndex - 1);
        textElement.textContent = currentText;
        charIndex--;
        setTimeout(eraseText, erasingSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeText, typingSpeed);
    }
}

// Start the typing effect when the page loads
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(typeText, delayBetweenWords);
});

// Get all sections and navbar links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

// Function to add or remove the active class as you scroll
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
