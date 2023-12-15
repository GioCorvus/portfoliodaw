console.log('Script cargado correctamente.'); // Buena praxis

// Andamio, carga de ficheros
let ficheros = ['entrada2.csv'];

ficheros.forEach((fichero) => {
  fetch(fichero)
    .then((respuesta) => {
      if (respuesta.ok) {
        return respuesta.text();
      } else {
        console.error(`El archivo ${fichero} no existe.`); // Aunque la consola ya nos muestra este error
        return null;
      }
    })
    .then((contenido) => {
      if (contenido !== null && contenido.trim() !== '') {
        // Si no es null, trabajo
        funcion1(contenido);
      } else {
        console.log('El archivo está vacío o no se pudo leer.');
      }
    });
});

function funcion1(entrada) {
  // Siempre es buena praxis tener un ctrl c ctrl v del "depurador" a mano, ¿no?
  // console.log(entrada)

  let array = entrada.split('\n');

  // Nos deshacemos de caracteres que no nos interesan
  array = array.map((element) => element.replace(/\r/g, ''));
  array = array.map((element) => element.replace(/"/g, ''));

  // Mi manera de trabajar es más sencilla si lo organizo todo por arrays. Un array bidimensional, donde cada array será: equipo, jugador
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].split(',');
  }

  console.log('Array con el que trabajo:');
  console.log(array);

  let equipos = {}; // Objeto para almacenar los equipos y jugadores

  for (let i = 0; i < array.length; i++) {
    if (array[i].length !== 2) {
      // Si el array no tiene exactamente dos elementos, lo omitimos
      continue;
    }

    let [equipo, jugador] = array[i];

    if (!equipos[equipo]) {
      equipos[equipo] = [];
    }
    equipos[equipo].push(jugador);
  }

  // Crear un objeto JSON con los resultados
  let resultadoJSON = JSON.stringify(equipos, null, 2);

  // Mostrar el resultado en formato JSON
  console.log(resultadoJSON);
}