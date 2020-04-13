const fs = require('fs');

let listadoPorHacer = [];

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch {
        listadoPorHacer = [];
    }
}

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);
    let directorio = 'db';
    let fname = 'data.json';

    // crear dir si no existe
    fs.mkdir(directorio, { recursive: true }, (err) => {
        if (err) throw err;
    });

    fs.writeFile(directorio + '/' + fname, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
        console.log(`El archivo ${fname} ha sido creado`);
    });

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();
    return porHacer;
}

const getListado = () => {

    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let indice = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (indice >= 0) {
        listadoPorHacer[indice].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();
    let indice = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (indice >= 0) {
        listadoPorHacer.splice(indice, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}



module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}