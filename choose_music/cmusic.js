'use strict';
const fs = require('fs');
module.exports = class CMusic{
    constructor(musiclocation)
    {
        this.musiclocation = musiclocation;
        
    }
    musicList(callback){
        fs.readdir(this.musiclocation,(err,files) => {
            let musiclist = [];
            files.forEach(file => {
                musiclist.push(file);
            });
            callback(musiclist);
        });
    }

}