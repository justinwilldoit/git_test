const container = document.querySelector('.container');
const reset = document.querySelector('#reset');
const changeSize= document.querySelector('#size');
let size = prompt('Number of Grids?');
let gridBoxes;

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr`
    container.style.gridTemplateRows = `repeat(${size}, 1fr`

    for (let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.classList.add('gridBox');
        container.appendChild(div);
    }
    gridBoxes = document.querySelectorAll('.gridBox');
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener('mouseenter', (e) => {
            gridBox.classList.add('active');
        });
    });
}

reset.addEventListener('click', (e) => {
    gridBoxes.forEach((gridBox) => {
        gridBox.classList.remove('active');
    });
});

changeSize.addEventListener('click', (e) =>{
    gridBoxes.forEach((gridBox) =>{
        gridBox.classList.remove('active');
    });
    size = prompt('Number of Grids?');
    createGrid(size);
});

createGrid(size);