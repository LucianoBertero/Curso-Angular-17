import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../intefaces/character.interface';
import { emit } from 'process';

@Component({
  selector: 'app-dbz-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Output()
 public onNewCharacter:EventEmitter<Character>=new EventEmitter();

  public character:Character={
    name:'',
    power:0
  }

  constructor() { }

  ngOnInit() {
  }


  emitCharacter(){

    console.log(this.character);


    if(this.character.name.length===0){
      return
    }
    this.onNewCharacter.emit(this.character);

    this.character={
      name:'',
      power:0
    }
  }

}
