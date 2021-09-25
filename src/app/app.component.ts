import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  // had l'objet pour *ngIf
  course = ["angular", "react", "vue"];
  
  // had l'variable pour ngSwitch
  viewCourse = "Laravel";

  // hadi pour *ngFor
  courses: any;

  trackByCourse(index : any, course: any){
      return course ? course.id : undefined;
  }

loadCourses(){
  this.courses  = [
    {id: 1, title: "Laravel"},
    {id: 2, title: "Angular"},
    {id: 3, title: "Vuejs"},
    {id: 4, title: "Symphony"},
];
}

addCourse(){
  this.courses.push({id: 6, title: "Reactjs"});
}

removeCourse(course : any){
let index = this.courses.indexOf(course);
this.courses.splice(index, 1);
}

editCourse(course:any){
  course.title = "UPDATED";
}



//hadi pour 'SAFE TRAVERSAL OPERATOR'
personne = {
  nom : 'Youssef Warid',
  tel : '0600112233',
  adresse: {
    ville: 'Casablanca',
    code: 202000
  }
}
}
