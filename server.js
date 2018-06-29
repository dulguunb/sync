const port = 3000;
const path = require('path');
const cmusic = require('./choose_music/cmusic');
const shell = require('shelljs');
const bodyParser = require('body-parser');
const music = new cmusic('database');

var express = require('express');
var app     = express();
var server  = app.listen(port,'0.0.0.0',() => {
            console.log("service is running on port " ,
            `${port}`);
            });
var io      = require('socket.io').listen(server);

app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.get('/api/musicLists',(req,res) =>{
    res.setHeader('Content-Type', 'application/json');
    music.musicList(lists => {
        res.send(JSON.stringify(lists));
    });
});
app.use('/', express.static('dist'));
app.use('/', express.static(path.join(__dirname, 'dist')));
app.get('*', function(req, res){
res.sendFile(__dirname , '/dist/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected' +  ' ' + socket.id);
});

app.post('/api/playmusic',(req,res) => {
    const musicname = req.body.musicname;
    playmusic(musicname);
});
app.get('/api/currentmusic',(req,res) => {
    playmusic(musicname);
});


let playmusic = (songname) => {
    let music = "database/"+songname;
    shell.exec('vlc ' + music);
}
