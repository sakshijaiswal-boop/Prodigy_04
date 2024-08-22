// Optional: Add JavaScript functionality like form submission handling or interactive elements if needed.
// Example:
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Optional: Send form data to backend or handle form submission as per your requirement
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // You can implement AJAX/fetch here to send data to a backend or any other action.
});