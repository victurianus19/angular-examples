import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss']
})
export class SecondFormComponent implements OnInit {
  public myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'inputSecond': ['MalagaTeam']
    });
   }

  public ngOnInit() {
  }

  /**
   * Method to submit of value of the input tag
   * @param value
   */
  public onSubmit(value: string) {
    console.log('You submitted value: ', value);
  }

}
