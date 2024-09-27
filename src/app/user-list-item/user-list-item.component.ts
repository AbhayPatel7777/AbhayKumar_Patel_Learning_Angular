import {Component, Input} from '@angular/core';
import {User} from "../../share/models/User";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-user-list-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './user-list-item.component.html',
  styleUrl: './user-list-item.component.css'
})
export class UserListItemComponent {
@Input() item ?:User;
}
