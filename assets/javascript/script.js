$(document).ready(function(){
    $('.sidenav').sidenav();

    $('.modal').modal();

    $('.parallax').parallax();

    $('.carousel').carousel();


var firebaseConfig = {
    apiKey: "AIzaSyCTlCEPrbZ3EBwGJeUyVfkI3p54fJP8Bec",
    authDomain: "jccall-portfolio.firebaseapp.com",
    databaseURL: "https://jccall-portfolio.firebaseio.com",
    projectId: "jccall-portfolio",
    storageBucket: "jccall-portfolio.appspot.com",
    messagingSenderId: "879674023834",
    appId: "1:879674023834:web:fbe3e76f046e47c99ae423"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var newContact=[];
  var database=firebase.database();
  
  $("#submitThisForm").on("click", function () {
	newContact.firstName = $("#name").val();
	newContact.email = $("#email").val();
	newContact.message = $("#messageinput").val();
  
    database.ref().push(newContact);
    document.getElementById("myForm").reset();
  });




});