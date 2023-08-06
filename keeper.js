const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const reset = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let p1Display = 0;
let p2Display = 0;
let winningScore = 5;
let isGameover = false;


player1.addEventListener('click', function() {
    if(!isGameover){
        p1Display += 1;
        if(p1Display === winningScore) {
            isGameover = true;
            p1Score.classList.add('has-text-success');
            p2Score.classList.add('has-text-danger');
            player1.disabled = true;
            player2.disabled = true;
        }
        p1Score.textContent = p1Display;
    }
})

player2.addEventListener('click', function() {
    if(!isGameover){
        p2Display += 1;
        if(p2Display === winningScore) {
            isGameover = true;
            p2Score.classList.add('has-text-success');
            p1Score.classList.add('has-text-danger');
            player1.disabled = true;
            player2.disabled = true;

        }
        p2Score.textContent = p2Display;
    }
})

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset1();
})

reset.addEventListener('click', reset1)

function reset1() {
    isGameover = false;
    p1Display = 0;
    p2Display = 0;
    p1Score.textContent = 0;
    p2Score.textContent = 0;
    p1Score.classList.remove('has-text-success','has-text-danger');
    p2Score.classList.remove('has-text-success','has-text-danger');
    player1.disabled = false;
    player2.disabled = false;

}
