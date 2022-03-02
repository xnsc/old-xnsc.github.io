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