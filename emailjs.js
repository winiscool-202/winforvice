const  contactForm = document.getElementById("contact-form"),
       contactMessage = document.getElementById("email")

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publickey
    emailjs.sendForm('service_d7nlxik','template_x1tqz6c','#contact-form','PIN5o5DVUcM1iFT7g').then(() => {
        // Show sent message
        contactMessage.textContent =  "Message sent successfully ✅"

        // Clear input fields
        contactForm.reset()
    }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })  
}

contactForm.addEventListener("submit", sendEmail)

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    // Toggle the visibility of the navbar when the menu icon is clicked
    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });
});