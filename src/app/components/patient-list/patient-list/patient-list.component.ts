import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../../../services/patient/patient.service';
import { PatientlistModalComponent } from '../../patientlist-modal/patientlist-modal/patientlist-modal.component';
import { angularMath } from 'angular-ts-math';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  providers: [
    PatientlistModalComponent
  ]
})
export class PatientListComponent implements OnInit {

 public selectedBranch: string = '';
 public useraccount = [];

 

public patientlist:any = [
  
{ no:'1',patientNo:'1', name:{ fname:'Nico',mname:'Medina',lname:'Adan' }
 ,bdate:'10-13-1997',age:'23' ,address: 'Poblacion Pamplona Cam. Sur',contact:'09090232' },

{ no:'2',patientNo:'2', name:{ fname:'Angelika',mname:'Fe',lname:'Moldes' } ,bdate:'9-16-1996',age:'', address: 'Naga City',contact:'09090232111'},
{ no:'3',patientNo:'3', name:{fname:'King',mname:'Low',lname:'Ezanies' } ,bdate:'5-27-1998',age:'12', address: 'Naga City America',contact:'090134341'},
{ no:'4',patientNo:'4', name:{fname:'Kobe',mname:'Bog',lname:'Bryan' }  ,bdate:'9-20-1990',age:'30', address: 'City America',contact:'091134341'},
{ no:'5',patientNo:'5', name:{fname:'Derrick',mname:'Yow',lname:'Rose' }  ,bdate:'1-20-1992',age:'26', address: 'Chicagow ',contact:'0922134341'},
{ no:'6',patientNo:'6', name:{fname:'James',mname:'Long',lname:'Lebron' } ,bdate:'9-19-1877',age:'24', address: 'Chicagow ',contact:'0922765751'}
];


newPatientInfo: any;
public patientNumber:any;
public patientnamesearch:string ;

    public keyword:string ;
    public styleselectedpatient:boolean=false;
    
    searchname()
    {
      this.keyword = this.patientnamesearch; 
      console.log(this.patientnamesearch);
    }
    selectedpatient()
    {
      this.styleselectedpatient = true;
    }

  constructor(
    public route: Router,

    public patientService: PatientService   
  ) { }

  ngOnInit() {


    this.selectedBranch = this.patientService.branch;
    this.patientService.loginaccount;
    console.log(this.selectedBranch);
    console.log(this.patientService.loginaccount);

    

  }


  public selected_patient: any;
  public detect:boolean = false; 
  public fromParent= {
    data: {},
    type:{},
    num: 0,
    patientNum:0,
    showModal: false
  };

  receiver(value)
  {
  this.fromParent.showModal = false;
  }

  viewmodal(selectedtype)
  {

  
    let count = 1;
    let prevnum = 0;
   
    for(let newNO of this.patientlist )
    {
      count ++ ;
    }


    this.fromParent = {
      data: this.selected_patient,
      type:selectedtype,
      num:count,
      patientNum:this.patientNumber,
      showModal:  true
    };
  
  }


  getPatient(object,i){
    this.selected_patient = object;
    this.patientService.selectedpatient = object;
      this.patientService.patientNumber = i;
    this.patientNumber = i;
     
  }

  SuccessAddPatient()
  {
    this.patientlist;
  }
    
  removePatient(patientNo)
  {
    let dataToDelete = 0, counter = 0;
    for( let patient of this.patientlist ){
      if( patient.patientNo == patientNo )
      {
        dataToDelete = counter;
      }
      counter++;
    }
    this.patientlist.splice( dataToDelete, 1 );

  }
  
  updatePatient( update )
  { 
   
    for(let patientEdit of this.patientlist )
    {
      if(patientEdit.patientNo == update.patientNo)
      {
        console.log('update',update);

       patientEdit = update;
      }
    }
  

  }


  getNewPatientInfo(val: any){
    this.newPatientInfo = Object.assign({}, val);
   this.patientlist.push(this.newPatientInfo);
//    console.log(this.getAge(this.newPatientInfo.bdate));
  }

  getAge(bdate): number{
    
    let bYear = new Date(bdate).getFullYear() + 1;
    let yearNow = new Date().getFullYear();
    return yearNow - bYear;
   
  }


  clickPatientButton()
  {
    this.route.navigate(['patient-information']);
  }




 
}
