function saludar(nombre) {
  console.log("Hola" + " " + nombre);
  guardar(nombre)
}

function despedirse() {
  console.log("Adios");
}

function tardamucho() {
  console.log("Procesando...");
}

function main() {
  const nombre = "Pablo";
  saludar(nombre);
  tardamucho();
  despedirse();
}

function guardar(texto){
    //guarda el texto
}

main();
