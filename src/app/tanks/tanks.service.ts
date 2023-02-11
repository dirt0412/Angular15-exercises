import { inject, Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TanksService {
  private readonly userService = inject(UserService);
  users: [] = [];

  constructor(private httpClient: HttpClient) {
    console.log(`TanksService -> access to userService: ${this.userService}`);
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    }, (error) => {
      console.log("An error accessing Employee Service");
    });
  }

}
