import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  // Json file
  baseUrl: string = 'assets/json/coordenadas.json'
  
  constructor(private http: HttpClient) {}


  // Function to create markers
  public makesMarkers(map: L.Map): void {
    this.http.get(this.baseUrl).subscribe((res : any) => {

      
      for(const c of res){
        const lat = c.Latitud;
        const long = c.Longitud;
        console.log(lat, long)
        const marker = L.marker([lat,long]).addTo(map);
      }

    });
  }
}
