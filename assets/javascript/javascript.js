$(document).ready()


var burgerArray = [];

var counter = 0
var voteCount = counter++








// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDWkiAd8yhcL7aCwkgDftkcd2Er3LduRT8",
    authDomain: "doghouse-eedd3.firebaseapp.com",
    databaseURL: "https://doghouse-eedd3.firebaseio.com",
    projectId: "doghouse-eedd3",
    storageBucket: "doghouse-eedd3.appspot.com",
    messagingSenderId: "1011871359407"
  };
  firebase.initializeApp(config);
    var database = firebase.database();

  $("#add-topic").on("click", function(event) {
    event.preventDefault();

    var topicName = $("#topic-input").val().trim();

    var completeTopicInfo = {
      name: topicName

    }

    database.ref().push(completeTopicInfo);
    console.log(completeTopicInfo);
  });

  database.ref().on("child_added", function(childSnapshot) {
        
    var topicName = childSnapshot.val().name;

  $(".pizza-list").append("<hr><span>" + topicName + "</span><span class=" + "'glyphicon glyphicon-chevron-down brewery'" + "</span>");
  console.log(".brewries-list")


    $("#topic-input").val("");

});

