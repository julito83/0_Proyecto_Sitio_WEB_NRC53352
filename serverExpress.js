const express = require('express');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 4040;

// app.use(express.urlencoded());
app.use(express.json());

const connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root', 
    password: '',
    database: 'freelancer'
});

connection.connect(error => {
    if(error) throw error;
    console.log('Conexion a la base datos exitosa');
})

app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/imgs', express.static('imgs'));

app.get('/', function(req, res){
    res.sendFile('index.html',
    {
        root: __dirname
    });
});

app.get('/crud', function(req, res){
  res.sendFile('crud.html',
  {
      root: __dirname
  });
});


app.listen(port, function(){
    console.log(`Ya esta funcionando el servidor puerto ${port}`);
});

// Creamos los Middelware para el CRUD
// Leer

//MySQL CRUD  endpoint
// leer
app.get('/contactos',(req, res) =>{
    const sql = 'SELECT * FROM contactos';
  
    connection.query(sql, (error, results)=>{
      if(error) throw error;
      if(results.length > 0){
        res.json(results);
      }else{
        res.send('Sin resultados');
      }
    });
});

app.get('/contactos/:id',(req, res) =>{

    const {id} = req.params;
    const sql = `SELECT * FROM contactos WHERE id = ${id}`;
  
    connection.query(sql, (error, results)=>{
      if(error) throw error;
      if(results.length > 0){
        res.json(results);
      }else{
        res.send('Sin resultados');
      }
    });
});

// Crear registros
app.post('/add',(req, res) =>{
    const sql = `INSERT INTO contactos SET ?`;
    const datos = {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        email: req.body.correo,
        mensaje: req.body.mensaje
    };
    connection.query(sql, datos, error =>{
      if(error) throw error;
      res.send('Regitros creado');   
    });
});

// Actualizar
app.put('/act/:id',(req, res) =>{
    const {id} = req.params;
    const {nombre, telefono} = req.body;
    const sql = `UPDATE contactos set nombre = '${nombre}', telefono = '${telefono}' WHERE id = ${id}`;
    console.log(sql);
    connection.query(sql, error =>{
      if(error) throw error;
      res.send('Registro actualizado');   
    });
});
// eliminar
app.delete('/delete/:id',(req, res) =>{
    const {id} = req.params;
    const sql = `DELETE FROM contactos WHERE id = ${id}`;
    connection.query(sql, error =>{
      if(error) throw error;
      res.send("Registro eliminado");
    });
  });



