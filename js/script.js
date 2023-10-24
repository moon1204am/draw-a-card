const button = document.querySelector('#drawBtn');
const cardImg = document.querySelector('#cardImg');
const cardDrawn = document.querySelector('#cardDrawn');

const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';

const getCardOnClick = () => {
    cardImg.innerHTML = '';
    
    fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(res => { if(res.ok) return res.json()})
        .then(data => {
            console.log(data)
            
            const cardImgSrc = data.cards[0].image;
            const suit = data.cards[0].suit;
            const value = data.cards[0].value;
            let img = document.createElement('img');
            img.setAttribute('src', cardImgSrc);
            cardImg.appendChild(img);
            //showNewPic(img);

            cardDrawn.innerHTML = `You got ${value} of ${suit}`
        });
}

async function removePic() {
    // if(cardImg.childElementCount > 0) {
    //     cardImg.removeChild(cardImg.firstChild);
        
    // }
    //cardImg.removeChild(cardImg.firstChild);

    
}

button.addEventListener('click', getCardOnClick);