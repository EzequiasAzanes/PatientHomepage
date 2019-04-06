import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // import

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { AppRoutingModule } from './app-routing-module';
import { PatientListComponent } from './components/patient-list/patient-list/patient-list.component';

import { PatientService } from './services/patient/patient.service';
import { SearchPipePipe } from './search-pipe.pipe';
import { PatientlistModalComponent } from './components/patientlist-modal/patientlist-modal/patientlist-modal.component';
import { PatientInformationComponent } from './components/patient-information/patient-information/patient-information.component';

@NgModule(
  {
    declarations: 
    [
      AppComponent,
      HomeComponent,
      PatientListComponent,

      SearchPipePipe,
      PatientlistModalComponent,
      PatientInformationComponent
    ],
    imports: 
    [
      AppRoutingModule,
      BrowserModule,
      FormsModule // import
    ],
    providers: 
    [
      PatientService
    ],
    bootstrap: 
    [
      AppComponent
    ]
  }
)
export class AppModule { }