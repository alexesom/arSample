const express = require('express');
const app = express();
const path = require('path');
const fileSystem = require('fs');
const root = path.dirname(require.main.filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/arjs/index', (req, res) => {
    res.render('index');
});

app.get('/arjs/box', (req, res) => {
    res.render('box');
});

app.get('/mindjs', (req, res) => {
    res.render('mindjs');
});

app.get('/zappar', (req, res) => {
    res.render('zappar');
});

app.get('/assets/waving.glb', function(request, response) {
    var filePath = path.join(__dirname, '/assets/waving.glb');
    var stat = fileSystem.statSync(filePath);

    response.writeHead(200, {
        'Content-Type': 'application/gltf-buffer',
        'Content-Length': stat.size
    });

    var readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(response);
});

app.get('/assets/scene.gltf', function(request, response) {
    var filePath = path.join(__dirname, '/spacesuit/scene.gltf');
    var stat = fileSystem.statSync(filePath);

    response.writeHead(200, {
        'Content-Type': 'application/gltf-buffer',
        'Content-Length': stat.size
    });

    var readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(response);
});

app.get('/assets/scene.bin', function(request, response) {
    var filePath = path.join(__dirname, '/spacesuit/scene.bin');
    var stat = fileSystem.statSync(filePath);

    response.writeHead(200, {
        'Content-Type': 'application/gltf-buffer',
        'Content-Length': stat.size
    });

    var readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(response);
});

app.get('/assets/textures/material_0_diffuse.png', function(request, response) {
    var filePath = path.join(__dirname, '/spacesuit/textures/material_0_diffuse.png');
    var stat = fileSystem.statSync(filePath);

    response.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': stat.size
    });

    var readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(response);
});


app.get('/assets/targets.mind', function(request, response) {
    var filePath = path.join(__dirname, '/targets.mind');
    var stat = fileSystem.statSync(filePath);

    response.writeHead(200, {
        'Content-Type': 'application/gltf-buffer',
        'Content-Length': stat.size
    });

    var readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(response);
});




app.listen(8080, () => {
    console.log("Listening on http://localhost:8080")
})