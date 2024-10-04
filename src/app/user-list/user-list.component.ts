import {Component, OnInit} from '@angular/core';
import {User} from "../../share/models/User";
import {UserListItemComponent} from "../user-list-item/user-list-item.component";
import {NgClass, NgForOf} from "@angular/common";
import {UserService} from "../services/user.service";
import {userList} from "../../share/mockUser";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    UserListItemComponent,
    NgClass,
    NgForOf
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  displayColumns:string[] = ['id', 'firstName', 'lastName', 'department', 'isAdmin?', 'PhoneNumber']
  MarvelComics:User[]=[];


  constructor(private userService:UserService) {
  }
  ngOnInit() {
    this.userService.getUsers().subscribe({
      next:(data:User[])=> this.MarvelComics = data,
      error: err => console.log("Fetching Error",err),
      complete:() => console.log("data fetched"),
    })
  }
  selectedUser?:User;
  selectUser(user:User):void {
    this.selectedUser = user;
  }

  protected readonly userList = userList;
}
