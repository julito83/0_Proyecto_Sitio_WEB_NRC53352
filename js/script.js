console.log('Conexion.........');

function runApiConsultarId(){
    const id = document.querySelector("#id").value;
        fetch(`http://localhost:4040/contactos/${id}`, {
        method: 'GET',
        // body: JSON.stringify(datos),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })
         .then((response) => response.json())
         .then((json) => {
            console.log(json);
            const id = document.getElementById("numid");
            const nombre = document.getElementById("nombre");
            const telefono = document.getElementById("telefono");
            const correo = document.getElementById("correo");
            const mensaje = document.getElementById("mensaje");

            id.innerHTML = json[0].id;
            nombre.innerHTML = json[0].nombre;
            telefono.innerHTML = json[0].telefono;
            correo.innerHTML = json[0].email;
            mensaje.innerHTML = json[0].mensaje;
        });
};

function runApiModificarId(){
   
    const actid = document.querySelector("#actid").value;
    console.log(actid);
    const act = {
        nombre : document.getElementById("actnombre").value,
        telefono : parseInt(document.getElementById("acttelefono").value)
    }
    console.log(act.nombre, act.telefono);
    fetch(`http://localhost:4040/act/${actid}`, {
        method: 'PUT',
        body: JSON.stringify(act),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {console.log(json);});
};


function runApiEliminarId(){
    
    const elimiid = document.querySelector("#elimid").value;
    console.log(elimiid);
    //funcion definida para pedir información, transferirla del front-end al back-end
    fetch(`http://localhost:4040/delete/${elimiid}`, {
        method: 'DELETE',
        // body: JSON.stringify(act),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {console.log(json);});
}


