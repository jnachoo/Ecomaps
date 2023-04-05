const formRegistro = document.getElementById("formRegistro")

var nombre=formRegistro.elements[0]
var ciudad=formRegistro.elements[5]
var comuna=formRegistro.elements[6]


formRegistro.addEventListener("submit", function(event){
    retornar_datos();
    event.preventDefault();
})

function retornar_datos(){
    console.log(nombre.value)
    console.log(ciudad.value)
    console.log(comuna.value)
}