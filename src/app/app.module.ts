import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatExpansionModule
} from "@angular/material";
import { HeaderComponent } from "./Header/header.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostsService } from "./posts/posts.service";
@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
