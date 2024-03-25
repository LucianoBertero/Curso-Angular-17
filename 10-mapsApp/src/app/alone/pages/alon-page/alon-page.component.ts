import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'app-alon-page',
  standalone: true,
  imports: [CommonModule, CounterAloneComponent, SideMenuComponent],
  templateUrl: './alon-page.component.html',
  styleUrl: './alon-page.component.css',
})
export class AlonPageComponent {}
