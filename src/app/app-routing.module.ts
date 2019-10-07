import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticlesComponent } from './articles/articles.component';
import { AdminArticlesComponent } from './admin-articles/admin-articles.component';
import { ArticleComponent } from './article/article.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { TestsComponent } from './tests/tests.component';

const routes: Routes = [
  { path: 'user/tests', component: TestsComponent, canActivate: [AuthGuard] },
  { path: 'admin/article/create', component: ArticleCreateComponent, canActivate: [AuthGuard] },
  { path: 'admin/articles', component: AdminArticlesComponent, canActivate: [AuthGuard] },
  { path: 'admin/articles/:id', component: ArticleCreateComponent, canActivate: [AuthGuard]},
  { path: 'article/:id', component: ArticleComponent},
  { path: 'dashboard', component: ArticlesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
