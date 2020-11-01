let body = document.getElementById('full')
let css = document.getElementById('css')
let generate = document.getElementById('button')


generate.addEventListener("click", changeBackGround);

function changeBackGround(){
    let color1 = document.getElementById('color1').value;
    let color2 = document.getElementById('color2').value;
    let range1 = document.getElementById('range1').value;
    let range2 = document.getElementById('range2').value;
    let background = "linear-gradient(to right, "+color1+" "+range1+"%, " +color2+" "+range2+"%)";
    body.style.background = background;
    css.innerHTML = background;
}

