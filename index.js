const drumsNo = document.querySelectorAll(".drum").length;
for (const i = 1; i <= drumsNo; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert(`Drum ${i} got clicked!`);
  });
}
