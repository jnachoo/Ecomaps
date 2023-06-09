import { Component, AfterViewInit  } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.scss']
})
export class MapasComponent implements AfterViewInit  {
  private map: any;
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

  constructor(){}
  ngAfterViewInit(): void {
    this.initMap();
    
  }
}
