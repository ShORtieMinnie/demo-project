
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDecTqdlpR2kjW0Yjfp76qlVODTkSllj2o",
    authDomain: "fir-7fd37.firebaseapp.com",
    databaseURL: "https://fir-7fd37-default-rtdb.firebaseio.com",
    projectId: "fir-7fd37",
    storageBucket: "fir-7fd37.appspot.com",
    messagingSenderId: "986650983952",
    appId: "1:986650983952:web:86bfc72c750c8899df5495",
    measurementId: "G-LTSH6SEV26"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
     purpose : "adding user"
      });

  }