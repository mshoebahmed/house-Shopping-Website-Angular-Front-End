import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';;
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError,debounceTime } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetHouseDataServiceService {

  list: HousingLocation[] = [];
  apiCall?: Observable<HousingLocation[]>;


  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getApi(): Observable<any> {
    return this.http.get<any>("http://localhost:7000/api/searchHouse")
  }

  getApiById(param: any): Observable<any> {
    return this.http.get<any>("http://localhost:7000/api/searchHouseById",param)
  }

  deleteApi(param:any ): Observable<any> {
    return this.http.get<any>("http://localhost:7000/api/deleteHouse?id="+param.id)
  }

  addApi(param:HousingLocation): Observable<any> {
    return  this.http.post<HousingLocation>("http://localhost:7000/api/addHouse", param, this.httpOptions)
  }

  getApiByCityContaining(params:any): Observable<any> {
    return this.http.get<any>("http://localhost:7000/api/searchHouseByCity?city="+params.city);
  }



}
