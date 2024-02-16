import { Component } from '@angular/core';
import { Character } from '../intefaces/character.interface';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent  {

  constructor(private dbzService:DbzService) {}

   get character():Character[]{
      return[... this.dbzService.characters];
   }


   onDeletedCharacter(id:string):void{
    this.dbzService.deleteCaracterById(id);
   }


   onNewCharacter(character:Character):void{
    this.dbzService.addCharacter(character);
   }
}
