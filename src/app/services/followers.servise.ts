import { DataService } from './data.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class FollowersService extends DataService {
  
    constructor(http : HttpClient) {
      super('https://api.github.com/users/IDBRAHIMDEV/followers', http);
    }
  
  
  
  
  
  }