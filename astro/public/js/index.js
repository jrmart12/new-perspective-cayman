window.addEventListener("load", () => {
  //document.querySelector("body").classList.add("loaded");
  setTimeout(function () {
    document.querySelector(".loading").style.visibility = "hidden";
    document.querySelector(".body").style.display = "block";
    document.querySelector(".body").style.visibility = "visible";
  }, 3000);
  document.querySelector(".body").style.display = "none";
  document.querySelector(".loading").style.visibility = "visible";
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
