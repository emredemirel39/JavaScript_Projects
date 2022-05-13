const game = () => {

    const Players = class {
        constructor () {
            this.name = name;
            this.score = 0;
            this.choice = '';
            
        };

        get getScore () {
            return this.score
        }

        set setScore (score) {
            this.score += score
        }
    };

    const player1 = new Players();
    const computer = new Players();
    const choices = ['rock', 'paper', 'scissor'];

    const startGame = () => {

        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');

        const playButton = document.querySelector('.play-game')
        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            matchScreen.classList.remove('fadeOut')
            matchScreen.classList.add('fadeIn');

        });
    };

    const playMatch = () => {


        const rockButton = document.querySelector('.rock');
        const paperButton = document.querySelector('.paper');
        const scissorButton = document.querySelector('.scissor');

        const choiceScreen = document.querySelector('.hands');
        const loadingScreen = document.querySelector('.hands-loading');
        const winnerText = document.querySelector('.winner');

        const player1Score = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        const createRandomChoice = () => {
            let compChoiceIndex = Math.floor(Math.random() * 3);
            return choices[compChoiceIndex];
        };
        
        

        rockButton.addEventListener('click', () => {
            player1.choice = rockButton.className;
            winnerText.textContent = 'Waiting...';
            

            choiceScreen.classList.add('fadeOut');
            loadingScreen.classList.remove('FadeOut');
            loadingScreen.classList.add('fadeIn');

            const randomChoice = setInterval(() => {
                loadingScreen.innerHTML = `<h1>${createRandomChoice().toUpperCase()}</h1>`
            }, 100);

            let stopLoadingScreen = (callback) => {
                setTimeout(() => {
                    clearInterval(randomChoice);
                    callback();
                }, 4000);
            };
            
            const result = () => {
                computer.choice = `${loadingScreen.textContent.toLowerCase()}`;
                
                if (computer.choice === 'rock' ) {

                    winnerText.textContent = 'Draw...';

                } else if (computer.choice === 'paper'){

                    winnerText.textContent = 'Computer Win !';
                    computer.setScore = 1;

                } else if (computer.choice === 'scissor') {

                    winnerText.textContent = 'Player Win !';
                    player1.setScore = 1;
                }

                player1Score.textContent = player1.getScore;
                computerScore.textContent = computer.getScore;

            }

            stopLoadingScreen(result);


        });

        paperButton.addEventListener('click', () => {
            player1.choice = paperButton.className;
            winnerText.textContent = 'Waiting...'
            

            choiceScreen.classList.add('fadeOut');
            loadingScreen.classList.remove('FadeOut')
            loadingScreen.classList.add('fadeIn')

            const randomChoice = setInterval(() => {
                loadingScreen.innerHTML = `<h1>${createRandomChoice().toUpperCase()}</h1>`
            }, 100);

            let stopLoadingScreen = (callback) => {
                setTimeout(() => {
                    clearInterval(randomChoice);
                    callback();
                }, 4000);
            };
            
            const result = () => {
                computer.choice = `${loadingScreen.textContent.toLowerCase()}`;
                
                if (computer.choice === 'rock' ) {

                    winnerText.textContent = 'Player Win !';
                    player1.setScore = 1;

                } else if (computer.choice === 'paper'){

                    winnerText.textContent = 'Draw...';

                } else if (computer.choice === 'scissor') {

                    winnerText.textContent = 'Computer Win !';
                    computer.setScore = 1;
                };

                player1Score.textContent = player1.getScore;
                computerScore.textContent = computer.getScore

            }

            stopLoadingScreen(result);
        })


        scissorButton.addEventListener('click', () => {
            player1.choice = scissorButton.className;
            winnerText.textContent = 'Waiting...'
            

            choiceScreen.classList.add('fadeOut');
            loadingScreen.classList.remove('FadeOut')
            loadingScreen.classList.add('fadeIn')

            const randomChoice = setInterval(() => {
                loadingScreen.innerHTML = `<h1>${createRandomChoice().toUpperCase()}</h1>`
            }, 100);

            let stopLoadingScreen = (callback) => {
                setTimeout(() => {
                    clearInterval(randomChoice);
                    callback();
                }, 4000);
            };
            
            const result = () => {
                computer.choice = `${loadingScreen.textContent.toLowerCase()}`;
                
                if (computer.choice === 'rock' ) {

                    winnerText.textContent = 'Computer Win !';
                    computer.setScore = 1;

                } else if (computer.choice === 'paper'){

                    winnerText.textContent = 'Player Win';
                    player1.setScore = 1;

                } else if (computer.choice === 'scissor') {

                    winnerText.textContent = 'Draw...';
                };

                player1Score.textContent = player1.getScore;
                computerScore.textContent = computer.getScore

            }

            stopLoadingScreen(result);
        })
  
    };



    // callback inner funcs

    startGame();
    playMatch();
};

game();