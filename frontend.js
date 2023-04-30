// Get form elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;

  // Display form data
  const message = `Name: ${name}\nEmail: ${email}\nPhone Number: ${phone}`;
  alert(message);

  // Clear form inputs
  nameInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
});
