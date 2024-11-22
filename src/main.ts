import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {UserListItemComponent} from "./app/user-list-item/user-list-item.component";
import {UserListComponent} from "./app/user-list/user-list.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyUserComponent} from "./app/modify-user/modify-user.component";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/services/in-memory-data.service";

const routes: Routes =[
{path:'', redirectTo: '/userList', pathMatch: 'full'}, //default route
{ path: 'userList', component: UserListComponent },
{ path: 'userList/:id',loadComponent:() =>
import('./app/user-list-item/user-list-item.component').then(m => m.UserListItemComponent)},
  {path:'modify-list-item', loadComponent:() =>
  import('./app/modify-user/modify-user.component').then(m => m.ModifyUserComponent )},
  {path: '**', loadComponent:() =>
  import('./app/page-not-found/page-not-found.component').then(m =>m.PageNotFoundComponent)}
];
bootstrapApplication(AppComponent, {providers:[
  provideHttpClient(),
  provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{delay: 1}))
  ],
}).catch((err) => console.error(err));
