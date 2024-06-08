import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { PostData } from './data/post-data';
import { getRecentPosts, getNumberOfPages } from './services/backend.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    PostComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hackathon';

  posts: PostData[] = [];
  numberOfPages: number;
  paginated: number = 10;

  constructor() {
    this.posts = getRecentPosts(1, 10);
    this.numberOfPages = getNumberOfPages(this.paginated);
  }
}
