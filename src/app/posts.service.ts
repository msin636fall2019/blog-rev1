import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {


  posts: Post[] = [];
  constructor(private toastr: ToastrService) {}


  addPost(post) {
    post.date = Date.now()
    this.posts.push(post);
    this.toastr.success('Post Added', 'SUCCESS');
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.toastr.error('Post Deleted', 'SUCCESS');
  }

}
