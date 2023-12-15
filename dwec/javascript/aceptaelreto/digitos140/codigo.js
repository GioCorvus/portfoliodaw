/* ANALISIS
-1er valor de entrada: numero de saltos

*/

// Andamio para resolver problemas de Acepta el Reto

console.log('Script cargado correctamente.')

let ficheros = ['entrada.txt']

// Carga de ficheros de datos de entrada
ficheros.forEach( fichero => {
	fetch(fichero)	//Carga el ficherito
		.then(respuesta => respuesta.text())	//Saca el texto
		.then(funcion1)		//pasa el texto a funcion1
})

function funcion1(entrada){
    //console.log(typeof entrada)
    //console.log(entrada)

//parseo
    let columnas= entrada.split('\n')
    columnas = columnas.map(element => element.replace(/\r/g, ''));
    for(let i=0; i<columnas.length;i++){
        columnas[i] = columnas[i].split(' ')
    }

    for(let i=0; i<columnas.length;i++){
        for(let j=0; j<columnas[i].length;j++){
            columnas[i][j]=Number.parseInt(columnas[i][j])
            //console.log(typeof columnas[i][j])
        }
    }

    //programacion

    for(let i=0;i<columnas.length;i++){
        let inicio= columnas[i][0]
        let arriba=0;
        let abajo=0;
        for(let j=0;j<columnas[i].length;j++){
            if(inicio<columnas[i][j]){
                arriba++;
                inicio=columnas[i][j]
            }
            else if(inicio>columnas[i][j]){
                abajo++;
                inicio=columnas[i][j]
            }
            else{
                //no se suma
            }
        }
        console.log(arriba, abajo)

    }

    //console.log(columnas)
}