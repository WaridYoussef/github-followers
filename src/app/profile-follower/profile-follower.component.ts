import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-profile-follower',
  templateUrl: './profile-follower.component.html',
  styleUrls: ['./profile-follower.component.css']
})
export class ProfileFollowerComponent implements OnInit {

  id : number = 0;
  username : string | null = '';
  type : string = '';
  
  
  constructor(private route : ActivatedRoute) { }

  ngOnInit() : void {
    // Hadi bach n'recuperer des segments dynamiques
    // had '!' kandirha bach ngol bli hadchi maymknch ykon null
      this.id = +this.route.snapshot.paramMap.get('id')!;
      this.username = this.route.snapshot.paramMap.get('username');

    // Hadi bach n'recuperer les query li dayzin f l'url
   this.type = this.route.snapshot.queryParamMap.get('type')!;
  }

}
