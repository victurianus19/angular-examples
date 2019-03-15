import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-di',
  templateUrl: './user-di.component.html',
  styleUrls: ['./user-di.component.scss']
})
export class UserDiComponent implements OnInit {
  public userName: string;

  // Angular will inject the singleton instance of 'UserService'
  constructor(private userService: UserService) { }

  public ngOnInit() {

  }

  /**
   * Method to show the user logged
   */
  public signIn(): void {
    this.userService.setUser({
      name: 'Mr. Jonh is using the manual injector'
    });

    this.userName = this.userService.getUser().name;
    console.log('User Name is: ', this.userName);
  }

}
