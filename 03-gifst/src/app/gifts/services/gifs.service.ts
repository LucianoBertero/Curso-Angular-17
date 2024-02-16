import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifts.interface';



@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifsList:Gif[]=[]
  private _tagsHistory:string[]=[];
  private APY_KEY='8meAsMHobFBh6AAqMABhba0DtWOCfGIB'
  private serviceUrl:string='https://api.giphy.com/v1/gifs'
  constructor(private http:HttpClient) {
    this.loadLocalStorage()
  }


  get tagsHistory(){
    return [...this._tagsHistory];
  }


  searchTag(tag:string):void{
    if(tag.length===0){
      return
    }
    this.organizaHistory(tag)

    const params=new HttpParams()
    .set('api_key',this.APY_KEY)
    .set('limit',10)
    .set('q',tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params}).subscribe((res)=>{

      this.gifsList=res.data
      console.log(this.gifsList);
    })


  }

  private organizaHistory(tag:string){
    tag=tag.toLocaleLowerCase();
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory=this._tagsHistory.filter((oldTag)=>oldTag!==tag)
    }
    this._tagsHistory.unshift(tag)
    this._tagsHistory=this.tagsHistory.splice(0,10)
    this.saveLocalStorage()

  }


  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify( this._tagsHistory))

  }

  private loadLocalStorage():void{

    if(!localStorage.getItem('history')){
      //no tenemos data
      return
    }

    this._tagsHistory= JSON.parse( localStorage.getItem('history')!)
    if(this._tagsHistory.length===0){
      return
    }
    this.searchTag(this._tagsHistory[0])
  }

}
