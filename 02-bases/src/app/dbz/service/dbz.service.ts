import { Injectable } from '@angular/core';
import { Character } from '../intefaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters:Character[]=[{
    id:uuid(),
    name:'Goku',
    power:10000
  },
  { id:uuid(),
    name:'Vegeta',
    power:9000
  },
  { id:uuid(),
    name:'Krillin',
    power:10000
  }]




  addCharacter(character:Character){
    const newCharacter={
      id:uuid(),...character
    }
    this.characters.push(newCharacter);

  }

  deleteCaracterById(index:string){
    console.log(index);
    //el nuevo arreglo de character va a incluir todos menos al que sea igual al index mandado
    this.characters=this.characters.filter(character=>character.id!==index);

  }

}
