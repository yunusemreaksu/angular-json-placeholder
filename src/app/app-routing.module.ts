import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full',
  },
  {
    path: 'comments',
    component: CommentsComponent,
  },
  {
    path: 'albums',
    component: AlbumsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
