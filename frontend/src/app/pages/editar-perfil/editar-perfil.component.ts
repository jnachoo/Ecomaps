import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import {  FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent {
  user: any;
  formEditarUsuario!: FormGroup;
  region="0";
  error_id:any;

  constructor(
    private usuarioService:UsuarioService,
    private router:Router) {
  }
  ngOnInit(): void {
    this.formEditarUsuario = new FormGroup({
      nombre: new FormControl('', Validators.compose([
        Validators.pattern(/^[a-zA-ZáéñóúüÁÉÑÓÚÜ -]*$/)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.email
      ])),
      telefono: new FormControl('', Validators.compose([
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(8)
      ])),
      region: new FormControl('', Validators.required),
      comuna: new FormControl('', Validators.required)})

    const data = localStorage.getItem("userData");
    if (data!=null){
      this.user=JSON.parse(data);
    }
  }

  comunas_1 = new Array("Arica", "Camarones", "Putre", "General Lagos");
  comunas_2 = new Array("Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica");
  comunas_3 = new Array("Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena");
  comunas_4 = new Array("Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco");
  comunas_5 = new Array("La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado");
  comunas_6 = new Array("Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana");
  comunas_7 = new Array("Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "Santiago", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor");
  comunas_8 = new Array("Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz");
  comunas_9 = new Array("Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas");
  comunas_10 = new Array("Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás");
  comunas_11 = new Array("Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío");
  comunas_12 = new Array("Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria");
  comunas_13 = new Array("Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno");
  comunas_14 = new Array("Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena");
  comunas_15 = new Array("Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez");
  comunas_16 = new Array("Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine");

  buscar_comunas(){    
    if (this.region != "0") {
        var comunas = ["\0"];
        if(this.region == "Arica y Parinacota") comunas = this.comunas_1;
        if(this.region == "Tarapaca") comunas = this.comunas_2;
        if(this.region == "Antofagasta") comunas = this.comunas_3;
        if(this.region == "Atacama") comunas = this.comunas_4;
        if(this.region == "Coquimbo") comunas = this.comunas_5;
        if(this.region == "Valparaiso") comunas = this.comunas_6;
        if(this.region == "Metropolitana") comunas = this.comunas_7;
        if(this.region == "Libertador Bernardo O'Higgins") comunas = this.comunas_8;
        if(this.region == "Maule") comunas = this.comunas_9;
        if(this.region == "Ñuble") comunas = this.comunas_10;
        if(this.region == "Biobio") comunas = this.comunas_11;
        if(this.region == "Araucania") comunas = this.comunas_12;
        if(this.region == "Los Rios") comunas = this.comunas_13;
        if(this.region == "Los Lagos") comunas = this.comunas_14;
        if(this.region == "Aisen del Gral. Carlos Ibáñez del Campo") comunas = this.comunas_15;
        if(this.region == "Magallanes") comunas = this.comunas_16;

        var comuna: HTMLSelectElement = document.getElementById("comuna") as HTMLSelectElement;
        
        if(comuna.length>1){
          while(comuna.length>1){
            comuna.remove(comuna.length-1);
          }
        }
        
        for(let i=0;i < comunas.length; i++) {
            var opcion = document.createElement("option");
            opcion.text = comunas[i];
            opcion.value = comunas[i];
            comuna.add(opcion);
        }
    }
  }
  
  editarUsuario(){
    this.user
    if(this.formEditarUsuario.value.nombre==""){
      this.formEditarUsuario.value.nombre=this.user.nombre
    }
    if(this.formEditarUsuario.value.email==""){
      this.formEditarUsuario.value.email=this.user.email
    }
    if(this.formEditarUsuario.value.telefono==""){
      this.formEditarUsuario.value.telefono=this.user.telefono
    }
    if(this.formEditarUsuario.value.region=="0"){
      this.formEditarUsuario.value.region=this.user.region
    }
    if(this.formEditarUsuario.value.comuna==""){
      this.formEditarUsuario.value.comuna=this.user.comuna
    }
    this.usuarioService.editarUsuario(this.formEditarUsuario.value).subscribe(data =>{
      this.error_id=data.id;
      
    });  
    this.usuarioService.cerrarSesion();
  }
  volver(){
    this.router.navigate(['perfil']);
  }
}