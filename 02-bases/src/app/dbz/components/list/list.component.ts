import { Component, EventEmitter,OnInit, Input, Output } from '@angular/core';
import { Character } from '../../intefaces/character.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  public caracterList:Character[]=[{
    name:'Trunk',
    power:10000
  }]

@Output()
public onDeleteEmitter:EventEmitter<string>=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }





  onDeleteCharacter(id:string){

    this.onDeleteEmitter.emit(id);

    //EMITIR EL ID DEL PERSONAJE
  }

}
