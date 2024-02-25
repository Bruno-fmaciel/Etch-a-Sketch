const container = document.querySelector('.container');
const sliderContainer = document.querySelector('.slider');
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');
let squaresNumber = 16;

sliderValue.textContent = `Resolution: ${slider.value} x ${slider.value}`;

function createGrid(squaresNumber) {
    gridArea = squaresNumber * squaresNumber;
    for (i = 0;i <= gridArea-1;i++) {
        const div = document.createElement("div");
        div.style.width = div.style.height = `${(800/squaresNumber)}px`;
        div.classList.add('square');
        container.appendChild(div);
    }
}

createGrid(squaresNumber);


const squares = document.querySelectorAll('.square');
squares.forEach(function(square) {
    square.addEventListener('mouseover', (e) => {
        e.target.style.background = `gray`;
    })
})

const reset = document.querySelector(".reset");
reset.addEventListener('click', function(e){
    squares.forEach(function(square) {
        square.style.background = 'white';
    })
})

function removeSquares() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }    
}


slider.addEventListener('input',function() {
    let text = `Resolution: ${slider.value} x ${slider.value}`;
    sliderValue.innerHTML = text;
    removeSquares();
    createGrid(slider.value);
})


