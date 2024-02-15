import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string='iron Man'
  public age:number=45

  get capitalazedName(){
    return this.name.toUpperCase()
  }

  get HeroDescription():string{
    return `${this.name} tiene ${this.age} años`
  }


  changeHero():void{
    this.name='Spiderman'
    console.log("entro");
  }

  changeAge():void{
    this.age=30
  }

  resetForm():void{
    this.name='iron man'
    this.age=45

  }
}
