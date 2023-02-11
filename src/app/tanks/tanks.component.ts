import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TanksService } from './tanks.service';

@Component({
  selector: 'app-tanks',
  templateUrl: './tanks.component.html',
  styleUrls: ['./tanks.component.css'],
  standalone: true,
})
export class TanksComponent implements OnInit {
  private readonly userService = inject(UserService);
  private readonly tanksService = inject(TanksService);

  ngOnInit() {
    console.log(`[TanksComponent]: userService: ${this.userService}`);
  }
}
