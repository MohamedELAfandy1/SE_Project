import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { RegesiterComponent } from './components/regesiter/regesiter.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { AuthorComponent } from './components/author/author.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'regeister', component:RegesiterComponent},
  {path:'createArticle',component:CreateArticleComponent},
  {path:'author/:id',component:AuthorComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
