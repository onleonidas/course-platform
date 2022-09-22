import { Routes } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'
import { BuycourseComponent } from './pages/buycourse/buycourse.component'
import { PaymentComponent } from './pages/payment/payment.component'
import { SettingsComponent } from './pages/settings/settings.component'
import { HomeOnComponent } from './pages/home-on/home-on.component'
import { CertificateComponent } from './pages/certificate/certificate.component';
import { ExportComponent } from './pages/export/export.component';
import { CourseuploadComponent } from './pages/course-upload/courseupload/courseupload.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'Register', component: RegisterComponent },
    { path: 'Buycourse', component: BuycourseComponent },
    { path: 'Payment', component: PaymentComponent },
    { path: 'Certificate', component: CertificateComponent },
    { path: 'Export', component: ExportComponent },
    { path: 'settings', component: SettingsComponent},
    { path: 'Homeon', component: HomeOnComponent},
    { path: 'Courseupload', component: CourseuploadComponent},
]