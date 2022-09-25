import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './sharepage/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { BuycourseComponent } from './pages/buycourse/buycourse.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { HomeOnComponent } from './pages/home-on/home-on.component';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { ExportComponent } from './pages/export/export.component';
import { UploadCourseComponent } from './pages/upload-course/upload-course.component';

const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'Menu', component:MenuComponent},
 {path: 'login', component:LoginComponent},
 {path: 'Register', component: RegisterComponent},
 {path: 'PopUp', component: PopUpComponent},
 {path: 'Buycourses/:nome', component: BuycourseComponent},
 {path: 'Payment', component: PaymentComponent},
 {path: 'Homeon', component: HomeOnComponent},
 {path: 'Certificate', component: CertificateComponent},
 {path: 'Export', component: ExportComponent},
 {path: 'UploadCourse', component: UploadCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
