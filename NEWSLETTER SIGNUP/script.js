// initializing the needed values
const form = document.getElementById('clientForm')
const email = document.getElementById('client-email');
const successMessage = document.getElementById('success');
const dismissBtn = document.getElementById('dismissBtn');
const overlay = document.getElementById('overlay');
const errorMessage = document.getElementById('error-message');

// function for the dismiss button after successfully submitting the email
dismissBtn.addEventListener('click', () => {
    successMessage.classList.remove('show');
    overlay.classList.remove('show');
    email.classList.remove('failed')
    errorMessage.classList.remove('show')
} );

// function to show success message
const success = () => {
    successMessage.classList.add('show');
    overlay.classList.add('show');
}

// function to show failed error message
const failed = () => {
    email.classList.add('failed')
    errorMessage.classList.add('show')
}

// function to validate email sent to server
form.addEventListener('submit', (event) => {

    // prevent reloading of page after submitting 
    event.preventDefault();

    const emailValue = email.value;

    // function to validate email
    function isValidEmail(email) {
        const emailPattern =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    isValidEmail(emailValue) ? success() : failed();
    email.value = '';
})



