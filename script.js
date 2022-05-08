const inputs = document.querySelectorAll(".input");
const errors = document.querySelectorAll(".error");
const btnSubmit = document.querySelector(".btn");

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  inputs.forEach((inp) => {
    const value = inp.value;
    if (!value) addError(inp);
    else removeError(inp);

    if (inp.name === "email") {
      value === "" && addError(inp);
      !validateEmail(value) && inp.nextElementSibling.classList.add("show");
      if (!validateEmail(value)) inp.style.borderColor = "hsl(0, 100%, 74%) ";
      if (!validateEmail(value) && value !== "") {
        inp.closest(".form-control").lastElementChild.innerHTML =
          '<p style="visibility:visible;" class="error">Email is not true</p>';
      }
      if (validateEmail(value)) {
        inp.closest(".form-control").lastElementChild.innerHTML =
          '<p style="visibility:hidden;" class="error">Email cannot be empty</p>';
        inp.style.borderColor = "#ccc ";
      }
    }
  });
});
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
function addError(inp) {
  inp.nextElementSibling.classList.add("show");

  inp.closest(".form-control").lastElementChild.style.visibility = "visible";
  inp.style.borderColor = "hsl(0, 100%, 74%) ";
}
function removeError(inp) {
  inp.nextElementSibling.classList.remove("show");

  inp.closest(".form-control").lastElementChild.style.visibility = "hidden";
  inp.style.borderColor = "#ccc";
}
