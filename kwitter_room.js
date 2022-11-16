var firebaseConfig = {
      apiKey: "AIzaSyBv7vWqfNWasKIGJZNT1XSqfoCJO60ckig",
      authDomain: "kwitter-8cc15.firebaseapp.com",
      databaseURL: "https://kwitter-8cc15-default-rtdb.firebaseio.com",
      projectId: "kwitter-8cc15",
      storageBucket: "kwitter-8cc15.appspot.com",
      messagingSenderId: "187873492926",
      appId: "1:187873492926:web:553d767b282397e75643ef",
      measurementId: "G-BQ44FJLTDY"
    };
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Bienvenido a Kwitter, " + user_name + "!";
    
    function addRoom()
    {
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
      purpose : "agregar nombre de la sala"
    });
    
      localStorage.setItem("room_name", room_name);
      
      window.location = "PaginaNueva.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "PaginaNueva.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
      window.location = "index.html";
    }