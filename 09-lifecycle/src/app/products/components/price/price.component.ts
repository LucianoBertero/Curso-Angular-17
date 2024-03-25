import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  input,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'product-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css',
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  public interval$?: Subscription;
  ngOnDestroy(): void {
    console.log('Componente Hijo ngOnDestroy');
    this.interval$?.unsubscribe();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente Hijo ngOnChanges');
    console.log({ changes });
  }
  ngOnInit(): void {
    console.log('Componente Hijo ngOnInit');

    this.interval$ = interval(1000).subscribe((value) => {
      console.log(`Ticks, ${value}`);
    });
  }
  @Input() price: number = 0;
}
