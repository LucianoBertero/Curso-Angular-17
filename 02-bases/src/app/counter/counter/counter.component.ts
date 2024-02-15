import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public counter:number = 10;
  constructor() { }

  ngOnInit() {
  }
  public increseBy(numero:number):void{
    this.counter+=numero
  }
  public decreseBy(numero:number):void{
    this.counter-=numero
  }

  public reset(){
    this.counter = 10;
  }

}
