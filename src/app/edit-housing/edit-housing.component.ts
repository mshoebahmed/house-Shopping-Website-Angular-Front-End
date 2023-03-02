import { Component, OnInit, Input, Output } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { GetHouseDataServiceService } from '../get-house-data-service.service';
import { HousingListComponent } from '../housing-list/housing-list.component';


@Component({
  selector: 'app-edit-housing',
  templateUrl: './edit-housing.component.html',
  styleUrls: ['./edit-housing.component.css']
})

export class EditHousingComponent implements OnInit {



  constructor(private dataService: GetHouseDataServiceService, private listComponent: HousingListComponent) {

  }

  ngOnInit(): void {
    this.clearForm()
  }

  @Input()
  editObject: HousingLocation = {
    id: 0,
    name: "",
    city: "",
    state: "",
    photo: new Blob(),
    availableUnits: 1,
    wifi: false,
    laundry: false
  };



  inputType: boolean = false;

  checkIndex(): boolean {

    if (this.getApiById(this.editObject.id) == "Found Record") {
      return this.inputType = true
    } else {
      return this.inputType = false;
    }
  }

  addHouse() {

    const file: Blob = this.editObject.photo;


    this.editObject.photo = file;


    this.addApi(this.editObject);
    this.clearForm();
  }

  addApi(param: HousingLocation) {
    this.dataService.addApi(param).subscribe(array => {

    }
    );
  }

  getApiById(param: number): any {
    var paramObject = { "id": param };
    var result: any;
    this.dataService.getApiById(paramObject).subscribe(array => {

      result = array.status;
      return result;

    }
    );
  }


  clearForm() {
    this.editObject = {
      id: 0,
      name: " ",
      city: " ",
      state: " ",
      photo: new Blob(),
      availableUnits: 1,
      wifi: false,
      laundry: false
    };

    this.inputType = false;

    this.listComponent.getRecords();
  }




}
