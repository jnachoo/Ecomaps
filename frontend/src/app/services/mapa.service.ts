import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MapaService {

  // Json file
  JsonURL: string = 'assets/json/coordenadas.json'
  
  constructor(private http: HttpClient) {}
  
  //Devuelve JSon
  public getJson():Observable<any>{
    return this.http.get(this.JsonURL);
 }

  // Funcion que crea los marcadores
  public makesMarkers(map: L.Map): void {
    this.http.get(this.JsonURL).subscribe((res : any) => {
      for(const c of res){
        const lat = c.Latitud;
        const long = c.Longitud;
        L.marker([lat,long]).addTo(map);
      }

    });
  }
}
