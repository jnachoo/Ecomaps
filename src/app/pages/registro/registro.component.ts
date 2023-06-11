import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RutService } from 'rut-chileno'
import { matchpassword } from '../../validators/matchpasswords.validator';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

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

  constructor(private formBuilder: FormBuilder, private rutService: RutService, private router: Router) {
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
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)
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
    var nombre: HTMLSelectElement = document.getElementById("nombre") as HTMLSelectElement;
    var email: HTMLSelectElement = document.getElementById("email") as HTMLSelectElement;
    var rut1: HTMLSelectElement = document.getElementById("rut") as HTMLSelectElement;
    var telefono: HTMLSelectElement = document.getElementById("telefono") as HTMLSelectElement;
    var fechaNacimiento: HTMLSelectElement = document.getElementById("fechaNacimiento") as HTMLSelectElement;
    var comuna: HTMLSelectElement = document.getElementById("comuna") as HTMLSelectElement;
    var contrasenya: HTMLSelectElement = document.getElementById("contrasenya") as HTMLSelectElement;
    console.log(rut1)
    console.log(nombre.value)
    console.log(telefono.value)
    console.log(email.value)
    console.log(comuna.value)
    console.log(contrasenya.value)
    if (rut)
      this.formRegistro.controls['rut'].patchValue(rut, {emitEvent :false});
  }

  buscar_comunas(){
    var region: HTMLSelectElement = document.getElementById("region") as HTMLSelectElement;
    console.log(region.value)
    

    if (region.value != "0") {
        var comunas:any;
        if(region.value == "1") comunas = this.comunas_1;
        if(region.value == "2") comunas = this.comunas_2;
        if(region.value == "3") comunas = this.comunas_3;
        if(region.value == "4") comunas = this.comunas_4;
        if(region.value == "5") comunas = this.comunas_5;
        if(region.value == "6") comunas = this.comunas_6;
        if(region.value == "7") comunas = this.comunas_7;
        if(region.value == "8") comunas = this.comunas_8;
        if(region.value == "9") comunas = this.comunas_9;
        if(region.value == "10") comunas = this.comunas_10;
        if(region.value == "11") comunas = this.comunas_11;
        if(region.value == "12") comunas = this.comunas_12;
        if(region.value == "13") comunas = this.comunas_13;
        if(region.value == "14") comunas = this.comunas_14;
        if(region.value == "15") comunas = this.comunas_15;
        if(region.value == "16") comunas = this.comunas_16;
        var comuna: HTMLSelectElement = document.getElementById("comuna") as HTMLSelectElement;
        if(comuna.length>1){
          while(comuna.length>1){
            comuna.remove(comuna.length-1);
          }
        }
        for(let i=0;i < comunas.length; i++) {
            var opcion = document.createElement("option");
            opcion.text = comunas[i];
            opcion.value = region.value.concat(i.toString());
            comuna.add(opcion);
        }
    }
  }
  rut:string='';
  guardarDatos() {
    var nombre: HTMLSelectElement = document.getElementById("nombre") as HTMLSelectElement;
    var email: HTMLSelectElement = document.getElementById("email") as HTMLSelectElement;
    var rutt: HTMLSelectElement = document.getElementById("rut") as HTMLSelectElement;
    var telefono: HTMLSelectElement = document.getElementById("telefono") as HTMLSelectElement;
    var region: HTMLSelectElement = document.getElementById("region") as HTMLSelectElement;
    var comuna: HTMLSelectElement = document.getElementById("comuna") as HTMLSelectElement;
    var contrasenya: HTMLSelectElement = document.getElementById("contrasenya") as HTMLSelectElement;
    var recontrasenya: HTMLSelectElement = document.getElementById("recontrasenya") as HTMLSelectElement;

    const datos = {
      nombre: nombre.value,
      email: email.value,
      rut: rutt.value,
      telefono: telefono.value,
      //fechaNacimiento: this.fechaNacimiento,
      region: region.value,
      comuna: comuna.value,
      contrasenya: contrasenya.value,
      recontrasenya: recontrasenya.value,
    };

    const blob = new Blob([JSON.stringify(datos, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'datos.json';
    a.click();

    URL.revokeObjectURL(url);
  }
  registrarse() {
    console.log(this.formRegistro.status);
    if (this.formRegistro.status === 'VALID') {
      this.router.navigate(['/inicioSesion'])
    }
  }

}

