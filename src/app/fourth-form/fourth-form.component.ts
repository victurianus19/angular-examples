import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-fourth-form',
  templateUrl: './fourth-form.component.html',
  styleUrls: ['./fourth-form.component.scss']
})
export class FourthFormComponent implements OnInit {
  public myForm: FormGroup;
  public productName: string;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'productName': ['', Validators.required]
    });
  }

  public ngOnInit() {
  }

  /**
   * Method to submit of value of the input tag
   * @param value
   */
  public onSubmit(value: string): void {
    console.log('You submitted value: ', value);
  }

}
