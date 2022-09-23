import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire/compat';

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { MenuComponent } from './sharepage/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { BuycourseComponent } from './pages/buycourse/buycourse.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { HomeOnComponent } from './pages/home-on/home-on.component';
import { NavBarOnComponent } from './sharepage/nav-bar-on/nav-bar-on.component';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { ExportComponent } from './pages/export/export.component';
import { UploadCourseComponent } from './pages/upload-course/upload-course.component';
import { CourseuploadComponent } from './pages/course-upload/courseupload/courseupload.component';
import { FirebaseAppModule, initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore, FirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PopUpComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    CoursesComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    BuycourseComponent,
    PaymentComponent,
    HomeOnComponent,
    NavBarOnComponent,
    CertificateComponent,
    ExportComponent,
    UploadCourseComponent,
    CourseuploadComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
