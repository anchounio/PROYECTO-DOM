// Seleccionamos el body
let body = document.body;
// Seleccionamos el contenedor de los divs
let cardContainer = document.querySelector('.cards_container');

let div = document.querySelector('div');
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
    div.innerHTML = `<div class="hidden " alt="${emoji}">${emojiList[emoji]} </div>`;
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
        card1();
        return;
    } else {
        GenerateCardboard();
    }
}

function card1() {
    div.removeEventListener('click', card1);
    div.removeEventListener('click', card2);
    let cosa1 = div.addEventListener('click', (e) => {
        console.log('estoy en card1');
        // 1. Seleccionamos de forma inequívoca el elemento sobre el cuál hemos
        // hecho click.
        let clickedDiv1 = '';
        clickedDiv1 = e.target;
        console.log(console.log('card1: ', clickedDiv1));

        clickedDiv1.className = 'emoji';

        card2(clickedDiv1, cosa1);
    });
    div.removeEventListener('click', card1);
    div.removeEventListener('click', card2);
}

function card2(clickedDiv1) {
    div.removeEventListener('click', card1);
    div.removeEventListener('click', card2);
    let cosa2 = div.addEventListener('click', (e) => {
        console.log('estoy en card2');
        let clickedDiv2 = '';
        clickedDiv2 = e.target;
        console.log('card2: ', clickedDiv2);

        clickedDiv2.className = 'emoji';
        if (clickedDiv2.textContent === clickedDiv1.textContent) {
            clickedDiv1.className = 'emoji';
            clickedDiv2.className = 'emoji';
            card1();
        } else if (clickedDiv2.textContent !== clickedDiv1.textContent) {
            clickedDiv1.className = 'hidden';
            clickedDiv2.className = 'hidden';
            card1();
        }
    });
    div.removeEventListener('click', card1);
    div.removeEventListener('click', card2);
}

GenerateCardboard();
