import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss']
})
export class FirstFormComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
  }

  /**
   * Method to submit in the input of template
   * @param form
   */
  public onSubmit(form: any): void {
    console.log('You sumitted value', form);
  }

}
