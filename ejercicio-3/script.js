const formularioBusqueda = document.getElementById('formulario-busqueda');
const terminoBusqueda = document.getElementById('termino-busqueda');
const tablaDiccionario = document.getElementById('tabla-diccionario');
const contenedorResultados = document.getElementById('contenedor-resultados');

formularioBusqueda.addEventListener('submit', function(event) {
  event.preventDefault();

  const termino = terminoBusqueda.value.toLowerCase();
  let contador = 0;

  const filas = tablaDiccionario.getElementsByTagName('tr');

  for (let i = 1; i < filas.length; i++) {
    const fila = filas[i];
    const columnas = fila.getElementsByTagName('td');
    let encontrado = false;

    fila.classList.remove('highlight');

    for (let j = 0; j < columnas.length; j++) {
      const texto = columnas[j].textContent.toLowerCase();

      if (texto.includes(termino)) {
        encontrado = true;
      }
    }

    if (encontrado) {
      fila.classList.add('highlight');
      contador++;
    }
  }

  contenedorResultados.textContent = `Resultados encontrados: ${contador}`;
});
