import { Component, OnInit } from '@angular/core';
import { User } from "../../share/models/User";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-modify-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css']
})
export class ModifyUserComponent implements OnInit {
  userForm: FormGroup;
  user: User | undefined;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      id: [this.userService.generateNewId()],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      department: [''],
      phoneNumber: ['', Validators.required], // Adjusted casing to camelCase
      isAdmin: [false],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUserbyId(+id).subscribe({
        next: user => {
          if (user) {
            this.userForm.patchValue(user);
          }
        },
        error: err => {
          this.error = 'Error fetching user';
          console.error('Error fetching user:', err);
        }
        });
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;

      if (user.id) {
        this.userService.updateUser(user).subscribe(() => this.router.navigate(['/userList']));
      } else {
        user.id = this.userService.generateNewId();
        this.userService.addUser(user).subscribe(() => this.router.navigate(['/userList']));
      }
    }
  }

  navigateToUserList(): void {
    this.router.navigate(['/userList']);
  }
}
