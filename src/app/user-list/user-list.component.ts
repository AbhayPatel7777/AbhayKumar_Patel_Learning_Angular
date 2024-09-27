import { Component } from '@angular/core';
import {User} from "../../share/models/User";
import {UserListItemComponent} from "../user-list-item/user-list-item.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    UserListItemComponent,
    NgClass
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  userList: User[]=[
    {id:1,firstName:"Abhay",lastName:"Patel",department:"Computer Programming",isAdmin:false,PhoneNumber:87438573294232},
    {id:2,firstName:"Rushabh",lastName:"Parekh",department:"Computer Programming",isAdmin:true,PhoneNumber:383247264632},
    {id:3,firstName:"Rohan",lastName:"Parmar",department:"Computer Programming",isAdmin:false,PhoneNumber:232333221221},
    {id:4,firstName:"Akshat",lastName:"Rathod",department:"Networking",isAdmin:false,PhoneNumber:98738623992}

  ]
}
