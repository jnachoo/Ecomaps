$(document).ready(function(){
    $(".needs-validation").validate({
        errorClass: "is-invalid",
        validClass: "isvalid",

        rules:{
            email:{
                required: true,
                email: true
            },

            contrasenya:{
                required: true,
                minlength: 8
            }
        },

        messages:{
            email:{
                required: "El correo electrónico es requerido",
                email: "El formato no es el correcto"
            },

            contrasenya:{
                required: "La contraseña es requerida",
                minlength: "La contraseña debe tener un mínimo de 8 carácteres"
            }
        }
    });
});