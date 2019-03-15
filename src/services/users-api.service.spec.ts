import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { UsersApiService } from './users-api.service';

// import the testing package
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HttpParams } from '@angular/common/http';

export class User {
  constructor(
    id: number = 0,
    login: string = '',
    avatar_url: string = '',
    events_url: string = '',
    followers_url: string = '',
    following_url: string = '',
    gists_url: string = '',
    gravatar_id: string = '',
    html_url: string = '',
    organizations_url: string = '',
    received_events_url: string = '',
    repos_url: string = '',
    site_admin: boolean = false,
    starred_url: string = '',
    subscriptions_url: string = '',
    type: string = '',
    url: string = ''
  ) {}
}
export class SearchUsers<T> {
  items: T[];
  total_count: number;
  incomplete_results: boolean;
}

fdescribe('UsersApiService - get', () => {
  //
  let injector;
  let serviceMock: UsersApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersApiService]
    });
    injector = getTestBed();
    serviceMock = injector.get(UsersApiService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', inject(
    [UsersApiService],
    (service: UsersApiService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should get a list of users', () => {
    const dummyUsers: User[] = [{ login: 'John' }, { login: 'Doe' }];
    serviceMock.getUsers().subscribe((users: User[]) => {
      expect(users.length).toBe(2);
      expect(users).toEqual(dummyUsers);
    });

    // req is a TestRequest object to the mock requests
    const req = httpMock.expectOne(serviceMock.API_URL_USERS);
    expect(req.request.method).toBe('GET');
    // method to provide dummy values as responses
    req.flush(dummyUsers);
  });

  // Method to make sure that there are no outstanding requests
  afterEach(() => {
    httpMock.verify();
  });
});

fdescribe('UsersApiService - Search', () => {
  let injector;
  let serviceMock: UsersApiService;
  let httpMock: HttpTestingController;
  const dummyParams = new HttpParams().set('q', 'mojombo');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersApiService]
    });
    injector = getTestBed();
    serviceMock = injector.get(UsersApiService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should return an error', () => {
    serviceMock.searchUser('unknown', dummyParams).subscribe(
      () => {},
      error => {
        expect(error).toBe('Error: Searching to unknown');
      }
    );
    const req = httpMock.expectNone(
      `${serviceMock.API_URL_USERS}/search/users?q=mojombo`
    );
  });

  it('should return an Observable with the user found', () => {
    serviceMock.searchUser('users', dummyParams).subscribe(result => {
      expect(result.items.length).toBe(2);
    });

    const req = httpMock.expectOne(
      `${serviceMock.API_URL_USERS}/search/users?q=mojombo`
    );
    expect(req.request.url).toBe(`${serviceMock.API_URL_USERS}/search/users`);
    expect(req.request.params).toBe(dummyParams);

    // method to provide dummy values as responses
    req.flush({
      incompleteResults: false,
      items: [{}, {}],
      totalCount: 2
    });
  });
});
