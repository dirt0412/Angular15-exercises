import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  standalone: true,
})
export class CarsComponent implements OnInit {
  private readonly userService = inject(UserService);
  private readonly carsService = inject(CarsService);

  ngOnInit() {
    console.log(`[CarsComponent]: userService: ${this.userService}`);
  }
}
