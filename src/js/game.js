(function () {

    const cols = document.querySelectorAll('.col');
    cols.forEach(col => col.addEventListener('click', play, false));

    const player1 = {
        id: 1
    };
    const player2 = {
        id: 2
    };
    let selectedPlayer = player1;
    const board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    function startNewGame()  {
        selectedPlayer = player1;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                board[i][j] = 0;
            }
        }
        cols.forEach(col => col.className = 'col');
    }

    function play(event) {
        const row = event.target.dataset.row;
        const col = event.target.dataset.col;

        if (setMove(row, col)) {
            event.target.classList.add(`player-${selectedPlayer.id}`);
        } else {
            alert('Invalid move.');
            return;
        }

        if (playerWin()) {
            alert(`Player ${selectedPlayer.id} win the game!`);
            startNewGame();
            return;
        }

        selectedPlayer = selectedPlayer.id == player1.id ? player2 : player1;
    }

    function setMove(row, col) {
        if (board[row][col] != 0) {
            return false;
        }

        board[row][col] = selectedPlayer.id;

        return true;
    }

    function playerWin() {
        return (board[0][0] == selectedPlayer.id && board[0][1] == selectedPlayer.id && board[0][2] == selectedPlayer.id) ||
            (board[1][0] == selectedPlayer.id && board[1][1] == selectedPlayer.id && board[1][2] == selectedPlayer.id) ||
            (board[2][0] == selectedPlayer.id && board[2][1] == selectedPlayer.id && board[2][2] == selectedPlayer.id) ||
            (board[0][0] == selectedPlayer.id && board[1][0] == selectedPlayer.id && board[2][0] == selectedPlayer.id) ||
            (board[0][1] == selectedPlayer.id && board[1][1] == selectedPlayer.id && board[2][1] == selectedPlayer.id) ||
            (board[0][2] == selectedPlayer.id && board[1][2] == selectedPlayer.id && board[2][2] == selectedPlayer.id) ||
            (board[0][0] == selectedPlayer.id && board[1][1] == selectedPlayer.id && board[2][2] == selectedPlayer.id);
    }
})();