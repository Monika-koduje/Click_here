const button = document.querySelector(".click");
const img = document.getElementById("day");

const divAll = document.querySelectorAll("div");
divAllcolors = [...divAll];

function clickHere() {
  console.log("click");
  button.classList.add("removeClick");
  divAllcolors.forEach((icon) => {
    icon.classList.add("animationPlay");
  });

  setTimeout(function () {
    img.classList.add("animationPlayImg");
    console.log("wait");
    setTimeout(function () {
      img.addEventListener("click", function () {
        location.reload();
      });
    }, 1500);
  }, 22000);
}

button.addEventListener("click", clickHere);
