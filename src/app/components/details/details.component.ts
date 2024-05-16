import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/httpRequest/http.service';
import { SendAndGetDataBetweenComponentsService } from 'src/app/services/send-and-get-data-between-components.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  article:any;
  AllArticles:any;
  user:any;
  darkmode!:boolean;

  constructor(private http:HttpService,private Ar:ActivatedRoute,private getData:SendAndGetDataBetweenComponentsService){
    this.getData.getTheme().subscribe(theme=>this.darkmode=theme)

  }
ngOnInit(): void {
    this.http.getSpecificArticle(this.Ar.snapshot.paramMap.get('id')).subscribe(
      res=>{this.article=res
        this.http.getSpecificUser(this.article.userId).subscribe(res=>this.user=res)
      }
    )

    
}

}
