import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';

/**
 * Custom validator
 * @returns StringMap<string, boolean>, the key is the error code and value true If it fails
 * @param control
 */
function inputValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^al/)) {
    return {invalidInputThird: true};
  }
}


@Component({
  selector: 'app-third-form',
  templateUrl: './third-form.component.html',
  styleUrls: ['./third-form.component.scss']
})
export class ThirdFormComponent implements OnInit {
  public myForm: FormGroup;
  public inputThird: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'inputThird': ['', Validators.compose([
        Validators.required, inputValidator])]
    });
    this.inputThird = this.myForm.controls['inputThird'];

    // Watching the changes
    this.inputThird.valueChanges.subscribe((value: string) => {
      console.log('Input changed to: ', value);
    });

    this.myForm.valueChanges.subscribe((form: any) => {
      console.log('Form chaged to: ', form);
    });
   }

  public ngOnInit() {
  }

  /**
   * Method to submit of value of the input tag
   * @param value
   */
  public onSubmit(value: string): void {
    console.log('Input3: You submitted value: ', value);
  }

}
