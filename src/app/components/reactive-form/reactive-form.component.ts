import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';

import { User } from '../../models/user';
import { UserPromiseService } from '../../services';

@Component({
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public user: User;
  public countries: Array<string>;

  constructor(
    public userPromiseService: UserPromiseService
  ) { }

  ngOnInit() {


    this.userPromiseService.getUser()
      .then(usr => { this.user = Object.assign(new User(), usr); })
      .catch((err) => console.log(err));

    this.userPromiseService.getCountries()
      .then(countries => this.countries = countries)
      .catch((err) => console.log(err));
  }


  saveForm(form: any): void {
    console.log(form);
  }

  clear(): void {
    this.userPromiseService.getUser()
      .then(usr => { this.user = Object.assign(new User(), usr); })
      .catch((err) => console.log(err))
  }

}
