import { Routes } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component'
import { CoursesComponent } from './pages/courses/courses.component'

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'Courses', component: CoursesComponent}
]