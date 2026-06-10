console.log("js loaded");

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email');

        if (email.value.trim() === '') {
            alert('Please complete all required fields.');
        }
    });
});