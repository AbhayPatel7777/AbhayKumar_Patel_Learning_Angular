import {Component, OnInit} from '@angular/core';
import {User} from "../../share/models/User";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-modify-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './modify-user.component.html',
  styleUrl: './modify-user.component.css'
})
export class ModifyUserComponent implements OnInit{
  userForm: FormGroup;
  User : User | undefined;

  constructor(
    private fb : FormBuilder,
    private route: ActivatedRoute,
    private UserService: UserService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      id: ['',Validators.required],
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      department: [''],
      PhoneNumber: ['',Validators.required],
      isAdmin: [false],
    });
  }

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
      this.UserService.getUserbyId(+id).subscribe(UserService=>{
        if (UserService){
         this.User=UserService;

         this.userForm.patchValue(UserService);
        }
      });
    }
  }

  onSubmit():void{
  const User: User = this.userForm.value;

  if (User.id){
    this.UserService.updateUser(User);
  }else {
    const newId = this.UserService.generateNewId();
    User.id = newId;
    this.UserService.addUser(User);
  }

  this.router.navigate(['/userList'])
  }


  navigateToUserList(): void{
    this.router.navigate(['/userList']);
  }
}

