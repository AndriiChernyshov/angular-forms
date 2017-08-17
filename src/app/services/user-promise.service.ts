import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import './rxjs-extensions';

import { User } from '../models/user';

@Injectable()
export class UserPromiseService {
 
  private userUrl = 'http://localhost:3000/user';
  private countriesUrl = 'http://localhost:3000/countries';

  constructor(
    private http: Http
  ) {}

  public getUser(): Promise<User> {
    return this.http.get(this.userUrl)
            .toPromise()
            .then( response => <User>response.json())
            .catch(this.handleError);

  }

  public getCountries(): Promise<Array<string>>{
    return this.http.get(this.countriesUrl)
      .toPromise()
      .then( response => <Array<string>>response.json())
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}
