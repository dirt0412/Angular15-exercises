import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { User } from '../Models/user';
import { Common } from '../Common/throw-error';

@Injectable({ providedIn: 'root' })
export class UserService extends Common {
  private user_api_url: string = 'user';

  constructor(private httpClient: HttpClient) {
    super();
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.post(this.user_api_url + '/create', user)
      .pipe(map((resp: User) => resp.json()),
        catchError(async (error) => this.throwError(error))
      )
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get(this.user_api_url + '/read')
      .pipe(map((resp: User) => resp.json()),
        catchError(async (error) => this.throwError(error))
      )
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get(this.user_api_url + `/read/${id}`)
      .pipe(map((resp: User) => resp.json()),
        catchError(async (error) => this.throwError(error))
      )
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put(this.user_api_url + '/update', user)
      .pipe(map((resp: User) => resp.json()),
        catchError(async (error) => this.throwError(error))
      )
  }

  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete(this.user_api_url + '/delete/{id}')
      .pipe(map((resp: User) => resp.json()),
        catchError(async (error) => this.throwError(error))
      )
  }

}
