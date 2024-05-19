import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordValidation(control:AbstractControl):ValidationErrors|null{
   let hasUppercase=/[A-Z]/.test(control.value);
   let hasLowercase=/[a-z]/.test(control.value);
    let hasNumber=/[0-9]/.test(control.value);
    if(hasLowercase&&hasUppercase&&hasNumber){
        return null;
    }
    else{
        return {passwordError:true}
    }
}