import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/httpRequest/http.service';
import { SendAndGetDataBetweenComponentsService } from 'src/app/services/send-and-get-data-between-components.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  darkMode!:boolean;
  loginForm:FormGroup;
  allUsers:any;
  wrong!:boolean;
  success!:boolean;

  constructor(private getTheme:SendAndGetDataBetweenComponentsService,private fb:FormBuilder,private http:HttpService,private router:Router){
    this.loginForm=this.fb.group({
      email:'',
      password:''
    })

  }
  ngOnInit(): void {
      this.getTheme.getTheme().subscribe(theme=>this.darkMode=theme)
      this.http.getAllUsers().subscribe((users:any)=>this.allUsers=users)
  }
  login(){
    if(this.allUsers.some((user:any)=>user.email==this.loginForm.get('email')?.value)&&this.allUsers.some((user:any)=>user.password==this.loginForm.get('password')?.value)){
      this.success=true;
      setTimeout(() => {
        const model={
          name:this.allUsers[this.allUsers.findIndex((ele:any)=>ele.email==this.loginForm.get('email')?.value&&ele.password==this.loginForm.get('password')?.value)].firstname +' '+ this.allUsers[this.allUsers.findIndex((ele:any)=>ele.email==this.loginForm.get('email')?.value&&ele.password==this.loginForm.get('password')?.value)].lastname,
          imgUrl:this.allUsers[this.allUsers.findIndex((ele:any)=>ele.email==this.loginForm.get('email')?.value&&ele.password==this.loginForm.get('password')?.value)].imgUrl,
          userId:this.allUsers[this.allUsers.findIndex((ele:any)=>ele.email==this.loginForm.get('email')?.value&&ele.password==this.loginForm.get('password')?.value)].id,
        }
        this.http.putUserInformation(model).subscribe(
          (data:any)=>{
            this.getTheme.data.next(data)
          this.router.navigate(['./'])}
  
        )
        this.success=false;
      }, 3000);

    }else{
      this.wrong=true;
    }
  }

}
