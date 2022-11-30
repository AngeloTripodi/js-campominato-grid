const mainElement = document.querySelector('main');
const squareContainer = document.querySelector('.grid');

function getSquare(elm, cls, prn, clicked){
    const newSquare = document.createElement(elm);
    newSquare.classList.add(cls);
    prn.appendChild(newSquare);
    newSquare.addEventListener('click', function(){
        newSquare.classList.toggle(clicked)
    });
    return newSquare;
}
console.log(getSquare('div', 'test', mainElement));




for (let i=1; i<=100; i++){
    const createNewSquare = getSquare('div', 'square', squareContainer, 'clicked');
    createNewSquare.classList.add('d-flex');
    createNewSquare.innerHTML =`<span class="d-flex m-auto"> ${[i]} <span>`;
}



