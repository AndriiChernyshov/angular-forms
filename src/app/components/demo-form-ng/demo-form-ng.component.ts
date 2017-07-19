import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-demo-form-ng',
  templateUrl: './demo-form-ng.component.html',
  styleUrls: ['./demo-form-ng.component.css']
})
export class DemoFormNgComponent implements OnInit {
  myForm: FormGroup;
  productName: string;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'productName':['', Validators.required]
    });
   }

  ngOnInit() {
  }

  onSubmit(value:string):void{
    console.log('you submitted value: ', value);
  }

}
