import { inject, Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { CARS_SECRET } from './cars.token';
import { HttpClient } from '@angular/common/http';

// @Injectable({ providedIn: 'root' })
@Injectable()
export class CarsService {
  private readonly userService = inject(UserService);
  private readonly secret = inject(CARS_SECRET, { optional: true });

  constructor(private httpClient: HttpClient) {
    console.log(`CarsService -> access to userService: ${this.userService}`);
    console.log(`CarsService: -> access to secret: ${this.secret}`);
  }
}
