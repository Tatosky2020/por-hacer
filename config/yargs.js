const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea'
    }
}

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};



const argv = require('yargs')
    .command('crear', 'Crear tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza estado de tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion
    })

.help()
    .argv;

module.exports = {
    argv
}