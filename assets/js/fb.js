// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnR7U8nnWWOjMalysup_IMknnr0pG9KQI",
  authDomain: "voxaabykaif.firebaseapp.com",
  databaseURL: "https://voxaabykaif-default-rtdb.firebaseio.com",
  projectId: "voxaabykaif",
  storageBucket: "voxaabykaif.appspot.com",
  messagingSenderId: "1038648133788",
  appId: "1:1038648133788:web:a320cbed283c7e4d664559"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Reference to the visitor count in Firebase Realtime Database
const visitorCountRef = ref(database, 'visitorCount');

// Get the current visitor count from Firebase
get(visitorCountRef).then((snapshot) => {
  let count = snapshot.val();
  if (count === null) {
    count = 0; // Initialize to 0 if not present
  }

  // Increment the count
  count++;

  // Update the visitor count in Firebase
  set(visitorCountRef, count);

  // Display the updated count in the HTML
  document.getElementById('visitor-count-value').textContent = count;
});
