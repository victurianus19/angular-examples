import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-injector',
  templateUrl: './user-di.component.html',
  styleUrls: ['./user-di.component.scss']
})
export class UserDiInjectorComponent implements OnInit {
  public userName: string;
  public userService: UserService;

  // Angular will inject the singleton instance of 'UserService'
  constructor() {
    // create an injector and create a service
    const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);

    // Use the injector to get the instance of the UserService
    this.userService = injector.get(UserService);
   }

  public ngOnInit() {

  }

  /**
   * Method to show the user logged in a login form
   */
  public signIn(): void {
    this.userService.setUser({
      name: 'Mr. Jonh is using the normal injector'
    });

    // Read the user name from the service
    this.userName = this.userService.getUser().name;
    console.log('User Name is: ', this.userName);
  }

}
