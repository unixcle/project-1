var account_btn = document.getElementById("account-btn");
var login = document.getElementById("login");
var register = document.getElementById("register");

function Register() {
    account_btn.style.left = "130px";
    register.style.right = "50px";
    login.style.right = "-400px";
}

function Login() {
    account_btn.style.left = "0px";
    register.style.right = "450px";
    login.style.right = "50px";
}