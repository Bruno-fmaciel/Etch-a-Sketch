const container = document.querySelector('.container');
for (n=0;n<=15;n++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (i = 0;i <= 15;i++) {
        const div = document.createElement("div");
        div.style.height = "50px";
        div.style.width = "50px";
        div.style.backgroundColor = 'red';
        div.classList.add('square');
        row.appendChild(div);
    }
}

const square = document.querySelectorAll('.square');




