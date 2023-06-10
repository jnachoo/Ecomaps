import { Component, AfterViewInit  } from '@angular/core';
import * as L from 'leaflet';
import { MapaService } from 'src/app/services/mapa.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;


@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.scss']
})
export class MapasComponent implements AfterViewInit  {

  private map: any;

  constructor(private markerService:MapaService){}
  
  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makesMarkers(this.map);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ -33.045400, -71.612790 ],
      zoom: 16
    });
    //Agregar tilelAyer mapa base desde openstreetmap
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    tiles.addTo(this.map);
    
  }

  
  
}
