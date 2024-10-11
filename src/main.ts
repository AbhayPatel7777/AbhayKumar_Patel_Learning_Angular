import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {UserListItemComponent} from "./app/user-list-item/user-list-item.component";
import {UserListComponent} from "./app/user-list/user-list.component";
import * as path from "node:path";

const routes: Routes =[
{path:'', redirectTo: '/userList', pathMatch: 'full'}, //default route
{ path: 'userList', component: UserListComponent },
{ path: 'userList/:id', component: UserListItemComponent },
];
bootstrapApplication(AppComponent, {providers:[provideRouter(routes)]})
  .then(r=>console.log("sucessful"));
