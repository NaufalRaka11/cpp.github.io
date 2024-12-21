mybutton = document.getElementById("static");

function scrollFunction() {
  console.log(document.body.scrollTop )
  console.log(document.documentElement.scrollTop)
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
  scrollFunction()
}
scrollFunction();