var firebaseConfig = {
    apiKey: "AIzaSyAy7TYsvuySRufBQRzferEBnR4N-joY8rE",
    authDomain: "practice-activity-66c18.firebaseapp.com",
    databaseURL: "https://practice-activity-66c18-default-rtdb.firebaseio.com",
    projectId: "practice-activity-66c18",
    storageBucket: "practice-activity-66c18.appspot.com",
    messagingSenderId: "707672010868",
    appId: "1:707672010868:web:4e009a7faabf91343b6121",
  
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

   function addRoom(){   
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({purpose:"ADDING ROOM NAME"});
localStorage.setItem("room_name", room_name);
window.location = "kwitterpage.html";
   }
   function getData(){
     firebase.database().ref("/").on('value', function (snapshot){
       document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot){childKey = childSnapshot.key;
      Room_names= childKey;
    console.log("room name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
       });});
     
   }
 getData();
 function redirectToRoomName(
   name
 )
 {
   console(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitterpage.html";
 }
 function logout(){
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location = "index.html";
 }