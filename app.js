const argv = require('./configuration/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
var colors = require('colors');

let comando = argv._[0];
switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(console.log(`Se ha listado la tabla con base ${argv.base} con limite ${argv.limite}.`.green))
            .catch(e => console.log(e))
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido'.red);

}