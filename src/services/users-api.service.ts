import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * Class to use in the part of the Routing
 */
export class UsersApiService {
  // 'repositories', 'commits', 'code', 'issues', 'users'
  public readonly API_URL_USERS = 'https://api.github.com/users';
  public readonly API_URL_EMOJIS = 'https://api.github.com/emojis';

  constructor(private http: HttpClient) { }

  /**
   * Method to get the users of the URL
   */
  public getUsers() {
    return this.http.get(this.API_URL_USERS);
  }

  /**
   * Method to search an user
   * @param user
   * @param params
   */
  public searchUser(user: string, params: HttpParams): Observable<any> {
    if (user) {
      return this.http.get(`${this.API_URL_USERS}/search/${user}`, {params});
    }
  }

  /**
   * Method to get the emojis of the URL
   */
  public getEmojis() {
    return this.http.get(this.API_URL_EMOJIS);
  }


}
