import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { RegesiterComponent } from './components/regesiter/regesiter.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { AuthorComponent } from './components/author/author.component';
import { BlogListsComponent } from './components/home/blog-lists/blog-lists.component';
import { CoverComponent } from './components/home/cover/cover.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetailsComponent,
    LoginComponent,
    RegesiterComponent,
    NotFoundComponent,
    CreateArticleComponent,
    PrivacyComponent,
    AuthorComponent,
    BlogListsComponent,
    CoverComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
