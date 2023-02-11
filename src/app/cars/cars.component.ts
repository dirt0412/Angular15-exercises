import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  standalone: true,//new
})
export class CarsComponent implements OnInit {
  private readonly userService = inject(UserService);//new
  private readonly carsService = inject(CarsService);//new

  ngOnInit() {
    console.log(`CarsComponent -> access to userService: ${this.userService}`);
    console.log(`CarsComponent -> access to carsService: ${this.carsService}`);
  }
}
