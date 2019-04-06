import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { PatientListComponent } from './components/patient-list/patient-list/patient-list.component';
import { PatientInformationComponent } from './components/patient-information/patient-information/patient-information.component';



const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'patient-list', component: PatientListComponent },
    { path: 'patient-information', component: PatientInformationComponent }
  //  { path: 'student', component: StudentComponent },
   // { path: 'subject', component: SubjectFormComponent }    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}