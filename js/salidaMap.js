$("select").change(function(){
    var valorSeleccionado = $(this).val();
    switch(valorSeleccionado) {
        case "-33.044624, -71.612778":
            $(".salida-resultados").html("A un lado de la Facultad de Informatica de la PUCV.");
            break;
        case "-33.044542, -71.605786":
            $(".salida-resultados").html("Se encuentra frente al Jumbo, ubicada en Casa Central de la PUCV.");
            break;
        case "-33.044613, -71.615641":
            $(".salida-resultados").html("Frente al edificio de la Sede DUOC UC de Av. Brasil.");
            break;
        case "-33.046421, -71.619734":
            $(".salida-resultados").html("Al centro de la Plaza Victoria encontrara el punto verde.");
            break;
        case "-33.047912, -71.613814":
            $(".salida-resultados").html("AL centro del Parque Italia encontrara el punto verde");
            break;
        case "-33.050238, -71.610839":
            $(".salida-resultados").html("Frente al hospital Carlos van Buren.");
            break;
        case "-33.038675, -71.628730":
            $(".salida-resultados").html("Hacia el centro de la Plaza Sotomayor encontrara el punto verde.");
            break;
        default:
            $(".salida-resultados").html("Seleccione un punto de reciclaje");
            break;
      }
      
});
