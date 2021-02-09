import { Component, OnInit } from '@angular/core';
import{RegisterServiceService} from 'src/app/register-service.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
 Users:any=[];

  constructor(public registerSevice:RegisterServiceService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    return this.registerSevice.getUsers().subscribe((data: {}) => {
      this.Users = data;
    })
  }
}
