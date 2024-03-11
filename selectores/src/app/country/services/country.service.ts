import { Injectable } from '@angular/core';
import {
  Country,
  Region,
  SmallCountry,
} from '../interfaces/country.interfaces';
import { Observable, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseUrl: string = 'https://restcountries.com/v3.1';
  private _region: Region[] = [
    Region.Africa,
    Region.Americas,
    Region.Asia,
    Region.Europa,
    Region.Oceania,
  ];
  constructor(private hhtp: HttpClient) {}

  get regions(): Region[] {
    return [...this._region];
  }

  getCountriesByRegion(region: Region): Observable<SmallCountry[]> {
    if (!region) return of([]);

    const url = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`;
    return this.hhtp.get<Country[]>(url).pipe(
      map((countries) =>
        countries.map((country) => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? [],
        }))
      ),
      tap((resp) => console.log(resp))
    );
  }
}
