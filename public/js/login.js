import { Login } from "../Services/LoginService.js";
// Initialize variables
const form = document.querySelector("form");
const uField = form.querySelector(".username");
const eInput = uField.querySelector("input");
const pField = form.querySelector(".password");
const pInput = pField.querySelector("input");


//config
const checkUsername = () => { //checkusername function

    if (eInput.value == "") {
        uField.classList.add("error");
        uField.classList.remove("valid");
    }
    else {
        uField.classList.remove("error");
        uField.classList.add("valid");
    }
}
const checkPass = () => { //checkPass function
    let errorTxt = uField.querySelector(".pass-txt");
    if (pInput.value == "") { //if pass is empty then add error and remove valid class
        pField.classList.add("error");
        pField.classList.remove("valid");
        errorTxt.innerText = "Password can't be blank";
    } else { //if pass is empty then remove error and add valid class
        pField.classList.remove("error");
        pField.classList.add("valid");
    }
}

//render
form.onsubmit = (e) => {
    e.preventDefault();
    //if username and password is blank then add shake class in it else call specified function
    (eInput.value == "") ? uField.classList.add("shake", "error") : checkUsername();
    (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
    setTimeout(() => { //remove shake class after 500ms
        uField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);
    //calling checkPassword function on pass input keyup
    eInput.onkeyup = () => { checkUsername(); } 
    pInput.onkeyup = () => { checkPass(); } 

    //if uField and pField doesn't contains error class that mean user filled details properly
    if (!uField.classList.contains("error") && !pField.classList.contains("error")) {
        const formData = {
            "username": document.getElementById("user_01").value,
            "password": document.getElementById("pass_01").value
        }
        Login(formData) 
    }
}