import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";

import { 
  getAuth,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

const firebaseConfig = {
  // [...]
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// const auth = getAuth();
let currentUser = "";
let random = Math.floor(Math.random()*1000);
let email = `user${random}@mit.edu`;
let password = "secret";
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    currentUser = user.email;
    console.log("created account for: " + currentUser);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error code: " + errorCode + ", error message: " + errorMessage);
  });

module.exports = {currentUser};
