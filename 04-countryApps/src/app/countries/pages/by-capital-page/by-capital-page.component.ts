import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.services';
import { Country } from '../../interfaces/country.ts';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit {
public countries:Country[]=[]
public isLoading:boolean=false
public initialValue:string=''
  constructor(private countryService:CountryService){

  }
  ngOnInit(): void {
    this.countries=this.countryService.cacheStore.byCapital.countries
    this.initialValue=this.countryService.cacheStore.byCapital.term
  }



  searchByCapital(term:string){
    this.isLoading=true
    this.countryService.searchCapital(term).subscribe((res)=>{

     this.countries=res
     this.isLoading=false

    })
  }

}
