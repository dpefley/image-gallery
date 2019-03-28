document.getElementById("1").addEventListener("click", function() {
  loadLarge(1);
});
document.getElementById("2").addEventListener("click", function() {
  loadLarge(2);
});
document.getElementById("3").addEventListener("click", function() {
  loadLarge(3);
});
document.getElementById("4").addEventListener("click", function() {
  loadLarge(4);
});
document.getElementById("5").addEventListener("click", function() {
  loadLarge(5);
});
document.getElementById("6").addEventListener("click", function() {
  loadLarge(6);
});
document.getElementById("7").addEventListener("click", function() {
  loadLarge(7);
});
document.getElementById("8").addEventListener("click", function() {
  loadLarge(8);
});
document.getElementById("9").addEventListener("click", function() {
  loadLarge(9);
});
document.getElementById("10").addEventListener("click", function() {
  loadLarge(10);
});
document.getElementById("11").addEventListener("click", function() {
  loadLarge(11);
});
document.getElementById("12").addEventListener("click", function() {
  loadLarge(12);
});

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

var next = document.getElementsByClassName("next")[0];

var previous = document.getElementsByClassName("previous")[0];

var currentImage;

function loadLarge(nature) {
  modal.style.display = "block";
  document.getElementById("modal-img").src = nature + ".jpg";
  currentImage = nature;
}

span.onclick = function() {
  modal.style.display = "none";
}

next.onclick = function() {
  if (currentImage < 12) {
    loadLarge(currentImage += 1);
  }
}

previous.onclick = function() {
  if (currentImage > 1) {
    loadLarge(currentImage -= 1);
  }
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




//end
