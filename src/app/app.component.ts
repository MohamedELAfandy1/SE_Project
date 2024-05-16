import {  Component, OnInit } from '@angular/core';
import { HttpService } from './services/httpRequest/http.service';
import { SendAndGetDataBetweenComponentsService } from './services/send-and-get-data-between-components.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'articles';
  darkMode!:boolean;
  userInformation:any;
  constructor(private http:HttpService,private data:SendAndGetDataBetweenComponentsService){}
  ngOnInit(): void {
   this.getUserInformation();   
  }
  getUserInformation(){
   return this.http.getUserInformation().subscribe(userInformation=>{
    this.data.data?.next(userInformation)
    this.data.data.subscribe();
    })
  }
}
