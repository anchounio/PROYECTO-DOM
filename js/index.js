// Seleccionamos el body
let body = document.body;

// Seleccionamos el contenedor de los divs
let cardContainer = document.querySelector('.cards_container');

let div = document.querySelector('div');

// Valor inicial de "0" para la primera carta que levantamos.
// Se utiliza para diferenciar si la hemos levantado ya o no.
let clickedDiv1 = '0';

// Valor inicial vacío para la segunda carta.
let clickedDiv2 = '';

// Valor inicial de la variable intentos del juego

let intentos = 0;

// Array de emojis
let emojiList = [
    '💀',
    '💀',
    '👺',
    '👺',
    '🤡',
    '🤡',
    '🎅🏻',
    '🎅🏻',
    '👽',
    '👽',
    '🎃',
    '🎃',
    '👾',
    '👾',
    '🤖',
    '🤖',
];

let emojiListRandom = [];

function GenerateCard(emoji) {
    const div = document.createElement('div');
    div.className = 'hidden';
    div.innerHTML = `${emojiList[emoji]}`;
    cardContainer.append(div);
    console.log(div.textContent);
}

function GenerateCardboard() {
    let number = Math.floor(Math.random() * 16);
    console.log(emojiListRandom.find((e) => e === number));
    if (emojiListRandom.find((e) => e === number) === undefined) {
        emojiListRandom.push(number);
        GenerateCard(number);
        GenerateCardboard();
    } else if (emojiListRandom.length === 16) {
        console.log(emojiListRandom);
        cards();
        return;
    } else {
        GenerateCardboard();
    }
}

// A través de un addEventListener tomamos 2 variables, clickedDiv1 y clickedDiv2, son 2 cartas que
// podemos girar para ver el emoji que contienen. clickedDiv1 parte teniendo contenido "0", solo
// para diferenciar si se ha pasado ya o no. Si tiene contenido "0", se cambia su contenido por el
// de la tarjeta clickada. Si su contenido es distinto de cero, el programa entenderá que tiene que
// pasar automáticamente a ver la segunda carta (clickedDiv2).

// Al haber levantado las 2 cartas, se le vuelve a poner valor "0" a clickedDiv1 para que el proceso
// se repita de nuevo.

function cards() {
    console.log(div);
    div.addEventListener('click', (e) => {
        // 1. Seleccionamos de forma inequívoca el elemento sobre el cuál hemos
        // hecho click.
        console.log(clickedDiv1);
        if (clickedDiv1 === '0') {
            console.log('estoy con la primera variable');
            clickedDiv1 = ''; //vaciamos para quitar el posible contenido de "0"
            clickedDiv1 = e.target;
            console.log(clickedDiv1);
            console.log(clickedDiv1.textContent);

            clickedDiv1.className = 'emoji';
        } else {
            console.log('estoy con la segunda variable');
            clickedDiv2 = e.target;

            // function setZoom(color) {
            //     document.querySelectorAll('.var').forEach((item) => {
            //       item.style.color = color;
            //     })
            //   }

            // Estas 2 líneas sirven para bloquear todas las cartas ocultas para
            // que no se pueda pulsar sobre ellas mientras el programa decide
            // qué hacer con las 2 cartas seleccionadas previamente.
            let hiddenCards = document
                .querySelectorAll('.cards_container>.hidden')
                .forEach((item) => {
                    item.className = 'blocked';
                });

            console.log(hiddenCards);

            console.log(clickedDiv2);
            console.log(clickedDiv2.textContent);
            clickedDiv2.className = 'emoji';

            if (clickedDiv1.textContent === clickedDiv2.textContent) {
                clickedDiv1.className = 'emoji';
                clickedDiv2.className = 'emoji';
                intentos++;
                console.log(`llevas ${intentos} intentos`);
                // Pasamos las cartas de estilo bloqueado a (estilo hidden) para que sean
                // pulsables de nuevo.
                hiddenCards = document
                    .querySelectorAll('.cards_container>.blocked')
                    .forEach((item) => {
                        item.className = 'hidden';
                    });
                isGameOver();
            } else {
                setTimeout(function () {
                    // En caso de que las 2 cartas seleccionados no tengan el mismo emoji,
                    // pasados 2 segundos vuelven a ocultarse (estilo hidden)
                    clickedDiv1.className = 'hidden';
                    clickedDiv2.className = 'hidden';
                    intentos++;
                    console.log(`llevas ${intentos} intentos`);
                    // Pasamos las cartas de estilo bloqueado a (estilo hidden) para que sean
                    // pulsables de nuevo tras haber pasado 2 segundos.
                    hiddenCards = document
                        .querySelectorAll('.cards_container>.blocked')
                        .forEach((item) => {
                            item.className = 'hidden';
                        });
                }, 1000);
            }
            setTimeout(function () {
                clickedDiv1 = '0';
            }, 1000);
        }
    });
}

function isGameOver() {
    if (document.querySelectorAll('.cards_container>.emoji').length === 16) {
        alert(`¡Has terminado el juego en ${intentos} intentos!`);
    } else {
        return;
    }
}

GenerateCardboard();
