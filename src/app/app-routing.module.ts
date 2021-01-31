import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeComponent } from './theme/theme.component';
import {PostComponent} from './post/post.component';
import {CommentComponent} from './comment/comment.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path:'logins',component:LoginComponent},
  {path:'themes',component:ThemeComponent},
  {path:'posts/themes/:idTheme',component:PostComponent},
  {path:'comments/posts/:idPost',component:CommentComponent},
  {path: '*', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
