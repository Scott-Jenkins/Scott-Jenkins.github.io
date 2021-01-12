var i = 0;
var txt = 'Scott Jenkins_';
var speed = 120;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
  