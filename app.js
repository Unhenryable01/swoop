// app.js

// Firebase Auth instance (assuming it's already initialized in index.html)
const auth = firebase.auth();

// Function to handle signup form submission
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = signupForm['signupEmail'].value;
    const password = signupForm['signupPassword'].value;
    
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('User registered:', user);
            alert('Registration successful!');
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

// Function to handle login form submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = loginForm['loginEmail'].value;
    const password = loginForm['loginPassword'].value;
    
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('User logged in:', user);
            alert('Login successful!');
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
