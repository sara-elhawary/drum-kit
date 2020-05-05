const drumsNo = document.querySelectorAll(".drum").length;
//had to use let with i to be able to increment it

for (let i = 0; i < drumsNo; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const drumName = this.classList[0];
    const audio = new Audio(`sounds/${drumName}.mp3`);
    audio.play();
  });
}
