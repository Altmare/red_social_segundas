const express = require('express');
const app = express();
const puerto = 80;
const UsuariosController = require('./controllers/UsuariosController');
const PublicacionesController = require('./controllers/PublicacionesController');
const AmigosController = require('./controllers/AmigosController');
const ComentariosController = require('./controllers/ComentariosController');
const LikesController = require('./controllers/LikesController');


app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('¡Prueba 123456789012!');
});

app.get('/usuarios', UsuariosController.indexGet);
app.get('/usuarios/:id([0-9]+)', UsuariosController.itemGet);
app.post('/usuarios', UsuariosController.indexPost);
app.put('/usuarios/:id([0-9]+)', UsuariosController.itemPut);
app.patch('/usuarios/:id([0-9]+)', UsuariosController.itemPatch);

app.get('/publicaciones', PublicacionesController.indexGet);
app.get('/publicaciones/:id([0-9]+)', PublicacionesController.itemGet);
app.post('/publicaciones', PublicacionesController.indexPost);
app.put('/publicaciones/:id([0-9]+)', PublicacionesController.itemPut);
app.patch('/publicaciones/:id([0-9]+)', PublicacionesController.itemPatch);

app.get('/likes', LikesController.indexGet);
app.get('/likes/:id([0-9]+)', LikesController.itemGet);
app.post('/likes', LikesController.indexPost);
app.put('/likes/:id([0-9]+)', LikesController.itemPut);
app.patch('/likes/:id([0-9]+)', LikesController.itemPatch);

app.get('/comentarios', ComentariosController.indexGet);
app.get('/comentarios/:id([0-9]+)', ComentariosController.itemGet);
app.post('/comentarios', ComentariosController.indexPost);
app.put('/comentarios/:id([0-9]+)', ComentariosController.itemPut);
app.patch('/comentarios/:id([0-9]+)', ComentariosController.itemPatch);

app.get('/amigos', AmigosController.indexGet);
app.get('/amigos/:id([0-9]+)', AmigosController.itemGet);
app.post('/amigos', AmigosController.indexPost);
app.put('/amigos/:id([0-9]+)', AmigosController.itemPut);
app.patch('/amigos/:id([0-9]+)', AmigosController.itemPatch);

app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});