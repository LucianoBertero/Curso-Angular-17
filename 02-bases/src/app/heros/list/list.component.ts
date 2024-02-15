import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public deleteHero?: string = '';

  public heroName: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];

  removeLastHero() {
    const removedHero = this.heroName.pop();
    this.deleteHero = removedHero !== undefined ? removedHero : '';
  }
}
