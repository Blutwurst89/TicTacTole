let fields = [];
let currentShape = 'cross';
let gameOver = false;
let winnerCountCircle = 0;
let winnerCountCross = 0;

function fillShape(id) {
    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-2').classList.remove('player-inactive');
            document.getElementById('player-1').classList.add('player-inactive');
        } else {
            currentShape = 'cross';
            document.getElementById('player-1').classList.remove('player-inactive');
            document.getElementById('player-2').classList.add('player-inactive');
        }

        fields[id] = currentShape;
        draw();
        checkForWin();
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

function checkForWin() {
    let winnerCircle
    //First Row
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0] && fields[0] == 'circle') {
        winnerCircle = fields[0];
        document.getElementById('line-1').classList.remove('d-none');
        winnerCountCircle++;
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3] && fields[3] == 'circle') {
        winnerCircle = fields[3];
        document.getElementById('line-2').classList.remove('d-none');
        winnerCountCircle++;
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6] && fields[6] == 'circle') {
        winnerCircle = fields[6];
        document.getElementById('line-3').classList.remove('d-none');
        winnerCountCircle++;
    }
    //vertikale Linie
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0] && fields[0] == 'circle') {
        winnerCircle = fields[0];
        document.getElementById('line-4').classList.remove('d-none');
        winnerCountCircle++;
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1] && fields[1] == 'circle') {
        winnerCircle = fields[1];
        document.getElementById('line-5').classList.remove('d-none');
        winnerCountCircle++;
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2] && fields[2] == 'circle') {
        winnerCircle = fields[2];
        document.getElementById('line-6').classList.remove('d-none');
        winnerCountCircle++;
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0] && fields[0] == 'circle') { //diagonal
        winnerCircle = fields[0];
        document.getElementById('line-7').classList.remove('d-none');
        winnerCountCircle++;
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2] && fields[2] == 'circle') { //diagonal
        winnerCircle = fields[2];
        document.getElementById('line-8').classList.remove('d-none');
        winnerCountCircle++;
    }

    if (winnerCircle) {
        console.log('GEWONNEN:', winnerCircle);
        gameOver = true;
        document.getElementById('winnercountCircle').innerHTML = winnerCountCircle;
        setTimeout(function () {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restart-btn').classList.remove('d-none');
            document.getElementById('winnercountBox').classList.add('d-none');
        }, 1500);} 

    let winnerCross
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0] && fields[0] == 'cross') {
        winnerCross = fields[0];
        document.getElementById('line-1').classList.remove('d-none');
        winnerCountCross++;
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3] && fields[3] == 'cross') {
        winnerCross = fields[3];
        document.getElementById('line-2').classList.remove('d-none');
        winnerCountCross++;
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6] && fields[6] == 'cross') {
        winnerCross = fields[6];
        document.getElementById('line-3').classList.remove('d-none');
        winnerCountCross++;
    }
    //vertikale Linie
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0] && fields[0] == 'cross') {
        winnerCross = fields[0];
        document.getElementById('line-4').classList.remove('d-none');
        winnerCountCross++;
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1] && fields[1] == 'cross') {
        winnerCross = fields[1];
        document.getElementById('line-5').classList.remove('d-none');
        winnerCountCross++;
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2] && fields[2] == 'cross') {
        winnerCross = fields[2];
        document.getElementById('line-6').classList.remove('d-none');
        winnerCountCross++;
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0] && fields[0] == 'cross') { //diagonal
        winnerCross = fields[0];
        document.getElementById('line-7').classList.remove('d-none');
        winnerCountCross++;
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2] && fields[2] == 'cross') { //diagonal
        winnerCross = fields[2];
        document.getElementById('line-8').classList.remove('d-none');
        winnerCountCross++;
    }

    if (winnerCross) {
        console.log('GEWONNEN:', winnerCross);
        gameOver = true;
        document.getElementById('winnercountCross').innerHTML = winnerCountCross;
        setTimeout(function () {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restart-btn').classList.remove('d-none');
            document.getElementById('winnercountBox').classList.add('d-none');
        }, 1500);}
    
    
    else {
        if (fields[0] && fields[1] && fields[2] && fields[3] && fields[4] && fields[5] && fields[6] && fields[7] && fields[8]) {
            gameOver = true;
            setTimeout(function () {
                document.getElementById('restart-btn').classList.remove('d-none');
                document.getElementById('shrug').classList.remove('d-none');
                document.getElementById('winnercountBox').classList.add('d-none');

            }, 1500);
        }
    }
}


function restart() {
    gameOver = false;
    fields = [];
    document.getElementById('restart-btn').classList.add('d-none');
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('shrug').classList.add('d-none');
    document.getElementById('winnercountBox').classList.remove('d-none');
    for (let i = 1; i < 9; i++) {
        document.getElementById('line-' + i).classList.add('d-none');
    }
    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }
}