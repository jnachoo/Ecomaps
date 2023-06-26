import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RutService } from 'rut-chileno'
import { matchpassword } from '../../validators/matchpasswords.validator';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  user: any;
  mostrarMensaje:boolean = false;
  region="0";
  
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

  formRegistro!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private rutService: RutService, 
    private router: Router, 
    private usuarioService:UsuarioService) {
    this.formRegistro = new FormGroup({
      nombre: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^[a-zA-ZáéñóúüÁÉÑÓÚÜ -]*$/)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      rut: new FormControl('', Validators.compose([
        Validators.required,
        this.rutService.validaRutForm
      ])),
      telefono: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(8)
      ])),
      fechaNac: new FormControl('', Validators.required),
      region: new FormControl('', Validators.required),
      comuna: new FormControl('', Validators.required),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/)
      ])),
      repassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)
      ])),
      tyc: new FormControl(false, Validators.required),
    },
    {
      validators:matchpassword
    })

  }

  ngOnInit(): void {
  }
  inputEvent(event : Event) {
    let rut = this.rutService.getRutChileForm(1, (event.target as HTMLInputElement).value)
    if (rut) this.formRegistro.controls['rut'].patchValue(rut, {emitEvent :false});
  }

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

  hola(){}
  // registrarse() {

  //   let user: Usuario ={
  //     email: this.formRegistro.value.email,
  //     nombre: this.formRegistro.value.nombre,
  //     rut: this.formRegistro.value.rut,
  //     telefono: this.formRegistro.value.telefono,
  //     fechaNac: this.formRegistro.value.fechaNac,
  //     region: this.formRegistro.value.region,
  //     comuna: this.formRegistro.value.comuna,
  //     contrasenya: this.formRegistro.value.password,
  //     idTipo: 1
  //   }

  //   //console.log(user.comuna)

  //   this.registro.registro(user).subscribe(res =>{
  //     let largo = Object.keys(res).length;
  //     if(largo == 1){
  //       this.user = res.valueOf();
  //       localStorage.setItem('usuario', JSON.stringify(this.user));
  //       this.router.navigate(['perfil'])
  //     }else{
  //       this.mostrarMensaje=true;
  //     }
  //   }, error => console.log(error)
  //   )
    
  //   /*
  //   if (this.formRegistro.status === 'VALID') {
  //     this.formRegistro.removeControl('repassword');
  //     this.formRegistro.removeControl('tyc');
  //     this.usuarioService.postUsuario(this.formRegistro.value).subscribe(data => {
  //       console.log(data)
  //     });
  //     this.router.navigate(['sesion'])
  //   }*/
  // }
}
