import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticlesComponent } from './articles/articles.component';
import { AdminArticlesComponent } from './admin-articles/admin-articles.component';

const routes: Routes = [
  { path: 'article/create', component: ArticleCreateComponent },
  { path: 'articles', component: AdminArticlesComponent },
  { path: 'article/:id', component: ArticleCreateComponent},
  { path: 'dashboard', component: ArticlesComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
