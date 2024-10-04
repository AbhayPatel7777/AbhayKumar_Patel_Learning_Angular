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
    return of(userList);
  }

  addUser(newUser:User):Observable<User[]>{
    this.userList.push(newUser);
    return of(this.userList);
  }

  updateUser(updateUser:User):Observable<User[]>{
    const index = this.userList.findIndex(abh=>abh.firstName === updateUser.firstName);
    if (index !== -1) {
      this.userList[index]=updateUser;
    }
    return of(this.userList);
  }
  deleteUser(deletefirstName: string):Observable<User[]>{
    this.userList = this.userList.filter(abh=>abh.firstName !== deletefirstName);
    return of(this.userList);
  }
  getUser(readfirstName:string):Observable<User | undefined>{
    const hero =this.userList.find(abh=>abh.firstName === readfirstName);
    return of(hero);
  }

}
