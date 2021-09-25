import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') isFavorite : boolean = true;
  @Output('change') change = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  
  myFavorite(){
    
    this.isFavorite = !this.isFavorite;
    this.change.emit({newState:this.isFavorite});
  }

}
