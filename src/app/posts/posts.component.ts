import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  status = true;

  posts: any = [];
  post = {
    id: 0,
    title: '',
    body: '',
    userId: ''
  };

  // PostService howa service dyalna li fih les methodes http (create, delete, update, get).
  constructor(private postSevice : PostService) {
   
   }

  ngOnInit(): void {
    this.getPosts();
  }


  getPosts(){
    this.postSevice.getAll()
    .subscribe(response => {
      this.posts = response;
    },(error) => {
      alert('erreue inattendue')
      console.log(error);
    })
  }


  createPost() {
      this.postSevice.create(this.post)
      .subscribe(response => {
        this.posts.unshift(this.post);

        this.post = {
          id: 0,
          title: '',
          body: '',
          userId: ''
        }

      },(error) => {
        alert('erreue inattendue')
        console.log(error);
      })
  }

  editPost(post : any){
    this.post = post;
    this.status= false;
  }

  updatePost(){
   this.postSevice.update(this.post)
    .subscribe(() => {

      this.post = {
        id: 0,
        title: '',
        body: '',
        userId: ''
      }

      this.status = true;

    },(error) => {
      alert('erreue inattendue')
      console.log(error);
    })
  }

  deletePost(post: any){
    this.postSevice.delete(post)
    .subscribe(() => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    },(error) => {
      alert('erreue inattendue')
      console.log(error);
    })
  }


}
