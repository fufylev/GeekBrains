const express = require('express');
const ansi = require('ansi');
const fs = require('fs');
const cursor = ansi(process.stdout);

fs.readFile('./name.json', 'utf8', (err, data) => {
    if(err){
        console.log("Ошибка чтения файла");
    } else {
        cursor
            .blue()
            .write(data)
            .reset()
            .write('\n');
    }
});