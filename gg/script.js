function calcu(event){
    console.log("Hi");
}

const num = document.querySelectorAll('.op');
num.forEach(num => {
    addEventListener("click", calcu);
});