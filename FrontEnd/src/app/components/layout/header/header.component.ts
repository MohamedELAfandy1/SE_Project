import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { HttpService } from 'src/app/services/httpRequest/http.service';
import { SendAndGetDataBetweenComponentsService } from 'src/app/services/send-and-get-data-between-components.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  links:Array<string>=['home','About','privacy','login','regeister']
  darkMode:boolean=true;
  @Output()public theme=new EventEmitter();
  UserInformation:any=null;
  imgurl:any;
  AllUsers=[];
  constructor(private sendData:SendAndGetDataBetweenComponentsService,private http:HttpService,private router:Router){}
  ngOnInit(): void {
    this.darkMode=localStorage.getItem('darkMode')=='true'?true:false;
    this.sendData.sendTheme(this.darkMode);
    this.sendTheme();
    this.sendData.data.subscribe((data:any)=>{if(data.name){this.UserInformation=data; }})
      this.sendData.data.subscribe((data:any)=>this.imgurl=data.imgUrl)
  }
  changeMode(){
    this.darkMode=!this.darkMode;
    this.sendData.sendTheme(this.darkMode);
    localStorage.setItem('darkMode',String(this.darkMode))
    this.sendTheme();
  }
  sendTheme(){
    this.theme.emit(this.darkMode)
  }
  logout(){
    const model={};
    this.http.putUserInformation(model).subscribe(
      data=>{this.sendData.data.next(data)
        this.UserInformation=null;
      });
      this.router.navigate(['./'])
  

  }
  getuserdetails(){
    const img={
      imgUrl:this.imgurl
    }
    this.http.getUserInformation().subscribe((user:any)=>{
      this.http.patchUserInformation(user.userId,img).subscribe()
     })
    this.http.patchLoginInformation1(img).subscribe()
  }
  changeProfileImg(event:any){
    if(event.target.files){
    const img =new FileReader();
    img.readAsDataURL(event.target.files[0]);
    img.onload=e=>{this.imgurl=e.target?.result
      this.getuserdetails();
      this.sendData.data.subscribe((data:any)=>this.imgurl=data.imgUrl)

    };
    setTimeout(() => {
      window.location.reload()
    }, 1000);
  }
  }
}
