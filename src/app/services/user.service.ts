import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "../../share/models/User";
import {userList} from "../../share/mockUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userList:User[] = userList;

  constructor() { }
  getUsers():Observable<User[]>{
    return of(this.userList);
  }

  addUser(newUser:User):Observable<User>{
    this.userList.push(newUser);
    return of(newUser);
  }

  updateUser(updateUser:User):Observable<User | undefined>{
    const index = this.userList.findIndex(User=>User.firstName === updateUser.firstName);
    if (index > -1) {
      this.userList[index]=updateUser;
      return of(updateUser);
    }
    return of(undefined);
  }

  getUserbyId(id: number):Observable<User | undefined>{
    return of(this.userList.find(User => User.id === id));
  }

  generateNewId() {
    return this.userList.length >0 ? Math.max(...this.userList.map(userList => userList.id)) +1 : 1;
  }
}
