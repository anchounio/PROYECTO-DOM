// Seleccionamos el body
let body = document.body;
// Seleccionamos el contenedor de los divs
let cardContainer = document.querySelector('.cards_container');

let div = document.querySelector('div');
// Array de emojis

// Valor inicial de "0" para la primera carta que levantamos.
// Se utiliza para diferenciar si la hemos levantado ya o no.
let clickedDiv1 = '0';

// Valor inicial vacío para la segunda carta.
let clickedDiv2 = '';

// Variable que lleva el recuento de intentos

let intentos = 0;

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
    div.innerHTML = `<div class="hidden ">${emojiList[emoji]} </div>`;
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
            console.log(clickedDiv2);
            console.log(clickedDiv2.textContent);
            clickedDiv2.className = 'emoji';

            if (clickedDiv1.textContent === clickedDiv2.textContent) {
                clickedDiv1.className = 'emoji';
                clickedDiv2.className = 'emoji';
                intentos++;
                console.log(`llevas ${intentos} intentos`);
            } else {
                setTimeout(function () {
                    clickedDiv1.className = 'hidden';
                    clickedDiv2.className = 'hidden';
                    intentos++;
                    console.log(`llevas ${intentos} intentos`);
                }, 1000);
            }
            setTimeout(function () {
                clickedDiv1 = '0';
            }, 1000);
        }
    });
}

GenerateCardboard();
