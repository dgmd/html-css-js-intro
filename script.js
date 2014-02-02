
var two = document.createElement('div');
two.id = 'two';
document.body.appendChild(two);

var one = document.createElement('div');
one.id = 'one';
two.appendChild(one);

one.setAttribute('style','background-color: yellow;');