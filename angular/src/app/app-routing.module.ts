import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserPostContainerComponent} from "./components/user-post-components/user-post-container/user-post-container.component";
import {
  LeaguePostContainerComponent
} from "./components/league-posts/league-post-container/league-post-container.component";
import {UserPostDetailComponent} from "./components/user-post-components/user-post-detail/user-post-detail.component";
import {ProfilePageComponent} from "./components/user/profile-page/profile-page.component";
import {LeaguePostDetailComponent} from "./components/league-posts/league-post-detail/league-post-detail.component";
import {PageNotFoundComponent} from "./components/error-pages/page-not-found/page-not-found.component";
import {FooterComponent} from "./components/footer/footer.component";

const routes: Routes = [
  {path: 'user-posts', component: UserPostContainerComponent},
  {path: 'league-posts/:id', component: LeaguePostDetailComponent},
  {path: 'league-posts', component: LeaguePostContainerComponent},
  {path: 'profile/:id', component: ProfilePageComponent},
  {path: 'user-posts/:id', component: UserPostDetailComponent},

  //error pages
  {path: 'page-not-found', title:"Page Not Found", component: PageNotFoundComponent},

  //Wild card route for 404 request
  {path: "**", redirectTo: "page-not-found", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
