import { Login } from "../Services/LoginService.js";
// Initialize variables
const form = document.querySelector("form");
const eField = form.querySelector(".username");
const eInput = eField.querySelector("input");
const pField = form.querySelector(".password");
const pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault();
    //preventing from form submitting
    //if username and password is blank then add shake class in it else call specified function
    const checkUsername = () => { //checkusername function

        if (eInput.value == "") {
            eField.classList.add("error");
            eField.classList.remove("valid");
        }
        else {
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }

    const checkPass = () => { //checkPass function
        let errorTxt = eField.querySelector(".pass-txt");
        if (pInput.value == "") { //if pass is empty then add error and remove valid class
            pField.classList.add("error");
            pField.classList.remove("valid");
            errorTxt.innerText = "Password can't be blank";
        } else { //if pass is empty then remove error and add valid class
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }
    (eInput.value == "") ? eField.classList.add("shake", "error") : checkUsername();
    (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
    setTimeout(() => { //remove shake class after 500ms
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    eInput.onkeyup = () => { checkUsername(); } //calling checkUsername function on username input keyup
    pInput.onkeyup = () => { checkPass(); } //calling checkPassword function on pass input keyup

    //if eField and pField doesn't contains error class that mean user filled details properly
    if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
        const formData = {
            "username": document.getElementById("user_01").value,
            "password": document.getElementById("pass_01").value
        }
        Login(formData) 
    }
}