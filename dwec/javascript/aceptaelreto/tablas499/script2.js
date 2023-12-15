function aplicarModificaciones(matriz, modificaciones) {
  for (const mod of modificaciones) {
      const [colIdx, rowStart, rowEnd, valueToAdd] = mod;
      for (let i = rowStart; i <= rowEnd; i++) {
          matriz[i][colIdx] += valueToAdd;
      }
  }
}

function imprimirMatriz(matriz) {
  for (const fila of matriz) {
      console.log(fila.join(' '));
  }
}

function procesarCasosPrueba(casos) {
  let caso = 1;

  for (const entrada of casos) {
      const [F, C, N] = entrada[0];
      const modificaciones = entrada.slice(1);

      // inicializar la matriz con ceros
      const matriz = Array.from({ length: F }, () => Array(C).fill(0));

      // aplicar las modificaciones a la matriz
      aplicarModificaciones(matriz, modificaciones);

      // imprimir la matriz resultante
      console.log(`Caso ${caso}:`);
      imprimirMatriz(matriz);
      caso++;
  }
}

const casosPrueba = [
  [
      [4, 5, 3],
      [2, 0, 3, 1],
      [0, 1, 2, -1],
      [2, 1, 1, 2],
  ],
];

procesarCasosPrueba(casosPrueba);