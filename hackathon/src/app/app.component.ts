import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { PostData } from './data/post-data';
import { getRecentPosts, getNumberOfPages } from './services/backend.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    PostComponent,
    NgFor
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hackathon';

  posts: PostData[] = [];
  // pages start from 1
  numberOfPages: number;
  paginated: number = 10;
  currentPage: number = 1;

  constructor() {
    this.posts = getRecentPosts(1, 10);
    this.numberOfPages = getNumberOfPages(this.paginated);
  }
}
