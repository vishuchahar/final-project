"use strict";

$(function () {
  var config = {
    apiKey: "AIzaSyAPgI1HdI1UoRdd50Y6T6tU1EaYxuW7Frg",
    authDomain: "final-year-1e92e.firebaseapp.com",
    databaseURL: "https://final-year-1e92e.firebaseio.com",
    storageBucket: "final-year-1e92e.appspot.com",
    messagingSenderId: "970118584369"
  };
  firebase.initializeApp(config);
  $('.js-form').on('submit', function (event) {
    event.preventDefault();
    var email = $('#js-email').val();
    var password = $('#password').val();
    var message = $('#js-message').val();
    console.log(email, password, message);
    firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
      firebase.database().ref('messages').push({ email: email, password: password, message: message
      });
    }).catch(function (error) {
      console.log(error);
    });
  });
});