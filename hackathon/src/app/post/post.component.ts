import { Component, Input } from '@angular/core';
import { PostData } from '../data/post-data';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input({ required: true }) data!: PostData;
}
