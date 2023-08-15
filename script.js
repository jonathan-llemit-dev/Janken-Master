    // object for scores of player
    let scores = {
        win: 0,
        lose: 0,
        tie: 0
    };

    // generating a computer move
    function ComputerMove(){

        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
            computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
            computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
            computerMove = 'scissors';
        }

        return computerMove;

    }

    // calculating the game result between computer move and player move
    function CalculateGameResult(playerMove){

        let computerMove = ComputerMove();

        let result = '';
        
        if(playerMove === 'rock'){

            if (computerMove === 'rock') {
            result = 'Tie!';
            } else if (computerMove === 'paper') {
            result = 'You lose!';
            } else if (computerMove === 'scissors') {
            result = 'You win!';
            }

        }else if(playerMove === 'paper'){

            if (computerMove === 'rock') {
            result = 'You win!';
            } else if (computerMove === 'paper') {
            result = 'Tie!';
            } else if (computerMove === 'scissors') {
            result = 'You lose!';
            }
            
        }else if(playerMove === 'scissors'){

            if (computerMove === 'rock') {
            result = 'You lose!';
            } else if (computerMove === 'paper') {
            result = 'You win!';
            } else if (computerMove === 'scissors') {
            result = 'Tie!';
            }

        }

        let bgColorClass = "";

        if(result == 'You win!'){
            scores.win++;
            bgColorClass = "win-bg";
        }else if(result == 'You lose!'){
            scores.lose++;
            bgColorClass = "lose-bg";
        }else if(result == 'Tie!'){
            scores.tie++;
            bgColorClass = "tie-bg";
        }

        // Display the result in the modal
        document.getElementById('result-text').textContent = `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`;
        document.getElementById('modal-scores-text').textContent = `Wins: ${scores.win} | Loses: ${scores.lose} | Ties: ${scores.tie}`;
        document.getElementById('scores-text-wins').textContent = `${scores.win}`;
        document.getElementById('scores-text-loses').textContent = `${scores.lose}`;
        document.getElementById('scores-text-ties').textContent = `${scores.tie}`;

        // Update history board
        const historyList = document.getElementById("history-list");
        const resultText = document.getElementById("result-text").textContent;
        const historyItem = document.createElement("li");
        historyItem.textContent = resultText;
        historyItem.classList.add(bgColorClass); // Add the appropriate background color class
        historyList.prepend(historyItem);

        // Show the modal
        document.getElementById('modal').style.display = 'block';

        // Close the modal when clicking outside
        window.onclick = function(event) {
            if (event.target === document.getElementById('modal')) {
            closeModal();
            }
        }

    }

    // closing the modal
    function closeModal() {
        // Hide the modal
        document.getElementById('modal').style.display = 'none';
    }
    
    function resetScores() {
        
        scores.win = 0;
        scores.lose = 0;
        scores.tie = 0;
        document.getElementById('scores-text-wins').textContent = `${scores.win}`;
        document.getElementById('scores-text-loses').textContent = `${scores.lose}`;
        document.getElementById('scores-text-ties').textContent = `${scores.tie}`;
        document.getElementById('modal-scores-text').textContent = `Wins: ${scores.win} | Loses: ${scores.lose} | Ties: ${scores.tie}`;

        // Clear history board
        const historyList = document.getElementById("history-list");
        historyList.innerHTML = ''; // Clear all history 
        
    }
