const express = require('express');
const app = express();
const port = 4040;

app.use(express.urlencoded());
app.use(express.json());

// app.post('/registro' , function(req, res){
//     res.send(`Bienvenido Sr. ${req.body.user}`);
// });

app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/imgs', express.static('imgs'));



app.get('/', function(req, res){
    res.sendFile('index.html',
    {
        root: __dirname
    });
});


app.listen(port, function(){
    console.log(`Ya esta funcionando el servidor puerto ${port}`);
});