let lengthDrumButtons = document.querySelectorAll('.drum').length;
let drumButtons = document.querySelectorAll('.drum');

document.addEventListener('keydown', (ev) => makeSound(ev.key));

for(let i = 0; i < lengthDrumButtons; i++){   
    //Evento de click nos botões, disparando os audios.
    drumButtons[i].addEventListener('click', function(){
        let buttonClicked = this.innerHTML;
        makeSound(buttonClicked);
    });
}
function makeSound(key){
    switch (key) {
        case 'w':
            let drumTom1 = new Audio('./sounds/tom-1.mp3');
            drumTom1.play();
            buttonAnimation(key);
            break;
        case 'a':
            let drumTom2 = new Audio('./sounds/tom-2.mp3');
            drumTom2.play();
            buttonAnimation(key)
            break;
        case 's':
            let drumTom3 = new Audio('./sounds/tom-3.mp3');
            drumTom3.play();
            buttonAnimation(key)
            break;
        case 'd':
            let drumTom4 = new Audio('./sounds/tom-4.mp3');
            drumTom4.play();
            buttonAnimation(key)
            break;
        case 'j':
            let drumSnare = new Audio('./sounds/snare.mp3');
            drumSnare.play();
            buttonAnimation(key)
            break;
        case 'k':
            let drumCrash = new Audio('./sounds/crash.mp3');
            drumCrash.play();
            buttonAnimation(key)
            break;
        case 'l':
            let drumBass = new Audio('./sounds/kick-bass.mp3');
            drumBass.play();
            buttonAnimation(key)
            break;
        default:
            break;
    }
}
// Função de Animação
function buttonAnimation(key){
    let keyPressed = document.querySelector('.' + key);

    keyPressed.classList.add('pressed');
    setTimeout(() => keyPressed.classList.remove('pressed'), 100);
}

