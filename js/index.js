// Seleccionamos el body
let body = document.body;
// Seleccionamos el contenedor de los divs
let cardContainer = document.querySelector('.cards_container');

let div = document.querySelector('div');
// Array de emojis

let emojiList = [
    { emoji: '💀', matched: false },
    { emoji: '💀', matched: false },
    { emoji: '👺', matched: false },
    { emoji: '👺', matched: false },
    { emoji: '🤡', matched: false },
    { emoji: '🤡', matched: false },
    { emoji: '🎅🏻', matched: false },
    { emoji: '🎅🏻', matched: false },
    { emoji: '👽', matched: false },
    { emoji: '👽', matched: false },
    { emoji: '🎃', matched: false },
    { emoji: '🎃', matched: false },
    { emoji: '👾', matched: false },
    { emoji: '👾', matched: false },
    { emoji: '🤖', matched: false },
    { emoji: '🤖', matched: false },
];

let emojiListRandom = [];

function GenerateCard(emoji) {
    const div = document.createElement('div');
    div.innerHTML = `<div class="hidden " data-number="${emojiListRandom}">${emojiList.emoji} </div>`;
    cardContainer.append(div);
    console.log(div.textContent);
    console.log(emojiList);
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
    let div1 = document.querySelector('div');
    div1.removeEventListener('click', card1);
    let cosa1 = div1.addEventListener('click', (e) => {
        console.log('estoy en card1');
        // 1. Seleccionamos de forma inequívoca el elemento sobre el cuál hemos
        // hecho click.

        let clickedDiv1 = '';
        console.log(e.target);
        clickedDiv1 = e.target;
        if (clickedDiv1.className === 'untouchable') {
            card1();
        } else {
            console.log(console.log('card1: ', clickedDiv1));

            clickedDiv1.className = 'emoji';

            card2(clickedDiv1, cosa1);
        }
    });
    div1.removeEventListener('click', card1);
}

function card2(clickedDiv1) {
    let div2 = document.querySelector('div');
    div2.removeEventListener('click', card2);
    let cosa2 = div2.addEventListener('click', (e) => {
        console.log('estoy en card2');
        let clickedDiv2 = '';
        clickedDiv2 = e.target;
        console.log('card2: ', clickedDiv2);
        clickedDiv2.className = 'emoji';
        if (clickedDiv2.textContent === clickedDiv1.textContent) {
            clickedDiv1.className = 'untouchable';
            clickedDiv2.className = 'untouchable';

            card1();
        } else if (clickedDiv2.textContent !== clickedDiv1.textContent) {
            clickedDiv1.className = 'hidden';
            clickedDiv2.className = 'hidden';
            card1();
        }
    });

    div2.removeEventListener('click', card2);
}

GenerateCardboard();
