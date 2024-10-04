import { Component } from '@angular/core';
import {User} from "../../share/models/User";
import {UserListItemComponent} from "../user-list-item/user-list-item.component";
import {NgClass, NgForOf} from "@angular/common";

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
export class UserListComponent {

}
