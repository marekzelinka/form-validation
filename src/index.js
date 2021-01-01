const form = document.querySelector("#signup-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

document.querySelectorAll(".textfield").forEach((field) => {
  field.addEventListener("change", (event) => {
    event.currentTarget.classList.add("dirty");
  });
});
