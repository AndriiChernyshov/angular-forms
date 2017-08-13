import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { UserService } from '../../services';

@Component({
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  public user: User
  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUser()
      .then(user => this.user = user)
      .catch((err) => console.log(err));
  }

}
