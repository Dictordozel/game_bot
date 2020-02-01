
function getRandomNumber() {
    return Math.ceil(Math.random() * 100);
}

function isNumber(number) {
    return(!isNaN(parseFloat(number)) && isFinite(number));
}


function startGame() {

    let randomNumber = getRandomNumber();

    let welcome = confirm('Хэллоу, амиго! Слабо с 10 попыток угадать число от 1 до 100?');

    welcome === true ? gameRuls() : alert('Асталависта, зануда!');

    function gameRuls() {

        let gamerNumber = prompt('Введи число!');

        if(isNumber(gamerNumber)) {
            
            //gamerNumber = +gamerNumber;

            if(gamerNumber < randomNumber) {
                alert('Загаданное число больше! Попробуй еще раз!');
                return gameRuls();

            } else if(gamerNumber > randomNumber) {
                alert('Загаданное число меньше! Попробуй еще раз!');
                return gameRuls();

            }   else {
                return alert('BINGO!!!!!!!!!');
            }
        
        }   else if(gamerNumber === null) {
            alert('Асталависта, зануда!');
            return;

        }   else {
        alert('Так не пойдет! Введи число!');
        return gameRuls();    
        }
    }
}
startGame();