console.log("estableciendo conexion");
// obtener los valores del formulario


function validar_formulario(){
    var nombre = document.formRegistro.nombre; 
    var telefono = document.formRegistro.telefono;
    var correo = document.formRegistro.correo;
    var mensaje = document.formRegistro.mensaje;
    
    console.log(nombre.value.length,nombre.value,telefono.value,correo.value,mensaje.value);

    // extrictamente igual (===)
    if (nombre.value==="" || telefono.value ==="" || correo.value==="" || mensaje.value===""){
        alert("Todos los campos son obligatorios");
        // return;
    }

        console.log(nombre.value.length,nombre.value,telefono.value,correo.value,mensaje.value);

        // instrucciones
        if (((nombre.value.length)>1) && ((nombre.value.length)<=8)){
            alert("usuario valido");
            return true; 
        }else{
            alert("usuario no valido");    
            return false; 
        }  

        
}