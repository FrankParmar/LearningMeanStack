import { Component, Input, OnInit } from "@angular/core";
import { Post } from "../post.model";
import { PostsService } from "../posts.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  // posts = [
  //   { title: "First Post", content: "This is First Post's content" },
  //   { title: "Second Post", content: "This is Second Post's content" },
  //   { title: "Third Post", content: "This is Third Post's content" }
  // ];
  @Input() posts: Post[] = [];

  constructor(public postsService: PostsService) {}
  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsService.getPostUpdatedListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }
}
