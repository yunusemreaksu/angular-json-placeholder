import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: User[] = [];

  constructor(private userService: UserService) {}

  getUsers() {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  ngOnInit() {
    this.getUsers();
  }
}
