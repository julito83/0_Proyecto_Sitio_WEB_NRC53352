// evento submit
const datos = {
    nombre: "",
    telefono: "",
    correo: "",
    mensaje: ""
}

const nombre = document.querySelector("#nombre");
const telefono = document.querySelector("#telefono");
const correo = document.querySelector("#correo");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

console.log(datos);

nombre.addEventListener("input", leerTexto);
telefono.addEventListener("input", leerTexto);
correo.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

// El evento de submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    // validar el formulario
    //creando las variables para hacer la validacion - se extraen del objeto datos
    const {nombre, telefono, correo, mensaje} = datos; // Destructuring de objeto
    if (nombre === "" || telefono === "" || correo === "" || mensaje === ""){
        //funcion mensajeError
        mostrarAlerta("Todos los campos son obligatorios",true);
        return; // corta la ejecucion del codigo
    }else{
        // enviar el formulario
        mostrarAlerta("Datos enviados correctamente");

        //https://jsonplaceholder.typicode.com/guide/    
        fetch('http://localhost:4040/add', {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })
             .then((response) => response.json())
             .then((json) => console.log(json));
    }
});

function leerTexto(e){
    datos[e.target.id] = e.target.value;

    console.log(datos);
}

function mostrarAlerta(mensaje, error = null ){
    const alerta = document.createElement("p");
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add("error");
    }else{
        alerta.classList.add("correcto");
    }

    formulario.appendChild(alerta);
    // Desaparezca despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    },5000);
}
