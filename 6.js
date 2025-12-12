const form = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

let isValid = true;

  // Name validation
if (name.value.trim() === '')
{
nameError.textContent = 'Name is required';
isValid = false;
} 
else 
{
nameError.textContent = '';
}

// Email validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (!emailRegex.test(email.value.trim())) 
{
emailError.textContent = 'Invalid email address';
isValid = false;
} 
else 
{
emailError.textContent = '';
}

// Password validation
if (password.value.trim().length < 8) 
{
passwordError.textContent = 'Password must be at least 8 characters';
isValid = false;
} 
else 
{
passwordError.textContent = ''
;
}

// Confirm password validation
if (confirmPassword.value.trim() !== password.value.trim()) 
{
confirmPasswordError.textContent = 'Passwords do not match';
isValid = false;
} 
else 
{
confirmPasswordError.textContent = '';
}

if (isValid) 
{
// Form is valid, submit it
console.log('Form is valid, submitting...');
// Add your form submission logic here
}
});
