import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { Routes, RouterModule } from '@angular/router';
import { CARS_SECRET } from './cars/cars.token';
import { CarsService } from './cars/cars.service';

const routes: Routes = [
  {
    path: 'cars',
    providers: [{ provide: CARS_SECRET, useValue: 'xyz' }, CarsService],
    loadComponent: () =>
      import('./cars/cars.component').then(
        ({ CarsComponent }) => CarsComponent
      ),
  },
  {
    path: 'cars/create',
    providers: [{ provide: CARS_SECRET, useValue: 'xyz' }, CarsService],
    loadComponent: () =>
      import('./cars/cars.component').then(
        ({ CarsComponent }) => CarsComponent
      ),
  },
  {
    path: 'tanks',
    loadComponent: () =>
      import('./tanks/tanks.component').then(
        ({ TanksComponent }) => TanksComponent
      ),
  },
  {
    path: 'tanks/create',
    loadComponent: () =>
      import('./tanks/tanks.component').then(
        ({ TanksComponent }) => TanksComponent
      ),
  },
  {
    path: 'user/create',
    loadComponent: () =>
      import('./user/user.component').then(
        ({ UserComponent }) => UserComponent
      ),
  },
];

@NgModule({
  imports: 
  [
    BrowserModule, 
    //FormsModule, 
    HttpClientModule, //To use HttpClient, We have to first import HttpClientModule in the Angular application module
    RouterModule.forRoot(routes)
  ],
  declarations: 
  [
    AppComponent, 
    HeaderComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
