import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


  export const differentpassword : ValidatorFn = (control: AbstractControl):ValidationErrors|null =>{

     let password = control.get('contrasenya');
     let confirmpassword = control.get('recontrasenya');
     if(password && confirmpassword && password?.value == confirmpassword?.value){
        return {passwordmatcherror : true }
     }
    return null; 
   }