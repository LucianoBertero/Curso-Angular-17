import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'product-product-page',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy
{
  public isProductVisible: boolean = false;
  public currenPrice: number = 10;

  constructor() {}

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
    // Agrega aquí tu lógica personalizada para realizar comprobaciones específicas
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngOnInit(): void {
    console.log('OnInit');
  }

  increasePrice() {
    this.currenPrice++;
  }
}
