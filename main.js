var text = document.querySelector('#text-wrap');
var word = text.getElementsByTagName('span');

var i = 0;

function rotate() {
    word[i].style.display = 'none';
    i = (i + 1) % word.length
    word[i].style.display = 'initial';
}

setInterval(rotate, 800)