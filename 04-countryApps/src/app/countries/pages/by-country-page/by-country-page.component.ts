import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.services';
import { Country } from '../../interfaces/country.ts';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent  implements OnInit{

  public countrys:Country[]=[]
  public initialValue:string=''
  constructor(private countryService:CountryService){

  }
  ngOnInit(): void {
    this.countrys=this.countryService.cacheStore.byCountries.countries
    this.initialValue=this.countryService.cacheStore.byCountries.term
  }






  searchByCountry(term:string){
    this.countryService.searchCountry(term).subscribe((res)=>{
     this.countrys=res
    })
  }

}
