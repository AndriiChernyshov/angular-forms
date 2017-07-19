import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit {
  private myForm: FormGroup;
  private sku: AbstractControl;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'sku': ['ABC123', Validators.compose([
        Validators.required, skuValidator
      ])], 
      'productName': ['PRD 1']
    });
    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe(
      (value:string)=>{
        console.log('sku changed to: ', value);
      }
    )

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to: ', form);
      }
    )
  }

  ngOnInit() {
  }

  onSubmit(form: any): void{
    console.log('you submitted value: ', form);
  }
}

function skuValidator(control: FormControl): {[s:string]: boolean}{
    if(!control.value.match(/^123/)){
      return {invalidSku: true}
    }
  }



