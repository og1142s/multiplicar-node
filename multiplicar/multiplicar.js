//requires
const fs = require('fs');



let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número!!`);
            return;
        }

        if (!Number(limite)) {
            reject('El valor introducido ${limite} no es un numero!');
        }

        for (let i = 1; i <= limite; i++) {

            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        reject(console.log(data));

    });

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject(`'El valor introducido ${ base } no es un número!'`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${base * i}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}