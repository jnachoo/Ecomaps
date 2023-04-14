$(document).ready(function(){

    $(".needs-validation").validate({
        errorClass: "is-invalid",
        validClass: "is-valid",

        // reglas del formulario
        rules:{

            nombre:{
                required: true,
                minlength: 8
            },

            email:{
                required: true,
                email: true
            },

            rut:{
                required: true,
                minlength: 10
            },

            telefono:{
                required: true,
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
                minlength: 8
            },

            recontrasenya:{
                required: true,
                minlength: 8
            }
        },

        messages:{
            nombre:{
                required: "El nombre es requerido",
                minlength: "El nombre debe tener un mínimo de 8 carácteres"
            },

            email:{
                required: "El correo electrónico es requerido",
                email: "El formato no es correcto"
            },

            rut:{
                required: "El rut es requerido",
                minlength: "El rut debe tener un mínimo de 10 carácteres"
            },

            telefono:{
                required: "El teléfono es requerido",
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
                minlength: "La contraseña debe tener un mínimo de 8 carácteres"
            },

            recontrasenya:{
                required: "La confirmación de la contraseña es requerida",
                minlength: "La contraseña debe tener un mínimo de 8 carácteres"
            }
        }
    });
});