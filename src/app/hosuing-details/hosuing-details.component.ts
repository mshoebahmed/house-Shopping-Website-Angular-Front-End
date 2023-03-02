import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-hosuing-details',
  templateUrl: './hosuing-details.component.html',
  styleUrls: ['./hosuing-details.component.css']
})
export class HosuingDetailsComponent implements OnInit {

  constructor() { }

  @Input()
  houseDetails: any


  ngOnInit(): void {
  }
  
  @Output() editObject = new EventEmitter<HousingLocation>();
  @Output() deleteObject = new EventEmitter<HousingLocation>();
  
  


editDetails(){
  this.editObject.emit(this.houseDetails); debugger
}

deleteDetails(){
  this.deleteObject.emit(this.houseDetails);
}



}
