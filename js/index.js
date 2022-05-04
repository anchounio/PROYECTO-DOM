// Seleccionamos el body
let body = document.body;
// Seleccionamos el contenedor de los divs
let cardContainer = document.querySelector('.cards_container');

let div = document.querySelector('div');
// Array de emojis

let clickedDiv1 = '0';
let clickedDiv2 = '';

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
            } else {
                setTimeout(function () {
                    clickedDiv1.className = 'hidden';
                    clickedDiv2.className = 'hidden';
                }, 1000);
            }
            setTimeout(function () {
                clickedDiv1 = '0';
            }, 1000);
        }
    });
}

GenerateCardboard();
