import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../country';

@Component({
  selector: 'codehub-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries: Country[] = [];

  constructor(private countriesSvc: CountriesService) { 
  }

  ngOnInit() {
     this.countriesSvc.getCountries().subscribe(data => {
        this.countries = data;
    });
  }

}
