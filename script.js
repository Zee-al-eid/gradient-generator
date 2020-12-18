const full = document.getElementById('full');
const css = document.getElementById('css');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const range1 = document.getElementById('range1');
const range2 = document.getElementById('range2');
const copy = document.getElementById('button');
const tooltip = document.getElementById("myTooltip");
const left = document.getElementById('left')
const leftBottom = document.getElementById('left-bottom');
const leftTop = document.getElementById('left-top')
const up = document.getElementById('top')
const radial = document.getElementById('radial');
const bottom = document.getElementById('bottom')
const rightTop = document.getElementById('right-top')
const rightBottom = document.getElementById('right-bottom')
const right = document.getElementById('right')

changeBackGround = (dir) => {
	const directions = document.querySelectorAll('input[name="directions"]');
	let selectedValue;
	for (const direction of directions) {if (direction.checked) {selectedValue = direction.value; break;}}
    let background = "background: "+selectedValue+ ", "+color1.value+" "+range1.value+"%, " +color2.value+" "+range2.value+"%)";
    full.style= background + ' no-repeat fixed center'; 
	console.log(full.style.background);
    css.innerHTML = background;
}

copyToClipboard = (element) => {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

copied = () => {tooltip.innerHTML = "Copied";}
copycss = () => {tooltip.innerHTML = "Copy to clipboard";}

color1.addEventListener("input", changeBackGround);
color2.addEventListener("input", changeBackGround);
range1.addEventListener("input", changeBackGround);
range2.addEventListener("input", changeBackGround);
copy.addEventListener("click", copied);
copy.addEventListener("mouseout", copycss);
right.addEventListener("click", changeBackGround);
left.addEventListener("click", changeBackGround);
rightBottom.addEventListener("click", changeBackGround);
leftBottom.addEventListener("click", changeBackGround);
rightTop.addEventListener("click", changeBackGround);
leftTop.addEventListener("click", changeBackGround);
up.addEventListener("click", changeBackGround);
bottom.addEventListener("click", changeBackGround);
radial.addEventListener("click", changeBackGround);
