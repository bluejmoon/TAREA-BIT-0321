let usuario, password, edad;
usuario = prompt("ingrese su usuario");
password = parseInt(prompt ("Ingrese la contraseña"));
edad = parseInt(prompt("ingrese su edad)"));
const usuarioreal = valentina123;
const passwordreal = 12345;

function verificacion (edad){
    if (edad >= 18) {
        return alert("Tienes acceso al catalogo de licores");
    }
    else {
        return alert("Debes ser mayor de 18 años para acceder al catalogo");
    }
  }

console.log(usuario, password, edad);
verificacion ()

if (usuario === usuarioreal && password===passwordreal){
    alert("ingreso exitoso")
}

else if (usuario != usuarioreal || password != passwordreal){
    alert("Usuario o clave incorrectas, intente de nuevo")
    usuario = prompt("ingrese su usuario");
    password = parseInt(prompt ("Ingrese la contraseña"));}