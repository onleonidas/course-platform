import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './sharepage/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { CoursesComponent } from './pages/courses/courses.component';

const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'Menu', component:MenuComponent},
 {path: 'login', component:LoginComponent},
 {path: 'Courses', component:CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
