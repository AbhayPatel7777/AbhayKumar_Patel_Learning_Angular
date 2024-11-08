import { Injectable } from '@angular/core';
import {catchError, Observable, of, throwError} from "rxjs";
import {User} from "../../share/models/User";
import {userList} from "../../share/mockUser";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'api/user'
  private userList:User[] = userList;


  constructor(private http: HttpClient) { }
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl).pipe(catchError(this.handelError));
  }

  addUser(newUser:User):Observable<User>{
    newUser.id = <number>this.generateNewId();
    return this.http.post<User>(this.apiUrl,newUser).pipe(catchError(this.handelError));
  }

  updateUser(updateUser:User):Observable<User | undefined>{
    const url = `${this.apiUrl}/${updateUser.id}`;
    return this.http.post<User>(url,updateUser).pipe(catchError(this.handelError));
  }

  getUserbyId(id: number):Observable<any>{
    return this.http.get<User>(`${this.apiUrl}/${userList}`).pipe(catchError(this.handelError));
  }

  generateNewId() {
    return this.userList.length > 0 ? Math.max(...this.userList.map(userList => userList.id)) + 1 : 1;
  }
  private handelError(error: HttpErrorResponse){
    console.error('API error:' ,error);
    return throwError(() => new Error('Server error ,please try again'));

  }
}
