import { Component, OnInit } from '@angular/core';
import { CaruselService } from 'src/app/services/carusel.service';
import { Carusel } from 'src/app/interfaces/carusel';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  datos:Array<Carusel>=[];
  constructor(private ServicioCarusel:CaruselService, sanitizer: DomSanitizer) {}
  
  ngOnInit(): void {
    this.ServicioCarusel.getJSON().subscribe(data=>{
        for(let i=0;i<data.length;i++)
          this.datos.push(data[i]);
        

     });
  }
}
