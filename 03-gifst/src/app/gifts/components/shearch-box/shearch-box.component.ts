import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './shearch-box.component.html',
  styleUrl: './shearch-box.component.css'
})
export class ShearchBoxComponent {
@ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

  constructor(private gifsService:GifsService) { }


  searchTag() {
    const newTagg=this.tagInput.nativeElement.value;
    console.log(newTagg);
    this.gifsService.searchTag(newTagg);
    this.tagInput.nativeElement.value='';
  }

}
