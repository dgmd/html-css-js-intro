
var two = document.createElement('div');
two.id = 'two';
document.body.appendChild(two);

var one = document.createElement('div');
one.id = 'one';
two.appendChild(one);

one.setAttribute('style','background-color: yellow;');

function moveSquare(x, y) {
	// Open an animation frame
	var animationFrame = webkitRequestAnimationFrame(moveSquare);

	var element = document.getElementById('two');
	
	var finalX = getPosition(element, 'left') + x;
	var finalY = getPosition(element, 'top') + y;

	var remainingX = finalX, remainingY = finalY;
	var stepSize = 1;
	while (remainingX > 0 && remainingY > 0) {
		var newTop = getPosition(element, 'top') + stepSize;
		element.style.top = newTop + 'px';
		remainingY -= stepSize;

		var newLeft = getPosition(element, 'left') + stepSize;
		element.style.left = newLeft + 'px';
		remainingX -= stepSize;
	}

	// Close the animation frame; we don't need the GPU any more
	webkitCancelAnimationFrame(animationFrame);
}

function getPosition(element, attribute) {
	return parseInt(window.getComputedStyle(element)[attribute], 10);
}


// Actually move the square
moveSquare(100, 100);