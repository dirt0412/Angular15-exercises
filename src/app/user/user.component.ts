import { Component, inject, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { TanksService } from '../tanks/tanks.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  standalone: true,//new
})
export class UserComponent implements OnInit {
  private readonly userService = inject(UserService);//new
  private readonly tanksService = inject(TanksService);//new
  user: User = { id: 1, name: "JK", eMail: "jk2@mail.com" };

  ngOnInit() {
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
