// type writer effect for heading
let i = 0;
let headingText = "hello...!"; 
let speed = 150;

function typeWriter() {
  if (i < headingText.length) {
    document.getElementById("heading").innerHTML += headingText.charAt(i);
    ++i;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

// to log form information submitted by user
let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let user = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (!name && !email && !message)
    console.warn("You must enter some data to submit this form");
  else {
    console.group("======== Form Submission ========");

    if (!user)
      console.log("Name: no submission");
    else
      console.log("Name: " + user);

    if (!email)
      console.log("Email: no submission");
    else
      console.log("Email: " + email);

    if (!message)
      console.log("Message: no submission");
    else
      console.log("Message: " + message);

    console.groupEnd();
  }
}