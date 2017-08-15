import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';

import { User } from '../../models/user';
import { UserPromiseService } from '../../services';

@Component({
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  public user: User
  constructor(
    public userPromiseService: UserPromiseService
  ) { }

  ngOnInit() {
   

      this.sleep(1)
      .then( () =>  this.userPromiseService.getUser()
      .then(user => {this.user = user; console.log(this.user); })
      .catch((err) => console.log(err)));
     
      console.log(this.user);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
