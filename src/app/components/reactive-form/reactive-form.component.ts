import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';

import { User } from '../../models/user';
import { UserPromiseService } from '../../services';

@Component({
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public reactiveFormGroup: FormGroup;
  public user: User;
  public countries: Array<string>;

  constructor(
    public userPromiseService: UserPromiseService,
    public fb: FormBuilder
  ) { }

  ngOnInit() {


    this.userPromiseService.getUser()
      .then(usr => { this.user = Object.assign(new User(), usr); })
      .catch((err) => console.log(err));

    this.userPromiseService.getCountries()
      .then(countries => this.countries = countries)
      .catch((err) => console.log(err));

      this.createForm();
  }


  saveForm(form: any): void {
    console.log(form);
  }

  clear(): void {
    this.userPromiseService.getUser()
      .then(usr => { this.user = Object.assign(new User(), usr); })
      .catch((err) => console.log(err))
  }

  private createForm(){
    this.reactiveFormGroup = this.fb.group({
      firstName: [{value: 'AAA'}]
    });
  }

}
