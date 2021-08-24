
const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
        },
        'h':{
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Límite superior de la tabla'
        }
    })
    .check((argv, options) => {
        if(isNaN(argv.b) || isNaN(argv.h)) {
            throw 'La base y el límite deben ser números'
        }
        return true
    })
    .argv

    module.exports = argv