import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient){}
  private url ='http://127.0.0.1:3007/author/'
  private articleUrl='http://127.0.0.1:3007/article/'
  CreateUserAccount(model:any){
   return this.http.post('http://localhost:3000/users',model);
  }
  createUserAccountDataBase(model:any){
    return this.http.post(this.url +'register',model)
  }
  getAllUsers(){
   return this.http.get('http://localhost:3000/users');
  }
  getSpecificUser(id:any){
   return this.http.get('http://localhost:3000/users/'+id);

  }
  putUserInformation(model:any){
    return this.http.put('http://localhost:3000/login/1',model);
  }
  getUserInformation(){
    return this.http.get('http://localhost:3000/login/1');
  }
  patchLoginInformation1(model:any){
    return this.http.patch('http://localhost:3000/login/1',model);
  }
  patchUserInformation(id:any,model:any){
    return this.http.patch('http://localhost:3000/users/'+id,model)
  }
  postArticle(model:any){
    return this.http.post('http://localhost:3000/articles',model)
  }
  postArticleDataBase(model:any){
    return this.http.post(this.articleUrl +'add',model)
  }
  getAllArticles(){
    return this.http.get('http://localhost:3000/articles')
  }
  getSpecificArticle(id:any){
    return this.http.get('http://localhost:3000/articles/'+id)

  }
}
