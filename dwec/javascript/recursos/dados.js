/* 1. ANÁLIIS
 * Datos de Entrada: 
 * 	dado1: Number
 * 	dado2: Number
 * Datos de Salida:
 * 	masProbables: [Number]
 * 	menosProbables: [Number]
*/

/* 2. EJEMPLOS
 * Ejemplo1:
 * 	dado1: 4
 * 	dado2: 6
 *
 * 	masProbables: 5, 6, 7
 * 	menosProbable: 2, 10
 * Ejemplo2:
 * 	dado1: 5
 * 	dado2: 10
 *
 * 	masProbables: 6, 7, 8, 9, 10, 11
 * 	menosProbable: 2, 15
*/

/* 3. ANDAMIO */

/* 4. PARSEO */

/* 5. RESOLVER CADA EJEMPLO */



// Andamio para resolver problemas de Acepta el Reto

console.log('Script cargado correctamente.')

//let ficheros = ['d1.txt', 'd2.txt', 'd3.txt']
let ficheros = ['d3.txt']
//
// Carga de ficheros de datos de entrada
ficheros.forEach( fichero => {
	fetch(fichero)	//Carga el ficherito
		.then(respuesta => respuesta.text())	//Saca el texto
		.then(funcion1)		//pasa el texto a funcion1
})

function funcion1(entrada){
	console.log(entrada)

	if (!entrada) throw 'El fichero está vacío.'

	// Parseo
	let trozos = entrada.split(',')
	console.log(trozos)
	let dado1 = Number.parseInt(trozos[0])
	//let dado2 = Number.parseInt(trozos[1])
	let dado2 = +trozos[1]

	console.log(dado1, dado2)

	//Resolución Directa
	/*
	 * 1. Creo una matriz de dado1xdado2
	 * 2. Relleno la matriz con la suma de fila + columna
	 * 3. Busco los valores que más salen en la matriz (¿?)
	 * 4. Busco los valores que salen menos en la matriz (¿?)
	 */

	let matriz = []
	for (let i = 0; i < dado1; i++){
		matriz[i] = []
		for (let j = 0; j < dado2; j++)
			matriz[i][j] = i + j + 2
	}
	console.log(matriz)

	let masProbables = []
	let masVeces = 0
	let menosProbables = []
	let menosVeces = dado1 * dado2
	for (let i = 2; i <= dado1 + dado2; i++){
		let contador = 0
		for (let j = 0; j < matriz.length; j++)
			for (let k = 0; k < matriz[j].length; k++){
				if (matriz[j][k] === i)
					contador++
			}
		if (contador === masVeces)
			masProbables.push(i)
		if (contador > masVeces){
			masProbables = [i]
			masVeces = contador
		}
		if (contador === menosVeces)
			menosProbables.push(i)
		if (contador < menosVeces){
			menosProbables = [i]
			menosVeces = contador
		}
	}
	console.log(masProbables.join(', '))
	console.log(menosProbables.join(', '))

}