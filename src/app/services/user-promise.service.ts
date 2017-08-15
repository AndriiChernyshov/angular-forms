import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import './rxjs-extensions';

import { User } from '../models/user';

@Injectable()
export class UserPromiseService {
 
  private tasksUrl = 'http://localhost:3000/user';

  constructor(
    private http: Http
  ) {}

  public getUser(): Promise<User> {
    return this.http.get(this.tasksUrl)
            .toPromise()
            .then( response => <User>response.json())
            .catch(this.handleError);
            
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}
