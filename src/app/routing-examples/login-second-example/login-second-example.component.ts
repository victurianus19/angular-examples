import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

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
  selector: 'app-login',
  templateUrl: './login-second-example.component.html',
  styleUrls: ['./login-second-example.component.scss']
})
export class LoginComponent implements OnInit {

  public myForm: FormGroup;
  public nameInput: AbstractControl;
  public surNameInput: AbstractControl;
  public emailInput: AbstractControl;
  public passwordInput: AbstractControl;
  public passwordConfirmInput: AbstractControl;
  public sType: string;

  constructor(fb: FormBuilder, public authService: AuthService, private router: Router) {
    this.myForm = fb.group({

      'emailInput': ['', Validators.compose([
        Validators.required, emailValidator])], // Validators.pattern('Pattern')

      'passwordInput': ['', Validators.compose([
        Validators.required, Validators.minLength(6),
        Validators.maxLength(12), inputValidator])],

    });

    this.emailInput = this.myForm.controls['emailInput'];
    this.passwordInput = this.myForm.controls['passwordInput'];

    // Watching the changes
    this.emailInput.valueChanges.subscribe((value: string) => {
      console.log('Input changed to: ', value);
    });

    this.myForm.valueChanges.subscribe((form: any) => {
      console.log('Form chaged to: ', form);
    });
    this.sType = 'password';
   }

  public ngOnInit() {
  }

  /**
   * Method to submit of value of the input tag
   * @param userName
   */
  public onSubmit(userName: string, password: string): boolean {
    console.log('Log Form: You submitted value: ', userName, password);
    if (!this.authService.login(userName, password)) {
      return false;
    }
    console.log('YES: ', userName, password);
    // this.router.navigate(['/dashboardUser']);
    return true;
  }

  /**
   * Method to show or hide the text of an input
   */
  public showHideTextInput(): void {
    this.sType === 'text' ? this.sType = 'password' : this.sType = 'text';
  }

}
