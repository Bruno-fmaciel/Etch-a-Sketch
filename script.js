const container = document.querySelector('.container');
for (n=0;n<=15;n++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (i = 0;i <= 15;i++) {
        const div = document.createElement("div");
        div.style.height = "50px";
        div.style.width = "50px";
        div.classList.add('square');
        row.appendChild(div);
    }
}

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



