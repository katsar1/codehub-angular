import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CountriesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    CountriesComponent
  ]
})
export class CountriesModule { }
