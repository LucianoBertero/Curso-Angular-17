import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { filter, switchMap, tap } from 'rxjs';

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
  public borders: SmallCountry[] = [];

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    //Aca nos subscribimos a los cambios que hay en la region
    this.onRegionChanged();
    this.onCountryChanged();
  }

  get regions(): Region[] {
    return this.countryService.regions;
  }

  onRegionChanged(): void {
    if (this.myForm) {
      const countryControl = this.myForm.get('country');
      if (countryControl) {
        this.myForm
          .get('region')!
          .valueChanges.pipe(
            tap(() => countryControl.setValue('')),
            switchMap((region) =>
              this.countryService.getCountriesByRegion(region)
            )
          )
          .subscribe((region) => {
            this.countriesByRegion = region;
          });
      }
    }
  }

  // getCountryByAlphaCode
  onCountryChanged(): void {
    this.myForm
      .get('country')!
      .valueChanges.pipe(
        tap(() => this.myForm.get('borders')!.setValue('')),
        filter((value: string) => value.length > 0),
        switchMap((alphaCode) =>
          this.countryService.getCountryByAlphaCode(alphaCode)
        ),
        switchMap((country) =>
          this.countryService.getCountryBordersByCodes(country.borders)
        )
      )
      .subscribe((countries) => {
        this.borders = countries;
        console.log(
          '🚀 ~ SelectorPageComponent ~ .subscribe ~ this.borders:',
          this.borders
        );
        console.log(this.borders);
      });
  }
}
