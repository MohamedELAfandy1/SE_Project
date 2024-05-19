import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nameValidation } from '../validations/nameValidation';
import { passwordValidation } from '../validations/passwordValidation';
import { HttpService } from 'src/app/services/httpRequest/http.service';
import { emailvalidation } from '../validations/emailAsyncValidation';
import { SendAndGetDataBetweenComponentsService } from 'src/app/services/send-and-get-data-between-components.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-regesiter',
  templateUrl: './regesiter.component.html',
  styleUrls: ['./regesiter.component.scss']
})
export class RegesiterComponent implements OnInit{
  regesiterForm:FormGroup;
  darkTheme!:boolean;
  loading:boolean=false;
  userData:any;
  constructor(private fb:FormBuilder,private http :HttpService,private getdata:SendAndGetDataBetweenComponentsService,private router:Router
  ){
    this.regesiterForm=this.fb.group({
      firstname:['',[Validators.required,Validators.minLength(3),nameValidation]],
      lastname:['',[Validators.required,Validators.minLength(3),nameValidation]],
      email:['',[Validators.required,Validators.email],[emailvalidation(this.http)]],
      password:['',[Validators.required,Validators.minLength(8),passwordValidation]],
      about:['',Validators.required],
    })
  }
  ngOnInit(): void {
    this.getdata.getTheme().subscribe(theme=>this.darkTheme=theme)

}
  regestier(){
    this.loading=true;
    const model={
      firstname:this.regesiterForm.get('firstname')?.value,
      lastname:this.regesiterForm.get('lastname')?.value,
      email:this.regesiterForm.get('email')?.value,
      password:this.regesiterForm.get('password')?.value,
      about:this.regesiterForm.get('about')?.value,
    }
    this.http.createUserAccountDataBase(model).subscribe(console.log);

      this.http.CreateUserAccount(model).subscribe((data:any)=>{
      this.userData=data;
    })
    setTimeout(() => {
      this.loading=false;
      this.router.navigate(['./login'])
    }, 3000);



  }


}
