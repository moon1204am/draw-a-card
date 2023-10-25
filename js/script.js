const button = document.querySelector('#drawBtn');
const cardImg = document.querySelector('#cardImg');
const cardDrawn = document.querySelector('#cardDrawn');

const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';

const getCardOnClick = async () => {
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    });

    const data = await res.json();

    const cardImgSrc = data.cards[0].image;
    const suit = data.cards[0].suit;
    const value = data.cards[0].value;

    let img = document.createElement('img');
    img.src = cardImgSrc;

    changeImg(img);
    cardDrawn.innerHTML = `You got ${value} of ${suit}!`
}

function changeImg(img) {
    if(cardImg.hasChildNodes()) {
        cardImg.removeChild(cardImg.firstChild);
    }
    cardImg.appendChild(img);
}
button.addEventListener('click', getCardOnClick);