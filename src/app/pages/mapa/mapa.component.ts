import { Component} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.sass']
})
export class MapaComponent{

  map: any;

  constructor() {
  }

  public ngAfterViewInit(): void {
    this.loadMap();
  }

  private loadMap():void{
    let map = L.map('map').setView([-33.045400, -71.612790],16)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    document.getElementById('select-location')!.addEventListener('change', function(e: Event): void {
      let coords: any = (e.target as HTMLInputElement).value.split(",");
      map.flyTo(coords, 16);
  
      const greenIcon: L.Icon = L.icon({
          iconUrl: '../../../assets/images/centro-de-reciclaje.png',
          iconSize: [50, 50],
          iconAnchor: [50, 50],
      });
  
      const marker: L.Marker = L.marker(coords, { icon: greenIcon }).addTo(map);
  });
  }
  
}
