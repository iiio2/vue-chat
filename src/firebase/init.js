import firebase from 'firebase/app';  
import "firebase/firestore"; 

var firebaseConfig = {
    apiKey: "AIzaSyAqp6coQ08UjVRfPVKHaH3wydnD3e5j3n8",
    authDomain: "vue-chat-cc400.firebaseapp.com",
    databaseURL: "https://vue-chat-cc400.firebaseio.com",
    projectId: "vue-chat-cc400",
    storageBucket: "vue-chat-cc400.appspot.com",
    messagingSenderId: "62601655739",
    appId: "1:62601655739:web:4ab907c083f3ef7d13c09e"
  };
  // Initialize Firebase
  var firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore(); 
