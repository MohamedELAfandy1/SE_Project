import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, map } from "rxjs";
import { HttpService } from "src/app/services/httpRequest/http.service";

export function emailvalidation(http:HttpService):AsyncValidatorFn{
    return (control:AbstractControl):Observable<ValidationErrors|null>=>{
        return checkEmails(http).pipe(
            map((user:any[])=>{
               const emailExist=user.some(user=>user.email==control.value)
               return emailExist?{'emailError':true}:null;
            })
        )
    }
    function checkEmails(http:HttpService):Observable<any>{
        return http.getAllUsers();
    }
}