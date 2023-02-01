import { Component, OnInit } from '@angular/core';
import {  FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { RestService } from 'src/app/shared/rest.service';

@Component({
  selector: 'labSeq',
  templateUrl: './labSeq.component.html',
  styleUrls: ['./labSeq.component.css']
})

export class LabSeqComponent  {
  val: any = [];
  inputVal = new FormControl('');
  
 

  onSubmit(): void {
  
   this.restService.GetIssue(this.inputVal.value).subscribe((data: {}) => {
    this.val = data;
    console.log(this.val.result);
  })
   
  }
  
  constructor(public restService: RestService){}
}

