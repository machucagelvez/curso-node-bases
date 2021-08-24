const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')

console.clear()

// const [ , , arg3 = 'base=5'] = process.argv
// //El split me entrega un array, en este caso de dos elementos.
// //Se hace desestructuración y se toma el segundo elemento:
// const [ , base=5] = arg3.split('=')

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.bgGreen, 'creado'.bgGreen))
    .catch(err => console.log(err))
