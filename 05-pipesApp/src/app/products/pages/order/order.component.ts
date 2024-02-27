import { Component } from '@angular/core';
import { Color, Hero } from '../../interface/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase:boolean=false
  public heroes:Hero[]=[{
    name:'Superman',
    canFly:true,
    color:Color.blue
  },
  {
    name:'Batman',
    canFly:false,
    color:Color.black
  },
  {
    name:'Daredevil',
    canFly:false,
    color:Color.red
  },
  {
    name:'Robin',
    canFly:false,
    color:Color.green
  }]

  public orderBy?:keyof Hero



  toggleUperCase():void{
    this.isUpperCase=!this.isUpperCase

  }



changeOrder(value:keyof Hero):void{
  console.log(value);
  this.orderBy=value

}



}
