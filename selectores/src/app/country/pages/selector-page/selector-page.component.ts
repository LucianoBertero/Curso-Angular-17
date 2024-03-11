import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: ``,
})
export class SelectorPageComponent implements OnInit {
  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    borders: ['', Validators.required],
  });

  public countriesByRegion: SmallCountry[] = [];

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    //Aca nos subscribimos a los cambios que hay en la region
    this.onRegionChanged();
  }

  get regions(): Region[] {
    return this.countryService.regions;
  }

  onRegionChanged(): void {
    this.myForm
      .get('region')!
      .valueChanges.pipe(
        switchMap((region) => this.countryService.getCountriesByRegion(region))
      )
      .subscribe((region) => {
        this.countriesByRegion = region;
      });
  }
}
