import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { AdminArticlesComponent } from './admin-articles/admin-articles.component';
import { ArticleComponent } from './article/article.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleCreateComponent,
    AdminArticlesComponent,
    ArticleComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    QuillModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
