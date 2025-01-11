// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Countdown Timer
const countdown = () => {
    const countDate = new Date('January 21, 2025 09:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // Time calculations
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calculate
    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    // Display
    document.getElementById('days').innerText = days < 10 ? `0${days}` : days;
    document.getElementById('hours').innerText = hours < 10 ? `0${hours}` : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? `0${seconds}` : seconds;

    // When countdown is over
    if (gap < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.hero').innerHTML = `<h1>Exponentia 2025 is Live!</h1><a href="#events" class="btn">Explore Events</a>`;
    }
};

const countdownInterval = setInterval(countdown, 1000);

// Registration Form Submission
const registrationForm = document.getElementById('registration-form');
const formMessage = document.getElementById('form-message');

registrationForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Simple form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const college = document.getElementById('college').value.trim();
    const event = document.getElementById('event').value;

    if (name === '' || email === '' || phone === '' || college === '' || event === '') {
        formMessage.style.color = 'red';
        formMessage.innerText = 'Please fill in all required fields.';
        return;
    }

    // Simulate form submission
    formMessage.style.color = 'green';
    formMessage.innerText = 'Thank you for registering! We will get back to you soon.';
    registrationForm.reset();
});