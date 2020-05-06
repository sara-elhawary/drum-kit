const drumsNo = document.querySelectorAll(".drum").length;
//had to use let with i to be able to increment it

for (let i = 0; i < drumsNo; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    pressEffect(this);
    const drumName = this.classList[0];
    makeSound(drumName);
    setTimeout(clearPressEffect, 3000);
    // clearPressEffect(this);
  });
}

document.addEventListener("keydown", function (e) {
  const drumKey = e.key;
  //   console.log(drumKey);
  for (let i = 0; i < drumsNo; i++) {
    const keyTest = document
      .querySelectorAll(".drum")
      [i].classList.contains(drumKey);
    // console.log(keyTest);
    if (keyTest) {
      const selected = document.querySelector(`.${drumKey}`).classList[0];
      makeSound(selected);
      pressEffect(document.querySelector(`.${drumKey}`));
      setTimeout(clearPressEffect, 1000);
    }
  }
});

function makeSound(sound) {
  const audio = new Audio(`sounds/${sound}.mp3`);
  audio.play();
}
function pressEffect(button) {
  button.classList.add("pressed");
  console.log(button.classList);
}

function clearPressEffect(button) {
  button.classList.remove("pressed");
  console.log(button.classList);
}
