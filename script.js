const container = document.querySelector('.container');
function createGrid(row,collumn) {
    gridArea = row * collumn
    for (i = 0;i <= gridArea-1;i++) {
        const div = document.createElement("div");
        div.style.width = `${(800/collumn)}px`;
        div.style.height = `${(800/collumn)}px`;
        div.classList.add('square');
        container.appendChild(div);
    }
}

createGrid(16,16);

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


