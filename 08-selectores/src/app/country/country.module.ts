import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { CountryRountingModule } from './country-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectorPageComponent],
  imports: [CommonModule, CountryRountingModule, ReactiveFormsModule],
})
export class CountryModule {}
