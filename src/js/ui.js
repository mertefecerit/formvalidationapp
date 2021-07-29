export class UI {
    showAlert(result){
        result.input.nextElementSibling.innerHTML = "";
        result.input.classList.add("is-invalid")
        let totalStatus = 1;
        if(result.required_status === false){
            result.input.nextElementSibling.innerHTML += "<p class='mb-0'>You cannot leave the field blank.</p>";
            totalStatus = 0;
        }
        if(result.email_status === false){
            result.input.nextElementSibling.innerHTML += "<p class='mb-0'>You entered an invalid email address.</p>";
            totalStatus = 0;
        }
        if(result.number_status === false){
            result.input.nextElementSibling.innerHTML += "<p class='mb-0'>Please use numbers.</p>";
            totalStatus = 0;
        }
        if(result.min_status === false){
            result.input.nextElementSibling.innerHTML += "<p class='mb-0'>You cannot enter less than " + result.min + " characters.</p>";
            totalStatus = 0;
        }
        if(result.max_status === false){
            result.input.nextElementSibling.innerHTML += "<p class='mb-0'>You cannot enter more than " + result.max + " characters.</p>";
            totalStatus = 0;
        }
        if(result.password_status === false){
            result.input.nextElementSibling.innerHTML += "<p class='mb-0'>Please enter at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character. Allowed special characters = (! @ # $ % ^ & *)</p>";
            totalStatus = 0;
        }
        if(result.same_status === false){
            result.input.nextElementSibling.innerHTML += "<p class='mb-0'>It does not match the " + result.otherInputLabelText + " field.</p>";
            totalStatus = 0;
        }
        if(totalStatus !== 0){
            result.input.classList.remove("is-invalid");
            result.input.classList.add("is-valid");
        }

    }
}