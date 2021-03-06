import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employ } from '../employ';
import { EmployService } from '../employ.service';

@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css']
})
export class EmployComponent implements OnInit {

  employ : Employ;
  isValid : boolean;
  isFormSubmitted : boolean;
  msg : string;
 

   insert(employForm : NgForm) {
    if(employForm.invalid){
      return;
      
    }
    this.isFormSubmitted = true;
    this.isValid=true;
    if (this.isValid==true) {
      this._employservice.addEmploy(this.employ).subscribe
      (x => {
        this.msg = x;
      })
     // this.msg="Form Submitted Successfully...";
    }
    
  }
  constructor(private _employservice : EmployService) {
    this.isValid=false;
    this.employ=new Employ();
    this.isFormSubmitted=false;
   }

  ngOnInit(): void {
  }

}
