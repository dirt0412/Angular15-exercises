import { Component, inject, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../user/user.service';
import { TanksService } from './tanks.service';

@Component({
  selector: 'app-tanks',
  templateUrl: './tanks.component.html',
  styleUrls: ['./tanks.component.css'],
  standalone: true,//new
})
export class TanksComponent implements OnInit {
  private readonly userService = inject(UserService);//new
  private readonly tanksService = inject(TanksService);//new
  user: User = { id: 1, name: "JK", eMail: "jk2@mail.com" };

  ngOnInit() {
    console.log(`TanksComponent -> access to userService: ${this.userService}`);
    this.userService.createUser(this.user).subscribe({
      next: (user: User) => {
        console.log(user);
        this.tanksService.createTank(user);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }
}
