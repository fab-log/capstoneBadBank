import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";

import { 
  getAuth,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB16ksq__AzDimVMiV8wFK7lU2_JYDnqHc",
  authDomain: "bad-bank-66dd7.firebaseapp.com",
  projectId: "bad-bank-66dd7",
  storageBucket: "bad-bank-66dd7.appspot.com",
  messagingSenderId: "903319387847",
  appId: "1:903319387847:web:1323b32c504da71a3308e2"
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