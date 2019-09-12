var keyBoard = document.getElementById('qwerty');
var choosePhrase = document.getElementById('phrase');
var missed = 0;
var startButton = document.getElementsByClassName('btn__reset')[0];
var pharseArray = ['apple','banana','cake','peach','button'];


startButton.addEventListener('click', ()=> {
	document.getElementById('overlay').style.opacity = 0;
});


function getRandomPhraseAsArray(arr) {
	var randomPhrase = arr[Math.floor(Math.random()*arr.length)];
    randomPhrase.split("(?!^)");
    return randomPhrase;
}


var phrase = getRandomPhraseAsArray(pharseArray);

function addPhraseToDisplay(arr) {
	for (var i = 0; i < arr.length; i++) {
		var add = arr[i];
		var ul = choosePhrase.children;
		var li = document.createElement('li');
		ul.appendChild(li);
		li.textContent = add;
		if (add !== '') {
			li.className = 'letter';
		} else {
			li.className = 'space';
		}
	}
}

addPhraseToDisplay(phrase);