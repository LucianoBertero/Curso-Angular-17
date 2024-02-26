import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.services';
import { Country } from '../../interfaces/country.ts';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {
  public regions:Region[]=['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public countrys:Country[]=[]
  public selectedRegion?:Region

  constructor(private countryService:CountryService){
    this.countrys=this.countryService.cacheStore.byRegion.countries
    this.selectedRegion=this.countryService.cacheStore.byRegion.region
  }
  ngOnInit(): void {

  }
    searchByRegion(term:Region){
      this.selectedRegion=term;
    this.countryService.searchRegion(term).subscribe((res)=>{
     this.countrys=res
    })
  }


}
