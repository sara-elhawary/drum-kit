const drumsNo = document.querySelectorAll(".drum").length;
//had to use let with i to be able to increment it

for (let i = 0; i < drumsNo; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const drumName = this.classList[0];
    const audio = new Audio(`sounds/${drumName}.mp3`);
    audio.play();
  });
}

document.addEventListener("keydown", function (e) {
  const drumKey = e.key;
  for (let i = 0; i < drumsNo; i++) {
    const keyTest = document.querySelectorAll(".drum")[i].contains(drumKey);
    if (keyTest) {
      const selected = document.querySelector(".drumKey").classList[0];
      const audio = new Audio(`sounds/${selected}.mps`);
      audio.play();
    }
  }
});
