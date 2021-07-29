export class Validation {
    static check(input,validations){

        const validationTypes = validations.split("|");
        let i=0;
        let statusBag = {};

        while(validationTypes.length > i) {
            if(validationTypes[i] === "required"){
                statusBag.required_status = input.value.trim().length > 0;
            }
            if(validationTypes[i] === "email"){
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                statusBag.email_status = re.test(String(input.value.trim()).toLowerCase());
            }
            if(validationTypes[i] === "number"){
                statusBag.number_status = Number.isInteger(parseInt(input.value.trim()));
            }
            if(validationTypes[i].indexOf("max") !== -1){
                const arr = validationTypes[i].split(":");
                statusBag.max_status = input.value.trim().length <= parseInt(arr[1]);
                statusBag.max = parseInt(arr[1]);
            }
            if(validationTypes[i].indexOf("min") !== -1){
                const arr = validationTypes[i].split(":");
                statusBag.min_status = (input.value.trim().length >= parseInt(arr[1]) && input.value.trim().length !== 0);
                statusBag.min = parseInt(arr[1]);
            }
            if(validationTypes[i] === "password"){
                const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
                statusBag.password_status = strongRegex.test(input.value.trim());
            }
            if(validationTypes[i].indexOf("same") !== -1){
                const arr = validationTypes[i].split(":");
                const otherInput = document.getElementById(arr[1]);
                statusBag.same_status = (otherInput.value.trim() === input.value.trim()) && otherInput.value.trim().length>0;
                statusBag.otherInputLabelText = otherInput.previousElementSibling.textContent.trim();
            }
            i++;
        }
        statusBag.input = input;
        return statusBag;
    }
}