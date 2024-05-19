import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/httpRequest/http.service';
import { SendAndGetDataBetweenComponentsService } from 'src/app/services/send-and-get-data-between-components.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit{
  data:any;
  Articles:any;
  darkmode!:boolean;

  constructor(private ar:ActivatedRoute,private http:HttpService,private getData:SendAndGetDataBetweenComponentsService){}
  ngOnInit(): void {
    this.getData.getTheme().subscribe(theme=>this.darkmode=theme)
    this.getUserDate();
    this.getUserArticles()
  }
  getUserDate(){
    this.http.getSpecificUser(this.ar.snapshot.paramMap.get('id')).subscribe((data:any)=>this.data=data)
  }
  getUserArticles(){
    this.http.getAllArticles().subscribe((articles:any)=>{this.Articles=articles
      this.Articles= this.Articles.filter((article:any)=>article.userId==this.ar.snapshot.paramMap.get('id'))
    })
  }

}
