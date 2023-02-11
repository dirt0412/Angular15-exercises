import { inject, Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user';
import { catchError, map, Observable } from 'rxjs';
import { Common } from '../Common/throw-error';
import { Tank } from '../Models/Tank';

@Injectable({ providedIn: 'root' })
export class TanksService extends Common {
  private readonly userService = inject(UserService);//new
  users: User[] = [];

  private user_api_url: string = 'tanks';

  constructor(private httpClient: HttpClient) {
    super();
    console.log(`TanksService -> access to userService: ${this.userService}`);
  }

  ngOnInit() {
    // this.userService.getUsers().subscribe({
    //   next: (u: User[]) => {
    //     this.users = u
    //   },
    //   error: (e) => console.error(e),
    //   complete: () => console.info('complete')
    // });

    this.getUserCreateTank();
  }

  getUserCreateTank() {
    this.userService.getUser(1).subscribe({
      next: (u: User) => {
        this.createTank(u);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  createTank(user: User): Observable<Tank> {
    return this.httpClient.post(this.user_api_url + '/create', user)
      .pipe(map((resp: User) => resp.json()),
        catchError(async (error) => this.throwError(error))
      )
  }

}
