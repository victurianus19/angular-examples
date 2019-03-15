import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';

/**
 * Validator to check the normal inputs
 * @returns StringMap<string, boolean>, the key is the error code and value true If it fails
 * @param control
 */
function inputValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^[A-Z]+/)) {
    return {invalidInput: true};
  }
}

/**
 * Validator to check Email
 * @returns StringMap<string, boolean>, the key is the error code and value true If it fails
 * @param control
 */
function emailValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
    return {invalidInput: true};
  }
}

/**
 * Validator to check Passwords
 * @param group
 */
function passwordsValidator(group: FormGroup) {
  const pass = group.controls.passwordInput.value;
  const confirmPass = group.controls.passwordConfirmInput.value;

  return (pass === confirmPass) ? true : { invalidInputPass: false };
}

@Component({
  selector: 'app-big-form',
  templateUrl: './big-form.component.html',
  styleUrls: ['./big-form.component.scss']
})
export class BigFormComponent implements OnInit {

  public myForm: FormGroup;
  public nameInput: AbstractControl;
  public surNameInput: AbstractControl;
  public emailInput: AbstractControl;
  public passwordInput: AbstractControl;
  public passwordConfirmInput: AbstractControl;
  public sType: string;

  constructor(public fb: FormBuilder) {
    this.myForm = fb.group({
      'nameInput': ['', Validators.compose([
        Validators.required, Validators.minLength(1),
        Validators.maxLength(12), inputValidator])],

      'surNameInput': ['', Validators.compose([
        Validators.required, Validators.minLength(1),
        Validators.maxLength(20), inputValidator])],

      'emailInput': ['', Validators.compose([
        Validators.required, emailValidator])], // Validators.pattern('Pattern')

      'passwordInput': ['', Validators.compose([
        Validators.required, Validators.minLength(6),
        Validators.maxLength(12), inputValidator])],

      'passwordConfirmInput': ['', Validators.compose([
        Validators.required, Validators.minLength(6),
        Validators.maxLength(12), inputValidator])]

    }, {validator: passwordsValidator});

    this.nameInput = this.myForm.controls['nameInput'];
    this.surNameInput = this.myForm.controls['surNameInput'];
    this.emailInput = this.myForm.controls['emailInput'];
    this.passwordInput = this.myForm.controls['passwordInput'];
    this.passwordConfirmInput = this.myForm.controls['passwordConfirmInput'];

    // Watching the changes
    this.nameInput.valueChanges.subscribe((value: string) => {
      console.log('Input changed to: ', value);
    });

    this.myForm.valueChanges.subscribe((form: any) => {
      console.log('Form chaged to: ', form);
    });
    this.sType = 'password';
   }

  public ngOnInit() {
    // Validate the multiple validators for array method
    // this.myForm = this.fb.group({
    //   text: ['', Validators.required],
    //   options: this.fb.array([[], [inputValidator]]),
    // });
  }

  /**
   * Method to submit of value of the input tag
   * @param value
   */
  public onSubmit(value: string): void {
    console.log('Big Form: You submitted value: ', value);
  }

  /**
   * Method to show or hide the text of an input
   */
  public showHideTextInput(): void {
    this.sType === 'text' ? this.sType = 'password' : this.sType = 'text';
  }

}
