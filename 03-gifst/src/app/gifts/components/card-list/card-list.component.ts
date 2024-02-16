import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifts.interface';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
@Input()
public gifs:Gif[]=[]




}
