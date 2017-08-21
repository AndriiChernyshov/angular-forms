import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';

import { User } from '../../models/user';
import { UserPromiseService } from '../../services';

@Component({
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  public user: User;
  public countries: Array<string>;

  constructor(
    public userPromiseService: UserPromiseService
  ) { }

  ngOnInit() {
   
      this.sleep(1)
      .then( () =>  this.userPromiseService.getUser()
      .then(usr => {this.user = Object.assign(new User(), usr);})
      .catch((err) => console.log(err)));
     
      this.userPromiseService.getCountries()
        .then(countries => this.countries = countries)
        .catch((err) => console.log(err));
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  saveForm(form: any): void{
    console.log(form);
  }

  clear(): void{
    this.userPromiseService.getUser()
    .then(usr => {this.user = Object.assign(new User(), usr);})
    .catch((err) => console.log(err))
  }

}
