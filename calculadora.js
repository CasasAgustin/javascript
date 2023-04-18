//entrad de datos 
// let altura = parseFloat(prompt("ingresa tu estatura"));
// let peso = parseFloat(prompt("ingresa tu peso gordito"))

// //proceso de datos 
// let imc = peso / (altura * altura);
// let mensaje = " ";

// //validar imc 
// if (imc < 18.5) {
//     mensaje = "Peso iferior al normal";
// }else if (imc >= 18.5 && imc <= 24.9) {
//     mensaje = "Normal"
// }else if (imc >= 25 && imc <=29.9){
//     mensaje = "Tas gordito"
// }else {
//     mensaje = "Gordo teton"
// }

// //salida 
// alert("Tu imc es: " + imc + "%" + " " + mensaje);
// //alert("tu condicion de salud es: " + mensaje)


// alert ("Bienvenidos al rincon del bartender ")
// alert("Proximamente tendremos la opcion para que compres todas tus herramietas")
// alert("Registrate para que cuando este todo listo podamos avisarte!")

// function edad (){
//    let edad = prompt("ingresa tu edad")
//     if (edad > "18"){
//         alert("Puendes entrar ");
//     }
//     else if (edad < 18) 
//        alert ("No puedes accerder al sitio");
//     }
    
// edad();

// function registrarse (){
//      let nombre = prompt ( "ingresa tu nombre de usuario");
//      let password = prompt("ingrese su contraseña")
//     alert("hola" + " " + nombre + "!" + " " + "gracias por registrarte")
    
//    }

//    registrarse();



 const usuario = []

function cargarUsuario (cargar)
{
    let i = 0 ;
    let seguir;

    do { 
        cargar[i] = prompt("ingresa tu nombre");
        cargar[i] = parseFloat(prompt("ingresa tu edad"));
        cargar[i] = prompt("ingresa tu genero");
        seguir = prompt("has terminado? si/no")
        i++;
     }while (seguir ==='no')
}

function mostrarUsuario (cargar)
{
    for( let i = 0 ; i < cargar.length ; i++) {
        console.log(`cargar[${i}]:${cargar[i]}`);
}
}

cargarUsuario(usuario);