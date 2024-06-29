// app.js

// app.js

// Now you can use Firebase services
const auth = firebase.auth();

// Your Firebase authentication logic continues here
// (Signup form submission, login form submission, etc.)


// Initialize Firebase
const auth = firebase.auth();

// Get modals and buttons
const signupModal = document.getElementById('signupModal');
const loginModal = document.getElementById('loginModal');
const signupBtn = document.getElementById('signupBtn');
const loginBtn = document.getElementById('loginBtn');
const signupClose = document.getElementsByClassName('close')[0];
const loginClose = document.getElementsByClassName('close')[1];
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');

// Event listeners for opening and closing modals
signupBtn.onclick = function() {
    signupModal.style.display = 'block';
};

loginBtn.onclick = function() {
    loginModal.style.display = 'block';
};

signupClose.onclick = function() {
    signupModal.style.display = 'none';
};

loginClose.onclick = function() {
    loginModal.style.display = 'none';
};

// Function to create new user account
signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = signupForm['signupEmail'].value;
    const password = signupForm['signupPassword'].value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('User registered:', user);
            alert('Registration successful!');
            signupModal.style.display = 'none';
            // Redirect to social page
            window.location.href = 'https://swoop.pages.dev/social';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
            alert(errorMessage);
        });
});

// Function to log in existing user
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = loginForm['loginEmail'].value;
    const password = loginForm['loginPassword'].value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('User logged in:', user);
            alert('Login successful!');
            loginModal.style.display = 'none';
            // Redirect to social page
            window.location.href = 'https://swoop.pages.dev/social';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
            alert(errorMessage);
        });
});
