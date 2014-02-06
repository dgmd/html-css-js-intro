console.log('Creating #two');
var two = document.createElement('div');
two.id = 'two';
document.body.appendChild(two);

console.log('Creating #one');
var one = document.createElement('div');
one.id = 'one';

console.log('Putting #two inside #one');
two.appendChild(one);

console.log('Making #one yellow');
one.setAttribute('style','background-color: yellow;');

function move(element, x, y) {
	element.style.left = x;
	element.style.top = y;
}

function animateMove(element, xFinal, yFinal) {
    var time = null;
    var now = new Date().getTime(),
	dt = 1;
    var speed = 1;

    time = now;
    xPos = getPosition(element, 'left');
    yPos = getPosition(element, 'top');

    var xMoveTo = xPos + speed*dt + 'px';
    var yMoveTo = yPos + speed*dt + 'px';

    if (!(xMoveTo > xFinal || yMoveTo > yFinal)) {
		move(element, xMoveTo, yMoveTo);
	}
}

function moveSquare() {
	var animationFrame = webkitRequestAnimationFrame(moveSquare);

	animateMove(two, xMax, yMax);

	if (xPos > xMax || yPos > yMax) {
		console.log("Closing the animation frame; xPos = " + xMax + " and yPos = " + yPos);
		webkitCancelAnimationFrame(animationFrame);
		console.log("Done moving the square; either xPos > xMax or yPos > yMax");
	}
}

function getPosition(element, attribute) {
	return parseInt(window.getComputedStyle(element)[attribute], 10);
}

console.log("Getting the position of #two");
var xMin = getPosition(two, 'left');
var xMax = window.innerWidth - getPosition(two, 'width');

var yMin = getPosition(two, 'top');
var yMax = window.innerWidth - getPosition(two, 'height');

console.log("Actually begining to move #two using moveSquare");
moveSquare();
