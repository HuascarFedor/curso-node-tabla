const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {
    try{
        let salidaConsola = "";
        let salidaArchivo = "";
        for(let i = 1; i <= hasta; i++){
            salidaConsola += `${ base } ${ 'x'.green } ${ i } ${'='.red} ${ base * i }\n`;
            salidaArchivo += `${ base } x ${ i } = ${ base * i }\n`;
        }
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salidaArchivo);
        if( listar ){
            console.log("***********************".yellow);
            console.log("Tabla del: ".green, colors.green(base));
            console.log("***********************".yellow);
            console.log(salidaConsola);
        }
        return `tabla del ${ base } creada`;
    }
    catch(error){
        throw error;
    }
    /*fs.writeFile( `tabla-${ base }.txt`, salida, (err) => {
        if (err) throw err;
        console.log(`tabla del ${ base } creada`);
    } );*/
}

module.exports = {
    crearArchivo
}