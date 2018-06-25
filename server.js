const express = require('express');
const app = express();
const port = 3000;
var path = require('path');
const cmusic = require('./choose_music/cmusic');
var shell = require('shelljs');
var cors = require('cors');
const bodyParser = require("body-parser");
app.use(cors())
app.use(bodyParser.urlencoded())
app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
const music = new cmusic("database");

app.get('/api/musicLists',(req,res) =>{
    res.setHeader('Content-Type', 'application/json');
    music.musicList(lists=>{
        res.send(JSON.stringify(lists));
    })
});
app.use('/', express.static('dist'));
app.use('/', express.static(path.join(__dirname, 'dist')));

app.get('*', function(req, res){
res.sendFile(__dirname , '/dist/index.html');
});

app.post('/api/playmusic',(req,res)=>{
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const musicname = req.body.musicname;
    playmusic(musicname);
});
app.listen(port,'0.0.0.0',() => {
    console.log("service is running on port " ,
    `${port}`);
});

let playmusic = (songname) => {
    let music = "database/"+songname;

    shell.exec('vlc ' + music);
}
