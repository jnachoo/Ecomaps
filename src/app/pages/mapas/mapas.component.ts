import { Component, AfterViewInit  } from '@angular/core';
import * as L from 'leaflet';
import { MapaService } from 'src/app/services/mapa.service';

//L.Icon.Default.prototype.options.iconUrl = 'src/assets/images/centro-de-reciclaje.png';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'src/assets/images/centro-de-reciclaje.png';
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
  public id:any;
  public datos:any;

  constructor(private mapaService:MapaService){}
  
  ngAfterViewInit(): void {
    this.initMap();
    this.mapaService.makesMarkers(this.map);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ -33.045400, -71.612790 ],
      zoom: 15
    });
    //Agregar tilelAyer mapa base desde openstreetmap
    const tiles = L.tileLayer('https:{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: '&copy; <a href="https:www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    tiles.addTo(this.map);
    
  }

  buscar_punto(evento:any){
    this.id=evento
    this.mapaService.getJson().subscribe(data=>{
      const lat = data[this.id-1].Latitud;
      const long = data[this.id-1].Longitud;
      this.map.flyTo([lat,long],18);
      this.datos=data[this.id-1].descripcion;
    });
  }

  
}
