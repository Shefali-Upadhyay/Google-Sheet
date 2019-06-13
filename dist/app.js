"use strict";

var postToGoogle = function postToGoogle() {
  var fName = document.getElementById("firstName").value;
  var lName = document.getElementById("lastName").value;
  var email = document.getElementById("emailAddress").value;
  var contact = document.getElementById("contactNumber").value;
  var message = document.getElementById("messageArea").value;

  if (fName === "" || lName === "") {
    alert('Please Fill Your Full Name');
    document.getElementById("firstName").focus();
    document.getElementById("lastName").focus();
    return false;
  }

  if (email === "") {
    alert('Please Fill Your Email');
    document.getElementById("emailAddress").focus();
    return false;
  }

  if (contact === "") {
    alert('Please Fill Your Mobile Number');
    document.getElementById("contactNumber").focus();
    return false;
  }

  if (message === "") {
    alert('Please Fill Your Message');
    document.getElementById("messageArea").focus();
    return false;
  }

  $.ajax({
    url: "https://docs.google.com/forms/d/e/1FAIpQLSf2IaOLacusBYtSuPmkx47b3Cxn5972edrf9anXHBHT-wGtKg/formResponse?",
    data: {
      "entry.947997340": fName,
      "entry.24333345": lName,
      "entry.515594768": email,
      "entry.527946138": contact,
      "entry.1170713259": message
    },
    type: "POST",
    dataType: "xml",
    success: function success() {},
    error: function error() {
      alert('Submitted Successfully!!');
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("emailAddress").value = "";
      document.getElementById("contactNumber").value = "";
      document.getElementById("messageArea").value = "";
    }
  });
  return false;
};

document.getElementById('submit').addEventListener('click', postToGoogle);