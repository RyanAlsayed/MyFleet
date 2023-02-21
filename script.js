// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCVkyMICneZvqL2Sa7o9YQv9tpIEZoU_40",
    authDomain: "fleet-management-451e9.firebaseapp.com",
    projectId: "fleet-management-451e9",
    storageBucket: "fleet-management-451e9.appspot.com",
    messagingSenderId: "18267053094",
    appId: "1:18267053094:web:f3dfe0c027d14107ca1ae7",
    measurementId: "G-HMREDFNH5E"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);