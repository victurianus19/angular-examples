import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: any;

  constructor() { }

  public setUser(newUser: any) {
    this.user = newUser;
  }

  public getUser(): any {
    return this.user;
  }
}
