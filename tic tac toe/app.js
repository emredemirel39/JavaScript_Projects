class Player {
    constructor (sign, turn){
        this.sign = sign;
        this.name = `Player ${sign.toUpperCase()}`;
        this.turn = turn;
        this.score = 0;
    };

    set setScore (score) {
        this.score += score;
    };

    get getScore () {
        return this.score
    };

    changeTurn() {
        this.turn === true ? this.turn = false : this.turn = true
    };
};

const playerX = new Player('x', true);
const playerO = new Player('o', false);
const playerXInfo = document.querySelector('.player-x');
const playerOInfo = document.querySelector('.player-o');
const messageText = document.querySelector('.messages');
const playAgainBtn = document.querySelector('.play-again');
const blocks = document.querySelectorAll('.block');


window.addEventListener('DOMContentLoaded', () => game());


const game = () => {
    let winner = '';

    playerXInfo.querySelector('.name').textContent = playerX.name;
    playerXInfo.querySelector('.score').textContent = playerX.score;

    playerOInfo.querySelector('.name').textContent = playerO.name;
    playerOInfo.querySelector('.score').textContent = playerO.score;
    

    blocks.forEach((block) => {
        block.addEventListener('click', () => {

            setSign(block);
            checkResult();
            checkWinner();
            checkDraw();
        });
    });

    function setSign (block) {
        
        if (block.textContent !== '') {
            //do nothing
        }
        else if (playerX.turn === true) {
            messageText.textContent = `${playerO.name}' s Turn`
            block.value = playerX.sign;
            block.textContent = block.value.toUpperCase();
            playerX.changeTurn();
            playerO.changeTurn();
        } else if (playerO.turn === true) {
            messageText.textContent = `${playerX.name}' s Turn`
            block.value = playerO.sign;
            block.textContent = block.value.toUpperCase();
            playerX.changeTurn();
            playerO.changeTurn();
        };
    };


    const checkResult = () => {

        let row1 = blocks[0].textContent === blocks[1].textContent && 
        blocks[0].textContent === blocks[2].textContent && blocks[0].textContent !== '';
    
        let row2 = blocks[3].textContent === blocks[4].textContent && 
        blocks[3].textContent === blocks[5].textContent && blocks[3].textContent !== '';
           
        let row3 = blocks[6].textContent === blocks[7].textContent && 
        blocks[6].textContent === blocks[8].textContent && blocks[6].textContent !== '';
        
        let col1 = blocks[0].textContent === blocks[3].textContent && 
        blocks[0].textContent === blocks[6].textContent && blocks[0].textContent !== '';
    
        let col2 = blocks[1].textContent === blocks[4].textContent && 
        blocks[1].textContent === blocks[7].textContent && blocks[1].textContent !== '';
    
        let col3 = blocks[2].textContent === blocks[5].textContent && 
        blocks[2].textContent === blocks[8].textContent && blocks[2].textContent !== '';
    
        let cross1 = blocks[0].textContent === blocks[4].textContent && 
        blocks[0].textContent === blocks[8].textContent && blocks[0].textContent !== '';
    
        let cross2 = blocks[2].textContent === blocks[4].textContent && 
        blocks[2].textContent === blocks[6].textContent && blocks[2].textContent !== '';
    
        if (row1 === true) winner = blocks[0].value;
        if (row2 === true) winner = blocks[3].value;
        if (row3 === true) winner = blocks[6].value; 
        if (col1 === true) winner = blocks[0].value;
        if (col2 === true) winner = blocks[1].value;
        if (col3 === true) winner = blocks[2].value;
        if (cross1 === true) winner = blocks[0].value;
        if (cross2 === true) winner = blocks[2].value;
    
    };

    
    const checkWinner = () => {
        if (winner ===  playerX.sign) {

            messageText.textContent = `${playerX.name} win!`;
            playAgainBtn.style.display = 'block';
            playerX.setScore = 1;
            playerXInfo.querySelector('.score').textContent = playerX.score;
            blocks.forEach(e => e.style.pointerEvents = 'none');

        } else if (winner === playerO.sign){

            messageText.textContent = `${playerO.name} win!`
            playAgainBtn.style.display = 'block';
            playerO.setScore = 1;
            playerOInfo.querySelector('.score').textContent = playerO.score;
            blocks.forEach(e => e.style.pointerEvents = 'none');
        };
    };


    const checkDraw = () => {
        const blockValues = [];
        blocks.forEach(block => blockValues.push(block.value));
        console.log(blockValues);
        if (!blockValues.includes(undefined)) {
            messageText.textContent = 'Draw...';
            playAgainBtn.style.display = 'block';
        };
    };

    
    const restartGame = () => {
        
        messageText.textContent = `${playerX.name}' s Turn`;
        playAgainBtn.style.display = 'none';
        playerX.turn = true;
        playerO.turn = false;
        winner = '';
        blocks.forEach(block => {

            block.style.pointerEvents = 'auto';
            block.innerHTML = '';
            block.value = undefined;
        });      
    };
    
    playAgainBtn.addEventListener('click', () => restartGame());
};