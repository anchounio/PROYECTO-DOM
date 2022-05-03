function CrearCarton1() {
    let carton = [];
    CrearCarton2(carton);
}

function CrearCarton2(carton) {
    let number = Math.floor(Math.random() * 16); // crea un número al azar del 1 al 99

    // Si detecta que ya existe el número en el array, repite de nuevo la función, creándose
    // un nuevo número al azar y haciendo otra vez esta comprobación. Así evitamos que se repitan
    // números.
    // Cuando se hayan asignado 15 números al cartón, se para el bucle y pasamos a la siguiente función.

    for (let valor of carton) {
        if (number === valor.number) {
            CrearCarton2(carton);
            return;
        } else if (carton.length === 16) {
            return;
        }
    }

    let matched = false;
    let nuevoNumero = { number, matched };
    carton.push(nuevoNumero);
    console.log(carton);
    CrearCarton2(carton);
}

CrearCarton1();
