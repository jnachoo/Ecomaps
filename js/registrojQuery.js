$(document).ready(function(){

    $(".needs-validation").validate({
        errorClass: "is-invalid",
        validClass: "is-valid",

        // reglas del formulario
        rules:{

            nombre:{
                required: true,
                formatoNombre: true
            },

            email:{
                required: true,
                email: true
            },

            rut:{
                required: true,
                formatoRUT: true,
                minlength: 10
            },

            telefono:{
                required: true,
                minlength: 9,
                digits: true
            },

            fechaNac:{
                required: true,
            },

            region:{
                required: true,
            },

            comuna:{
                required: true,
            },

            contrasenya:{
                required: true,
                pwcheck: true,
                minlength: 8
            },

            recontrasenya:{
                required: true,
                pwcheck: true,
                minlength: 8,
                equalTo: "#contrasenya"
            },

            tyc:{
                required: true
            }
        },

        messages:{
            nombre:{
                required: "El nombre es requerido",
                formatoNombre: "El formato no es el correcto"
            },

            email:{
                required: "El correo electrónico es requerido",
                email: "El formato no es correcto"
            },

            rut:{
                required: "El rut es requerido",
                formatoRUT: "El formato debe ser 00.000.000-0",
                minlength: "El rut debe tener un mínimo de 10 carácteres"
            },

            telefono:{
                required: "El teléfono es requerido",
                rangelength: "El telefono debe tener 9 dígitos",
                digits: "El teléfono solo debe contener dígitos"
            },

            fechaNac:{
                required: "La fecha de nacimiento es requerida",
            },

            region:{
                required: "La región es requerida",
            },

            comuna:{
                required: "La comuna es requerida",
            },

            contrasenya:{
                required: "La contraseña es requerida",
                pwcheck: "La contraseña no tiene un formato válido",
                minlength: "La contraseña debe tener un mínimo de 8 carácteres"
            },

            recontrasenya:{
                required: "La confirmación de la contraseña es requerida",
                pwcheck: "La contraseña no tiene un formato válido",
                minlength: "La contraseña debe tener un mínimo de 8 carácteres",
                equalTo: "La contraseña no es la misma"
            },

            tyc: {
                required: "Debe aceptar términos y condiciones"
            }
        }
    });

    // Método que valida que el nombre tenga solo letras, espacios y puntos
    $.validator.addMethod("formatoNombre", function(nombre){
        var caracteres=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z','á','Á','é','É','í','Í','ó','Ó','ú','Ú','ü','Ü',' ','.']
        if(nombre.length>0){
            for(i=0; i<nombre.length; i++){
                var bandera=false;
                for(j=0; j<caracteres.length; j++){
                    if(nombre.charAt(i)==caracteres[j]){
                        bandera=true;
                        break;
                    }
                }
                if(!bandera) return false
            }
            return true;
        }
    });

    // Método que valida el formato de la contraseña
    $.validator.addMethod("pwcheck",function(value) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(value);
    });

    // Método que valida el formato del rut
    $.validator.addMethod("formatoRUT", function(rutCompleto){
        var tmpstr = "";
        var intlargo = rutCompleto
        if (intlargo.length> 0)
        {
            var crut = rutCompleto
            var largo = crut.length;

            for ( i=0; i <crut.length ; i++ )
            if ( crut.charAt(i) != ' ' && crut.charAt(i) != '.' && crut.charAt(i) != '-' )
            {
                tmpstr = tmpstr + crut.charAt(i);
            }
            rut = tmpstr;
            crut=tmpstr;
            largo = crut.length;
     
            if ( largo> 2 )
                rut = crut.substring(0, largo - 1);
            else
                rut = crut.charAt(0);
     
            dv = crut.charAt(largo-1);
     
            if ( rut == null || dv == null )
            return 0;
     
            var dvr = '0';
            suma = 0;
            mul  = 2;
     
            for (i= rut.length-1 ; i>= 0; i--)
            {
                suma = suma + rut.charAt(i) * mul;
                if (mul == 7)
                    mul = 2;
                else
                    mul++;
            }
     
            res = suma % 11;
            if (res==1)
                dvr = 'k';
            else if (res==0)
                dvr = '0';
            else
            {
                dvi = 11-res;
                dvr = dvi + "";
            }
     
            if ( dvr != dv.toLowerCase() )
            {
                return false;
            }
            return true;
        }


    });

});