import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { BookState, selectVisibleBooks } from '../store/book.reducer';
import * as fromBook from '../store/book.actions';
import { Subscription } from 'rxjs';

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
  selector: 'app-book-example-ngrx',
  templateUrl: './book-example-ngrx.component.html',
  styleUrls: ['./book-example-ngrx.component.scss']
})
export class BookExampleNgrxComponent implements OnInit, OnDestroy {

  public myForm: FormGroup;
  public nameInput: AbstractControl;
  public surNameInput: AbstractControl;
  public emailInput: AbstractControl;
  public bookList: fromBook.Book[];

  constructor(fb: FormBuilder, public authService: AuthService, private router: Router, private store: Store<BookState>) {
    this.myForm = fb.group({

      'emailInput': ['', Validators.compose([
        Validators.required, emailValidator])], // Validators.pattern('Pattern')

    });

    this.emailInput = this.myForm.controls['emailInput'];

    // Watching the changes
    this.emailInput.valueChanges.subscribe((value: string) => {
      console.log('Input changed to: ', value);
    });

    this.myForm.valueChanges.subscribe((form: any) => {
      console.log('Form chaged to: ', form);
    });
   }

  public ngOnInit() {
    const bookState: BookState = {
      selectedUser: null,
      allBooks: null
    };

    // Observer of the state of the Store to the books of an user
    this.store.pipe(select(selectVisibleBooks(bookState)))
      .subscribe(result => {
        console.log(result);
        this.bookList = result;
    });
  }

  /**
   * Method to search an book
   * @param userEmail
   */
  public onSubmit(userEmail: string): void {
    console.log('Search Books to: ', userEmail);

    const user: fromBook.User2 = {
      email: userEmail
    };

    this.store.dispatch( new fromBook.SetBookAction(user) );
  }

  /**
   * Method to change the state of the store by default
   */
  public ngOnDestroy(): void {
    const user: fromBook.User2 = {
      email: null
    };
    this.store.dispatch( new fromBook.SetBookAction(user));
  }

}

