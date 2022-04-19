const newAccountForm = document.getElementById("new-account-form");
const newAccountButton = document.getElementById("new-account-form-submit");
const newAccountErrorMsg = document.getElementById("new-account-error-msg");

newAccountButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully created an account.");
        location.reload();
    } else {
        newAccountErrorMsg.style.opacity = 1;
    }
})