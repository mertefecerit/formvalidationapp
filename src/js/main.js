import {Validation} from "./validation";
import {UI} from "./ui";

const ui = new UI();

const userRegisterForm = document.getElementById("userRegisterForm");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPhone = document.getElementById("userPhone");
const userPassword = document.getElementById("userPassword");
const userRePassword = document.getElementById("userRePassword");

userRegisterForm.addEventListener("submit",function (e){
    const result = Validation.check(userName,"required|max:6|min:3");
    const result1 = Validation.check(userEmail,"required|email")
    const result2 = Validation.check(userPhone,"required|number|max:10")
    const result3 = Validation.check(userPassword,"required|password")
    const result4 = Validation.check(userRePassword,"same:userPassword")
    ui.showAlert(result);
    ui.showAlert(result1);
    ui.showAlert(result2);
    ui.showAlert(result3);
    ui.showAlert(result4);
    e.preventDefault();
});

