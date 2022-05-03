// Seleccionamos el body
let body = document.body;
// Seleccionamos el contenedor de los divs
let cardContainer = document.querySelector('.cards_container');
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
    div.innerHTML = `<div class="hidden ">${emojiList[emoji]} </div>`;
    cardContainer.append(div);
}
function GenerateCardboard() {
    let number = Math.floor(Math.random() * 16);
    console.log(emojiListRandom.find((e) => e === number));
    if (emojiListRandom.find((e) => e === number) === undefined) {
        emojiListRandom.push(number);
        GenerateCard(number);
        GenerateCardboard();
    } else if (emojiListRandom.length === 16) {
        return;
    } else {
        GenerateCardboard();
    }
}

GenerateCardboard();
