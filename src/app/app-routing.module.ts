import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  { path: 'article/create', component: ArticleCreateComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: '', redirectTo: 'articles', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
