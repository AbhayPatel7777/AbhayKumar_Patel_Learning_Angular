import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from "../share/models/User";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-assignment';
  user1 : User ={id: 1, firstName: "Rushabh", lastName: "Parekh",department: "Computer Programming",isAdmin: false, PhoneNumber: 2269613465 };
  user2 : User ={id: 2, firstName: "Rohan", lastName: "Parmar", department: "Computer Programming", isAdmin: true, PhoneNumber: 7646823942};
  user3 : User ={id: 3, firstName: "Akshat", lastName: "Rathod", department: "Networking", isAdmin: false, PhoneNumber: 78234687294};
  user4 : User ={id: 4, firstName: "Meetraj", lastName: "Chavda", department: "Networking", isAdmin: false, PhoneNumber: 24523784823};
  user5 : User ={id: 5, firstName: "Harsh", lastName: "Patel", department: "Networking", isAdmin: false, PhoneNumber: 9723476235423};
  user6 : User ={id: 6, firstName: "Sujal", lastName: "Kapadiya", department: "Programming", isAdmin: false, PhoneNumber: 25237623234};

  //Putting the values in the user list
  userList: User[]=[this.user1,this.user2,this.user3,this.user4,this.user5,this.user6]
}
