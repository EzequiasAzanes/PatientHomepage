import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../../../services/patient/patient.service';

@Component({
  selector: 'app-patient-information',
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.css']
})
export class PatientInformationComponent implements OnInit {
  public switchmenubottom = 'delivery';
  public showpatientInfo:any ;
  public showNo:any;  

  constructor(
    public route: Router,
    
    public patientService: PatientService   
  ) { }

  ngOnInit() {
     this.showpatientInfo =  this.patientService.selectedpatient ;
     this.showNo = this.patientService.patientNumber;
    console.log(this.patientService.selectedpatient);
  }

  clickReturnpatientLIst()
  {
    this.route.navigate(['patient-list']);
  }

  clickSwitchMenu(menu)
  {
    this.switchmenubottom = menu;
  }

  
  getAge(bdate): number{
    
    let bYear = new Date(bdate).getFullYear() + 1;
    let yearNow = new Date().getFullYear();
    return yearNow - bYear;
   
  }




}
