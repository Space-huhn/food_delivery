const checbox = document.querySelector(".checkbox");
const checboxInput = checbox.querySelector("input");

const checked = () => {
    if (checboxInput.checked) {
        checbox.classList.toggle("active");
    }
}
checbox.addEventListener("click", checked)

const showPasswordButton = document.querySelector(".show-password");
const passwordInput = document.querySelector("#password");

const showPassword = (event) => {
    event.preventDefault();
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPasswordButton.classList.add("visible");
    } else {
        passwordInput.type = "password";
        showPasswordButton.classList.remove("visible");
    }
}
showPasswordButton.addEventListener("click", showPassword)

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const loginButton = document.querySelector(".login-button");

const validateEmail = () => {
    if (email.value) {
        email.style.borderColor = "#C7C8D2";
        return email.value.toLowerCase().match(
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        );
    } else {
        email.style.borderColor = "red";
    }
};

const validatePassword = () => {
    if (password.value.length > 8) {
        password.closest("span").style.borderColor = "#C7C8D2";
        return password.value.match(
            /^(?=.*\d)(?=.*[A-Z])(.{12,50})$/
        );
    } else {
        password.closest("span").style.borderColor = "red";
    }
};

const validation = (event) => {
    if (validateEmail() && validatePassword()) {
        console.log("eror");
    }
    event.preventDefault();
}
loginButton.addEventListener("click", validation)