import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {User} from "../share/models/User";
import {NgForOf, NgIf} from "@angular/common";
import {UserListItemComponent} from "./user-list-item/user-list-item.component";
import {UserListComponent} from "./user-list/user-list.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, UserListItemComponent, UserListComponent, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'User list';
}
