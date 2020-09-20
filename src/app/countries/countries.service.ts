import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private endpoint = "https://restcountries.eu/rest/v2";
  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.endpoint);
  }

}
