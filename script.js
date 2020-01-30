let z = 5;

function getNumber() {
    z--;
    let x = 48;
    let y = prompt('Угадай число от 1 до 100');
    switch(true) {
        
        case (isNaN(y) || y.trim === ''):
            confirm('Введи число!');
            return getNumber();
        case (y > x) && (z > 0):
            alert('Загаданное число меньше! Попробуй еще раз!');
            confirm('У тебя осталось ' + z + ' попыток');
            return getNumber();
        case (y < x) && (z > 0):
            alert('Загаданное число больше! Попробуй еще раз!');
            confirm('У тебя осталось ' + z + ' попыток');
            return getNumber();
        case (z === 0):
            alert('GAME OVER!!! BUENAS NOCHES AMIGO!!!');
            break;
        case (y === false):
            break;
            default:
            alert('BINGO!!!!!!!!!');
        
    }
} 
getNumber(); 