import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { angularMath } from 'angular-ts-math';
declare var $:any;
@Component({
  selector: 'app-patientlist-modal',
  templateUrl: './patientlist-modal.component.html',
  styleUrls: ['./patientlist-modal.component.css']
})
export class PatientlistModalComponent implements OnInit,OnChanges {
  @Input() object: any;

  @Output() fromChild  = new EventEmitter();

  @Output() addedNewPatient = new EventEmitter();
  @Output() deletedPatient = new EventEmitter();
  @Output() editedPatient = new EventEmitter();
  public modaltype:any = '';
  public randomnum: any;

  public switch:any ;

  newPatient = {
    no:'',
    patientNo:'',
    name: {
      fname: '',
      lname: '',
      mname: ''
    },
    bdate: '',
    age:'',
    address: '',
    contact: ''
  }

  constructor() { 
 
    this.fromChild.emit();
  }



  ngOnChanges(){
  
    this.checkValue();

    console.log("patientlist-modal: onChanges", this.object);
  }

  ngOnInit() {

    this.randomnum =  angularMath.getIntegerRandomRange(1001,8000);

    /*$('#patientListInfo').on('hidden.bs.modal',()=>{
      this.emitValue(false);
    });*/

    
  }
  
 


  
  checkValue(){
    if(this.object.type == 'patientInfo'){

      if(this.object.showModal){
      this.modaltype = this.object.type;
      this.switch = 1;
        $('#patientInfo').modal('show');
      }
    }
    else if(this.object.type == 'addPatient'){
        this.switch = 2;
      this.modaltype = this.object.type;
      
        $('#addPatient').modal('show');

    }
    else if(this.object.type == 'deletePatient'){
      this.switch = 3;
      this.modaltype = this.object.type;
        $('#deletePatient').modal('show');
    }
    else if(this.object.type == 'editPatient'){
      this.switch = 4;
      this.modaltype = this.object.type;
        $('#editPatient').modal('show');
    }

  }

  addNewPatient(){
    this.addedNewPatient.emit(this.newPatient);
    
    $('#addPatient').modal('hide');
    this.newPatient = {
      no:'',
      patientNo:'',
      name: {
        fname: '',
        lname: '',
        mname: ''
      },
      bdate: '',
      age:'',
      address: '',
      contact: ''
    }
  
  }

  selecteddeletePatient(val)
  {
    this.deletedPatient.emit(val);

    $('#deletePatient').modal('hide');
    confirm("Successfully Deleted Patient");
    console.log(val);

    
  }

  editPatient()
  {
    this.editedPatient.emit(this.object.data);
    $('#editPatient').modal('hide');
  
  }

  emitValue(bool: boolean){
    this.fromChild.emit(bool); 
    console.log(this.fromChild);
   
  }


}
