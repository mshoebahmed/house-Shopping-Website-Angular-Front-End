import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { GetHouseDataServiceService } from '../get-house-data-service.service';



@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {



  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>()

  selectedHouse: HousingLocation | undefined;

  constructor(private dataService: GetHouseDataServiceService) { }


  ngOnInit(): void {
    this.dataService.getApi().subscribe(array => {
      this.results = array.data;
    })
  }


  selectedHouseCondition: boolean = false
  searchHousingLocations(searchText: string): void {
    var paramObject = { "city": searchText };
    this.dataService.getApiByCityContaining(paramObject).subscribe(array => {
      this.results = array.data;
    })
    this.searchText = searchText;

  }

  searchText: string = '';

  selectHousingLocation(selectedHouse: HousingLocation) {
    this.selectedHouseCondition = true
    this.selectedHouse = selectedHouse;
    console.log(this.selectedHouse);

  }

  editDataObject: HousingLocation = {
    id: 0,
    name: " ",
    city: " ",
    state: " ",
    photo: new Blob(),
    availableUnits: 1,
    wifi: false,
    laundry: false
  };

  getEditData(param: HousingLocation) {
    this.selectedHouseCondition = false;
    this.editDataObject = param;

  }

  deleteData(param: HousingLocation) {
    let index: number = param.id;
    console.log(index);
    this.deleteApi(index);
    this.selectedHouseCondition = false;
    this.searchHousingLocations(this.searchText);

  }


  results: any = [];

  getRecords() {
    this.dataService.getApi().subscribe(array => {
      this.results = array.data;
    })
  }

  deleteApi(id: number) {
    var params = { "id": id }
    this.dataService.deleteApi(params).subscribe(array => {
      this.getRecords()
    }
    );
  }



}
