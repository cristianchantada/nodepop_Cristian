"use strict";

const Anuncio = require("../models/Anuncio");
const User = require("../models/Users");
const connection = require("../lib/connectMongoose");
const anunciosJson = require("./anuncios.json");
const bcrypt = require('bcrypt');

async function initAnuncios(){
    const deleted = await Anuncio.deleteMany();
    
    console.log(`Se han borrado un total de ${deleted.deletedCount} ANUNCIOS`);
    
    const insert = anunciosJson.anuncios;
    
    await Anuncio.insertMany(insert);
    console.log(`Han sido insertados ${insert.length} ANUNCIOS en su colección.`);
    
    
}

async function initUsers() {
    const deleted = await User.deleteMany();
    console.log(`Se han borrado un total de ${deleted.deletedCount} USUARIOS`);
    const insert = anunciosJson.users;

    for(let i = 0; i< insert.length; i++){
        insert[i].password = await bcrypt.hash(insert[i].password, 5);
    }
    
    await User.insertMany(insert);
    
    console.log(`Han sido insertados ${insert.length} USUARIOS en su colección.`);
}

async function main (){
    await initAnuncios();
    await initUsers();
    connection.close();
}

main().catch(err => console.log("Ha habido un error en la inicialización de la BD", err));