import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibilityoffers',
  templateUrl: './eligibilityoffers.component.html',
  styleUrls: ['./eligibilityoffers.component.css']
})
export class EligibilityoffersComponent implements OnInit {
  
  optionValue:string='';
  
  constructor() { }
  

  func(value: String){
     this.optionValue = value.toString();
  }




  ngOnInit(): void {
  }

}
