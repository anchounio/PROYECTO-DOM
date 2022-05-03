// Seleccionamos el body
let body = document.body;
// Seleccionamos el contenedor de los divs
let cardContainer = document.querySelector(".cards_container");

let div = document.querySelector("div");
// Array de emojis

let clickedDiv1 = "0";
let clickedDiv2 = "";

let emojiList = [
    "💀",
    "💀",
    "👺",
    "👺",
    "🤡",
    "🤡",
    "🎅🏻",
    "🎅🏻",
    "👽",
    "👽",
    "🎃",
    "🎃",
    "👾",
    "👾",
    "🤖",
    "🤖",
];

let emojiListRandom = [];

function GenerateCard(emoji) {
    const div = document.createElement("div");
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
        card1();
        return;
    } else {
        GenerateCardboard();
    }
}

function card1() {
    div.addEventListener("click", (e) => {
        // 1. Seleccionamos de forma inequívoca el elemento sobre el cuál hemos
        // hecho click.
        console.log("estoy en card1");
        console.log("a ver que pasa");
        console.log(clickedDiv1);
        if (clickedDiv1 === "0") {
            console.log("estoy con la primera variable");
            clickedDiv1 = "";
            clickedDiv1 = e.target;
            console.log(clickedDiv1);
            console.log(clickedDiv1.textContent);
            // let numberData = Number(clickedDiv1.getAttribute("data-number"));
            // console.log(numberData);
            clickedDiv1.className = "emoji";
            // console.log(cards);

            // console.log(cards);
        } else {
            console.log("estoy con la segunda variable");
            console.log(clickedDiv1);
            clickedDiv2 = e.target;
            console.log(clickedDiv2);
            console.log(clickedDiv1);
            console.log(clickedDiv2.textContent);
            // let numberData = Number(clickedDiv2.getAttribute("data-number"));
            // console.log(numberData);
            clickedDiv2.className = "emoji";

            // console.log(cards);

            if (clickedDiv1.textContent === clickedDiv2.textContent) {
                clickedDiv1.className = "emoji";
                clickedDiv2.className = "emoji";
            } else {
                setTimeout(function () {
                    clickedDiv1.className = "hidden";
                    clickedDiv2.className = "hidden";
                }, 1000);
            }
            setTimeout(function () {
                clickedDiv1 = "0";
            }, 1000);

            // console.log(cards);
        }
    });
}

GenerateCardboard();
