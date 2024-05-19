import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/httpRequest/http.service';

@Component({
  selector: 'app-blog-lists',
  templateUrl: './blog-lists.component.html',
  styleUrls: ['./blog-lists.component.scss']
})
export class BlogListsComponent {
  articles:any;
 constructor(private http:HttpService){}
  ngOnInit(): void {
      this.http.getAllArticles().subscribe(res=>this.articles=res)
  }
}
