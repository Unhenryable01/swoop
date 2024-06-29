// app.js

// Example function to handle sign up using email and password
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = signupForm['signupEmail'].value;
    const password = signupForm['signupPassword'].value;
    
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User registered:', user);
            alert('Registration successful!');
            // Redirect to social page or wherever needed
            window.location.href = 'https://swoop.pages.dev/social';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
            alert(errorMessage);
        });
});

// Example function to handle login using email and password
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = loginForm['loginEmail'].value;
    const password = loginForm['loginPassword'].value;
    
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User logged in:', user);
            alert('Login successful!');
            // Redirect to social page or wherever needed
            window.location.href = 'https://swoop.pages.dev/social';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
            alert(errorMessage);
        });
});
