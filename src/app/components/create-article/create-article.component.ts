import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/httpRequest/http.service';
import { SendAndGetDataBetweenComponentsService } from 'src/app/services/send-and-get-data-between-components.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  createArticleForm:FormGroup;
  imgUrl:any;
  tags:any=[];
  userId:any;
  darkmode!:boolean;

  @ViewChild('tag')tag!:ElementRef;
  constructor(private fb:FormBuilder,private http:HttpService,private ar:Router,private getData:SendAndGetDataBetweenComponentsService){
    this.createArticleForm=this.fb.group({
      title:['',Validators.required],
      tags:'',
      description:['',Validators.required]
    })
  }
  ngOnInit(): void {
    this.http.getUserInformation().subscribe((user:any)=>this.userId=user.userId)
    this.getData.getTheme().subscribe(theme=>this.darkmode=theme)

  }
  putImg(e:any){
    if(e.target.files){
      const img =new FileReader();
      img.readAsDataURL(e.target.files[0])
      img.onload=e=>this.imgUrl=e.target?.result;
    }
  }
  addTag(){
    this.tags.push(this.createArticleForm.get('tags')?.value)
    this.tag.nativeElement.value='';
  }
  createArticle(){
    const model={
      userId:this.userId,
      title:this.createArticleForm.get('title')?.value,
      tags:this.tags,
      img:this.imgUrl,
      description:this.createArticleForm.get('description')?.value
    }
    this.http.postArticleDataBase(model).subscribe();
    this.http.postArticle(model).subscribe();
    this.ar.navigate(['/'])
  }
}
