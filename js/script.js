const mainElement = document.querySelector('main');
const squareContainer = document.querySelector('.grid');
const playButtonElement = document.getElementById('playButton')

function getSquare(elm, cls, prn, clicked){
    const newSquare = document.createElement(elm);
    newSquare.classList.add(cls);
    prn.appendChild(newSquare);
    newSquare.addEventListener('click', function(){
        newSquare.classList.toggle(clicked)
        console.log(parseInt(newSquare.innerText));
    });
    return newSquare;
    
}

console.log(playButtonElement)

playButtonElement.addEventListener('click', function(){

    mainElement.classList.toggle('d-none');

    for (let i=1; i<=100; i++){
        const createNewSquare = getSquare('div', 'square', squareContainer, 'clicked');
        createNewSquare.classList.add('d-flex');
        createNewSquare.innerHTML =`<span class="m-auto"> ${[i]} <span>`;
    }
}, {once: true});





