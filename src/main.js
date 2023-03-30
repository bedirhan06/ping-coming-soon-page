import "@/styles/index.scss";
import "virtual:svg-icons-register";

const formEl = document.querySelector(".js-form");
const mail = document.querySelector(".js-input");
const email = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
const errorEl = document.querySelector(".js-error");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!email.test(mail.value)) {
    errorEl.textContent = "Please enter a valid email address";
    errorEl.classList.add("error--active");
    mail.classList.add("notify__form-input--active");
    errorEl.hidden = false;
  } else {
    mail.classList.remove("notify__form-input--active");
    errorEl.hidden = true;
    errorEl.textContent = "";
    formEl.reset();
  }
});
