import { inject, Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { CARS_SECRET } from './cars.token';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user';
import { catchError, map, Observable } from 'rxjs';
import { Common } from '../Common/throw-error';
import { Car } from '../Models/Car';

// @Injectable({ providedIn: 'root' })
@Injectable()
export class CarsService extends Common {
  private readonly userService = inject(UserService);//new
  private readonly secret = inject(CARS_SECRET, { optional: true });//new
  private user_api_url: string = 'cars';

  constructor(private httpClient: HttpClient) {
    super();
    console.log(`CarsService -> access to userService: ${this.userService}`);
    console.log(`CarsService: -> access to secret: ${this.secret}`);
  }

  ngOnInit() {
    this.getUserCreateCars();
  }

  getUserCreateCars() {
    this.userService.getUser(1).subscribe({
      next: (u: User) => {
        this.createCars(u);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  createCars(user: User): Observable<Car> {
    return this.httpClient.post(this.user_api_url + '/create', user)
      .pipe(map((resp: User) => resp.json()),
        catchError(async (error) => this.throwError(error))
      )
  }
}
