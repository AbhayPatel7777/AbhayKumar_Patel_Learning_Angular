import {Component, OnInit} from '@angular/core';
import {User} from "../../share/models/User";
import {UserListItemComponent} from "../user-list-item/user-list-item.component";
import {NgClass, NgForOf} from "@angular/common";
import {UserService} from "../services/user.service";
import {userList} from "../../share/mockUser";
import {Router} from "@angular/router";

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
  cars:User[]=[];


  constructor(private userService:UserService, private router: Router) {
  }
  ngOnInit() {
    this.userService.getUsers().subscribe({
      next:(data:User[])=> this.cars = data,
      error: err => console.log("Fetching Error",err),
      complete:() => console.log("data fetched"),
    })
  }
 delete(id: Number):void {
   this.cars = this.cars.filter(car => car.id!==id);
 }
 edit(): void {
   this.router.navigate(['/modify-list-item']);
 }


  protected readonly userList = userList;
  protected readonly UserService = UserService;
}
