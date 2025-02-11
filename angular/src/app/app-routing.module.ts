import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserPostContainerComponent} from "./components/user-post-components/user-post-container/user-post-container.component";
import {
  LeaguePostContainerComponent
} from "./components/league-posts/league-post-container/league-post-container.component";
import {UserPostDetailComponent} from "./components/user-post-components/user-post-detail/user-post-detail.component";
import {ProfilePageComponent} from "./components/user/profile-page/profile-page.component";
import {LeaguePostDetailComponent} from "./components/league-posts/league-post-detail/league-post-detail.component";
import {PostContainerComponent} from "./components/posts/post-container/post-container.component";

const routes: Routes = [
  {path: '', component: PostContainerComponent},
  {path: 'user-posts', component: UserPostContainerComponent},
  {path: 'league-posts/:id', component: LeaguePostDetailComponent},
  {path: 'league-posts', component: LeaguePostContainerComponent},
  {path: 'profile/:id', component: ProfilePageComponent},
  {path: 'user-posts/:id', component: UserPostDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
