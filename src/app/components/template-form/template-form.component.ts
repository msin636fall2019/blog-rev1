import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';
import { Post } from 'src/app/models/post';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  post: Post = { title: '', body: '', date: null }
  constructor(private postService: PostsService) { }

  ngOnInit() { }

  addPost(form) {
    this.postService.addPost(this.post);
    this.post = { title: '', body: '', date: null }
    form.reset();
  }

}
