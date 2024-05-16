import { AbstractControl, ValidationErrors } from "@angular/forms";

export function nameValidation(control:AbstractControl):ValidationErrors|null{
    if(/[0-9]/.test(control.value)){
        return {containNumber:true}
    }
    else{
        return null
    }
}