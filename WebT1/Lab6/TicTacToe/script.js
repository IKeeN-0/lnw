function onClicked(event){
    if(over) return;
    if(event.target.textContent != '')  return;
    event.target.textContent = 'X';

    if (checkWinner('X')) {
        statusText.textContent = 'You Win';
        over = true;
        return;
    }

    if (isBoardFull()) {
        statusText.textContent = 'Draw';
        over = true;
        return;
    }
    setTimeout(() => {
        computer();
        if (checkWinner('O')) {
            statusText.textContent = 'Computer Win';
            over = true;
        } else if (isBoardFull()) {
            statusText.textContent = 'Draw';
            over = true;
        }
    }, 300);
}

function computer(){
    const emptyBoxs = Array.from(boxs).filter(box => box.textContent === '');
    if(emptyBoxs.length === 0) return;
    const randomIndex = Math.floor(Math.random() * emptyBoxs.length);
    const computerBox = emptyBoxs[randomIndex];

    computerBox.textContent = 'O'
}

function checkWinner(player) {
    return winPatterns.some(pattern => {
        return pattern.every(index => boxs[index].textContent === player);
    });
}

function isBoardFull(){
    return Array.from(boxs).every(box => box.textContent !== '');
}

const boxs = document.querySelectorAll('.box');
const statusText = document.getElementById('status');
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let over = false;

boxs.forEach(box => {
    box.addEventListener('click', onClicked);
});