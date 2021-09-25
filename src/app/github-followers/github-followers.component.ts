import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers.servise';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {


  followers: any = [];
  follower = {
    id: 0,
    title: '',
    body: '',
    userId: ''
  };

  constructor(private followerSevice : FollowersService) { }

  ngOnInit() : void{
    this.getFollowers()
  }

  getFollowers(){
    this.followerSevice.getAll()
    .subscribe(response => {
      this.followers = response;
    })
  }



}
