import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapLayoutComponent } from './layout/map-layout/map-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

(mapboxgl as any).accessToken =
  'pk.eyJ1IjoidmluY3VsYXRlMjAyMyIsImEiOiJjbGozeHcwMjgxcGhlM3BvNXUyemtscmRnIn0.Llv6f-dldgq_tzFV5ckjMg';
@NgModule({
  declarations: [
    MiniMapComponent,
    SideMenuComponent,
    MapLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent,
  ],
  imports: [CommonModule, MapsRoutingModule],
})
export class MapsModule {}
