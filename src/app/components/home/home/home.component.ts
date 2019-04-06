import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PatientService } from '../../../services/patient/patient.service';
//var ucfirst = require('ucfirst');
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  public switch:boolean = false;
  public SelectedBranch:any = [
    { viewbranchname: '',
    viewnews:"",
    viewimage:''}
  ]; 

  public registeraccount = [
    { id: '1', username: 'adan', password: 'password' },
    { id: '2', username: 'angelika', password: '123' },
    { id: '3', username: 'aaaa', password: 'aaaa' }
   ];

  public branchList:any = [
    { id: '1', branchname: 'Naga Branch Express', news: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et iaculis magna. Aenean condimentum blandit sapien vestibulum pulvinar. Proin tellus magna, vehicula at interdum ac, vehicula eget ante. Cras urna mauris, dignissim a tempus sit amet, lobortis et nisi. Quisque purus lacus, ullamcorper ac arcu in, aliquet dictum erat. Integer ut tincidunt est, eu egestas quam. Curabitur a sem in risus malesuada euismod ac vitae elit. Sed sit amet dignissim augue, nec tempor nisi. Morbi nec tortor neque. Proin condimentum quam mi, vitae lacinia ipsum maximus in. Nam at fringilla felis. Sed facilisis nisl neque, non varius odio sagittis nec. In tincidunt blandit hendrerit. Morbi eget pulvinar massa, ut bibendum ligula." , image:'assets/images/palawan.jpg'},
    { id: '2', branchname: 'Mcdonalds', news: "2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting r",image:'assets/images/slidemcdo.jpg' },
    { id: '3', branchname: 'Bob Marley',news: "3Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, r" ,image:'assets/images/slidebobmarley.jpg'},
    { id: '4', branchname: 'LBC', news: "4Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, r" ,image:'assets/images/slidelbc.jpg'}
   ];
   



   
  constructor(
    
    public route: Router,
    public patientService: PatientService 
   
  ) { }

  
  ngOnInit() {

  
  }



  viewBranch(branchname)
  {
 
    this.SelectedBranch.viewbranchname = branchname;
    this.patientService.branch = this.SelectedBranch.viewbranchname;

    for(let branch of this.branchList)
    {
        if(branch.branchname == this.SelectedBranch.viewbranchname )
        {
          this.SelectedBranch.viewnews = branch.news;
          this.SelectedBranch.viewimage = branch.image;
          this.switch = true;  
        }
    }

  }
  


   public inputaccount =  {
    inputusername: '',
    inputpassword: ''
   };

   public isValid:boolean  ;

   public error = {
    class: '',
    message: ''
   };
   public usernameoutput:string = '';

  
   checkaccount()
   {
     let foundusername = false;
     let foundpassword;
     let foundbranch;
     for( let account of this.registeraccount)
     {
      if(this.inputaccount.inputusername == '')
      {
        console.log('mayo  username');
      }
      else if(this.inputaccount.inputpassword == '')
      {
console.log('mayo password');
      }
      else if(this.inputaccount.inputpassword == '' && this.inputaccount.inputusername == '')
      {
console.log('mayo pare');
      }
      
        if(account.username == this.inputaccount.inputusername )
        {
          foundusername = true;

          if(account.password == this.inputaccount.inputpassword)
          {
            if(this.SelectedBranch.viewbranchname == 'None' )
            {
             foundbranch = false ;
             }  
           else{
            foundpassword = true;
            this.usernameoutput = account.username;
            this.patientService.loginaccount = account.id;
        
            this.route.navigate(['patient-list']);
           }
          }

        }


    

     }

     if(foundusername == true)
     {
         this.isValid == true;
          if(foundpassword == true)
          { 
            this.error.message = 'You are logged in ! ';
            this.isValid == true;
           
          }
          else
          {
            this.isValid == false;
            this.error.message = 'Invalid Password';
            this.error.class ='alert alert-danger';
          }
      
     }
     else{
      this.isValid == false;
      this.error.message = 'Username not registered';

      this.error.class ='alert alert-danger';
     }

    if(foundbranch == false)
    {
      this.error.message = 'Select Your Branch ! ';
      this.error.class ='alert alert-danger';
            this.isValid == true;
    }

     // Services 


   

   }

}
