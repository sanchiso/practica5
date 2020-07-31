  var firebaseConfig = {
    apiKey: "AIzaSyBBmO6tdZ427nYbG6aCkpP1SE0S8U6Vwqg",
    authDomain: "clasejueves0207.firebaseapp.com",
    databaseURL: "https://clasejueves0207.firebaseio.com",
    projectId: "clasejueves0207",
    storageBucket: "clasejueves0207.appspot.com",
    messagingSenderId: "386720243187",
    appId: "1:386720243187:web:4cf280c888d3356db78686",
    measurementId: "G-N5TZH2M4ZN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var ref = firebase.database().ref('/');

  ref.on("value", function(snapshot){
  	var data = snapshot.val();
  	document.getElementById("Temperatura").innerHTML = data.Temperatura;
  	document.getElementById("HumedadAmb").innerHTML = data.HumedadAmbiente;
  	document.getElementById("Distancia").innerHTML = data.Distanciacm;
  	document.getElementById("gas").innerHTML = data.Gas;
  	document.getElementById("Led").innerHTML = data.EstadoLED;
    document.getElementById("Humedad").innerHTML = data.Humedad;
  });
  
  function Prender() {
  	firebase.database().ref('/').child('EstadoLED').set("1");
	}

   function Apagar() {
  	firebase.database().ref('/').child('EstadoLED').set("0");
   }