function validateForm() {
 let email = document.getElementById('email').value;
 if (email === '') {
 alert('Email cannot be empty');
 return false;
 }
}