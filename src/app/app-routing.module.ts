import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticlesComponent } from './articles/articles.component';
import { AdminArticlesComponent } from './admin-articles/admin-articles.component';
import { ArticleComponent } from './article/article.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'admin/article/create', component: ArticleCreateComponent },
  { path: 'admin/articles', component: AdminArticlesComponent },
  { path: 'admin/articles/:id', component: ArticleCreateComponent},
  { path: 'article/:id', component: ArticleComponent},
  { path: 'dashboard', component: ArticlesComponent },
  { path: 'login', component: LoginComponent },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
