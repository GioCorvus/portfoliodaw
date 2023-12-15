/*SERGIO ACOSTA PORTOCARRERO 

ANALISIS

Tengo un archivo de entrada csv. 
Formato:
    "madrid","cristiano"
    "madrid","este"
    "madrid","aquel"
    "madrid","nomegustaelfutbol"

    TAREA 1 -> fc bacerlona: messi, este, aquel
               real madrid: cristiano, sergio, el otro
               tenerife: tanausu

    TAREA 2 -> Array [FC BARCELONA[Messi, este, aquel]]
                     [real madrid[cristiano,sergio,el otro]]

    TAREA 3 -> Formato JSON
*/

console.log('Script cargado correctamente.') //buena praxis


//andamio, carga de ficheros

let ficheros = ['entrada1.csv']

ficheros.forEach(fichero => {
    fetch(fichero)
        .then(respuesta => {
            if (respuesta.ok) {
                return respuesta.text();
            } else {
                console.error("El archivo ${fichero} no existe."); //aunque la consola ya nos muestra este error
                return null;
            }
        })
        .then(contenido => {
            if (contenido !== null && contenido.trim() !== '') {
                // si no es null, trabajo
                funcion1(contenido);
            } else {
                console.log("El archivo está vacío o no se pudo leer.");
            }
        });
});

function funcion1(entrada){

    //siempre es buena praxis tener un ctrl c ctrl v del "depurador" a mano, ¿no?
    //console.log(entrada) 

    let array=entrada.split('\n')

    //nos deshacemos de caracteres que no nos interesan
    array = array.map(element => element.replace(/\r/g, ''))
    array = array.map(element => element.replace(/"/g, ''))
    
    //mi manera de trabajar es más sencilla si lo organizo todo por arrays. un array bidimensional, donde cada array sera: equipo, jugador
    for(let i=0;i<array.length;i++){
        array[i]=array[i].split(',')
    }
    
    console.log("Array con el que trabajo:" )
    console.log(array)

    let primero; //primer equipo que iremos cambiando cuando no sea igual al de la iteracion

    for (let i = 0; i < array.length; i++) {
        if (array[i].length !== 2) {
            // Si el array no tiene exactamente dos elementos, lo omitimos
            continue;
        }
    
        let [equipo, jugador] = array[i];
    
        if (!primero) {
            primero = {}
        }
    
        if (!primero[equipo]) {  
            primero[equipo] = [];
        }
        primero[equipo].push(jugador);
    }

    // visualizo el formato del cliente
    for (let equipo in primero) {
        let jugadores = primero[equipo].join(', ');
        console.log(`${equipo}: ${jugadores}`);
    }
}
