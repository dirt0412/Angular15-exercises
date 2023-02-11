import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private user_api_url: string = 'api.localhost.com';

  constructor(private httpClient: HttpClient) {}

  createUser(user: any): Observable<any> {
    return this.httpClient.post(this.user_api_url + '/create', user)
      .pipe(map((resp: any) => resp.json()),
        catchError(error => this.throwError(error))
      )

  }
  getUsers(): Observable<any> {
    return this.httpClient.get(this.user_api_url + '/read')
      .pipe(map((resp: any) => resp.json()),
        catchError(error => this.throwError(error))
      )

  }
  updateUser(user: any): Observable<any> {
    return this.httpClient.put(this.user_api_url + '/update', user)
      .pipe(map((resp: any) => resp.json()),
        catchError(error => this.throwError(error))
      )

  }
  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(this.user_api_url + '/delete/{id}')
      .pipe(map((resp: any) => resp.json()),
        catchError(error => this.throwError(error))
      )

  }
  throwError(error: any) {
    console.error(error);
    throwError(error);
  }


}
