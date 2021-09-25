import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';



export class DataService {

 
  constructor(private url: string ,private http : HttpClient) { }


  getAll(){
    return this.http.get(this.url).pipe(
        catchError(this.handleError)
      );
  }

  create(resource: any){
    return this.http.post(this.url, resource).pipe(
      catchError(this.handleError)
    );
  }

  update(resource: any){
    return  this.http.put(this.url+'/'+resource.id, resource).pipe(
      catchError(this.handleError)
    );
  }

  delete(resource: any){
    return  this.http.delete(this.url+'/'+resource.id).pipe(
      catchError(this.handleError)
    );
  }



  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    }
     else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }



}
