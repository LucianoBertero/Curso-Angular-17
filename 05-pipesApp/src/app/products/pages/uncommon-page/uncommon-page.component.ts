import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  public name:string='Fernando'
  public gender:'male'|'female'='male'
  public invitationMap={
    'male':'invitarlo',
    'female':'invitarla'
  }






  changeClient():void{
    this.name='Melisssa'
    this.gender='female'
  }


  public clients:string[]=['Maria','Pedro','Luciano','Eduardo','Martin']
  public clientsMap={
    '=0':'no ningun cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos dos clientes esperando.',
    '=3':'tenemos tres clientes esperando.',
    'other':'tenemos # clientes esperando'
  }

  deleteClient(){
this.clients.shift()
  }



  public person={
    name:'Fernando',
    age:36,
    address:'Otawwa,Canada',
  }


  public myObservableTimer:Observable<number>=interval(2000).pipe(
    tap( value=>console.log(value))


  )


  public promiseValue:Promise<string>=new Promise((resolve,rejeact)=>{
    setTimeout(()=>{
      resolve('tenemos data de la promesa.')
    },3500)
  })


}
