import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HosuingDetailsComponent } from './hosuing-details/hosuing-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditHousingComponent } from './edit-housing/edit-housing.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HousingListComponent,
    HosuingDetailsComponent,
    EditHousingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule ,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
