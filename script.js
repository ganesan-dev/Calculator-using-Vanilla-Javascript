let display = document.getElementById("screen")

function allClear(){
    display.value = "";
}

function show(n){
    display.value += n;
}

function del(){
    display.value = display.value.slice(0, -1);
}

function clicked(n){
    document.classList.add('')
}

function calc(){
    display.value = eval(display.value);
}

// for numbers clicked in keyboard

document.addEventListener("keydown", function(event){
    let keyPressed = event.key;
    console.log(keyPressed);

    switch(keyPressed){
        case '1':
            show('1');
            btn;
            break;
        case '2':
            show('2');
            break;
        case '3':
            show('3');
            break;
        case '4':
            show('4');
            break;
        case '5':
            show('5');
            break;
        case '6':
            show('6');
            break;
        case '7':
            show('7');
            break;
        case '8':
            show('8');
            break;
        case '9':
            show('9');
            break;
        case 'Backspace':
            del();
            break;
        case '00':
            show('00');
            break;
        case 'Delete':
            allClear();
            break;
        case '%':
            show('%');
            break;
        case '+':
            
            show('+');
            break;
        case '-':
            show('-');
            break;
        case '*':
            show('*');
            break;
        case '/':
            show('/');
            break;
        case '=' && 'Enter':
                calc();
                break;
        default: console.log(keyPressed);
    }
})