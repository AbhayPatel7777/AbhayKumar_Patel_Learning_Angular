import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {UserListItemComponent} from "./app/user-list-item/user-list-item.component";
import {UserListComponent} from "./app/user-list/user-list.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyUserComponent} from "./app/modify-user/modify-user.component";

const routes: Routes =[
{path:'', redirectTo: '/userList', pathMatch: 'full'}, //default route
{ path: 'userList', component: UserListComponent },
{ path: 'userList/:id', component: UserListItemComponent },
  {path:'modify-list-item', component: ModifyUserComponent},
  {path: '**', component:PageNotFoundComponent}
];
bootstrapApplication(AppComponent, {providers:[provideRouter(routes)]})
  .then(r=>console.log("sucessful"));
