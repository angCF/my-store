const express = require('express');
const routerApi = require('./routes');

const app= express();
const port = 4200;

app.get('/', (request,response)=>{
    response.send('Hola desde ExpressJS');
});

app.get('/nueva-ruta', (request,response)=>{
    response.send('Hola soy un nuevo endpoint');
});

routerApi (app);

app.listen(port, () =>{
    console.log('Escuchando por el puerto ' + port)
});