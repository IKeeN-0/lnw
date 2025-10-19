function onClick(event){
    if (event.currentTarget.classList.contains('Inside')) {
        event.stopPropagation();
        buttonInside.classList.toggle('InsideClick');
        buttonOutside.classList.toggle('OutsideClick');
    } 
    else if (event.currentTarget.classList.contains('Outside')) {
        buttonOutside.classList.toggle('OutsideClick');
    }
}

function reset(){
    buttonOutside.classList.remove('OutsideClick');
    buttonInside.classList.remove('InsideClick');
}

const buttonOutside = document.querySelector('.Outside');
const buttonInside = document.querySelector('.Inside');
const button = document.querySelector('.button');
buttonOutside.addEventListener('click', onClick);
buttonInside.addEventListener('click', onClick);
button.addEventListener('click', reset);