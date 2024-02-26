import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.ts';
import { cacheStore } from '../interfaces/cache-store.interface.js';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountryService {

  private url:string ='https://restcountries.com/v3.1'
  public cacheStore:cacheStore={
    byCapital:{term:'',countries:[]},
    byCountries:{term:'',countries:[]},
    byRegion:{region:'',countries:[]}
  }

  private getCountryRequest(url:string):Observable<Country[]>{
    return this.http.get<Country[]>(url).pipe(
      catchError(error=>of([]))
    )
  }

  constructor(private http: HttpClient) {
    this.loadFormLocalStorage()
  }

  private saveToLocalStorage(){
    localStorage.setItem('cacheStore',JSON.stringify( this.cacheStore))
  }

  private loadFormLocalStorage(){
    if(!localStorage.getItem('cacheStore'))return
    this.cacheStore=JSON.parse(localStorage.getItem('cacheStore')!)
  }



  searchCountryByAlphaCode(term:string):Observable<Country |null>{
    return this.http.get<Country[]>(`${this.url}/alpha/${term}`).pipe(
      map(countries=>countries.length > 0 ? countries[0]: null),
      catchError(error=>of(null))
    )
  }

  searchCapital(term:string):Observable<Country[]>{
    const url=`${this.url}/capital/${term}`
    return this.getCountryRequest(url)
            .pipe(
              tap(countries=>this.cacheStore.byCapital={term:term,countries}),
              tap(()=>this.saveToLocalStorage()),
            )

  }

  searchCountry(term:string):Observable<Country[]>{
    const url=`${this.url}/name/${term}`
    return this.getCountryRequest(url)
    .pipe(
      tap(countries=>this.cacheStore.byCountries={term:term,countries}),
      tap(()=>this.saveToLocalStorage()),
    )

  }
  searchRegion(term:Region):Observable<Country[]>{
    const url=`${this.url}/region/${term}`
    return this.getCountryRequest(url)
    .pipe(
      tap(countries=>this.cacheStore.byRegion={region:term,countries})
      , tap(()=>this.saveToLocalStorage()),
    )

  }






}
