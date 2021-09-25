import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `  
                <input [(ngModel)]="email" type="text" (keyup.enter)="onKeyUp(email)">
                <i [class]="etoile" (click)="onClick()"></i>
                <p> {{email}} </p>
                `
                
})

export class CoursesComponent {

    email: string = 'youssef@gmail.com';
    etoile : string = "bi bi-star-fill";
    
    onClick(){

        if(this.etoile == "bi bi-star-fill"){
          this.etoile = "bi bi-star";
        }else{
            this.etoile = "bi bi-star-fill";
        }
    }


    onKeyUp(email:string){
        
            console.log(this.email);
        
        
    }



}