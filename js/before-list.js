const buttons = document.querySelectorAll(".beforeListButton");
const panels = document.querySelectorAll(".beforeListItem");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    panels[index].classList.toggle("active");
  });
});

console.log(buttons.forEach(button, index));
