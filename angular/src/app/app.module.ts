import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {InMemoryDataService} from "./services/in-memory-data.service";
import {MessageLoggerComponent} from './components/message-logger/message-logger.component';
import {FooterComponent} from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { CommentComponent } from './components/comment/comment.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LeaguePostContainerComponent } from './components/league-posts/league-post-container/league-post-container.component';
import { LeaguePostComponent } from './components/league-posts/league-post/league-post.component';
import { UserPostContainerComponent } from './components/user-post-components/user-post-container/user-post-container.component';
import { UserPostComponent } from './components/user-post-components/user-post/user-post.component';
import { UserComponent } from './components/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { DeleteDialogComponent } from './components/dialog-components/delete-dialog/delete-dialog.component';
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { UserPostDetailComponent } from './components/user-post-components/user-post-detail/user-post-detail.component';
import { ProfilePageComponent } from './components/user/profile-page/profile-page.component';
import { UserRegisterDialogComponent } from './components/user/register/user-register-dialog.component';
import {MatIconModule} from "@angular/material/icon";
import {LeaguePostDetailComponent} from "./components/league-posts/league-post-detail/league-post-detail.component";
import { TextareaDialogComponent } from './components/dialog-components/textarea-dialog/textarea-dialog.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import { UserPostActionsMenuComponent } from './components/user-post-components/user-post-actions-menu/user-post-actions-menu.component';
import { LeagueIconsComponent } from './components/league-posts/league-icons/league-icons.component';
import { DateAgoPipe } from './pipes/date-ago/date-ago.pipe';
import { DateAgoComponent } from './components/date-ago/date-ago.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";
import { PostContainerComponent } from './components/posts/post-container/post-container.component';
import { PostHeaderComponent } from './components/league-posts/post-header/post-header.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { CommentIconComponent } from './components/icons/comment-icon/comment-icon.component';
import { PlayersIconComponent } from './components/icons/players-icon/players-icon.component';
import { IconComponent } from './components/icons/icon/icon.component';
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    AppComponent,
    MessageLoggerComponent,
    CommentComponent,
    FooterComponent,
    HeaderComponent,
    NavigationBarComponent,
    UserPostContainerComponent,
    UserPostComponent,
    LeaguePostContainerComponent,
    UserComponent,
    LeaguePostComponent,
    DeleteDialogComponent,
    LeaguePostDetailComponent,
    UserPostDetailComponent,
    ProfilePageComponent,
    UserRegisterDialogComponent,
    TextareaDialogComponent,
    UserPostActionsMenuComponent,
    LeagueIconsComponent,
    DateAgoPipe,
    DateAgoComponent,
    PostContainerComponent,
    PostHeaderComponent,
    UserAvatarComponent,
    CommentIconComponent,
    PlayersIconComponent,
    IconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
