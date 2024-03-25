import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor {
  color: string;
  marker: Marker;
}

interface PlainMarker {
  color: string;
  lngLat: number[];
}

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css',
})
export class MarkersPageComponent {
  @ViewChild('map') divMap?: ElementRef;
  public zoom: number = 10;
  public map?: Map;
  public currentLgnLat: LngLat = new LngLat(-65, -35);
  public markers: MarkerAndColor[] = [];

  ngAfterViewInit(): void {
    console.log(this.divMap);
    if (!this.divMap) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLgnLat, // starting position [lng, lat]
      zoom: 10, // starting zoom
    });

    this.readFromLocalStorage();
    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Luciano Bertero';
    const marker = new Marker({
      // color: 'red',
      // element: markerHtml,
    })
      .setLngLat(this.currentLgnLat)
      .addTo(this.map);
  }

  addmarker(lngLat: LngLat, color: string) {
    if (!this.map) return;
    const marker = new Marker({
      color: color,
      draggable: true,
    })
      .setLngLat(lngLat)
      .addTo(this.map);

    this.markers.push({
      color,
      marker,
    });

    this.saveToLocalStorage();

    marker.on('dragend', () => {
      this.saveToLocalStorage();
    });
  }

  createMarker() {
    if (!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const lgnLat = this.map.getCenter();
    this.addmarker(lgnLat, color);
  }

  deleteMarker(index: number) {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }

  flyTo(marker: Marker) {
    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat(),
    });
  }

  saveToLocalStorage() {
    const plainMarker: PlainMarker[] = this.markers.map(({ color, marker }) => {
      return {
        color,
        lngLat: marker.getLngLat().toArray(),
      };
    });
    console.log(plainMarker);
    localStorage.setItem('plainMarkers', JSON.stringify(plainMarker));
  }

  readFromLocalStorage() {
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString);

    plainMarkers.forEach(({ color, lngLat }) => {
      const coord = new LngLat(lngLat[0], lngLat[1]);
      this.addmarker(coord, color);
    });
  }
}
