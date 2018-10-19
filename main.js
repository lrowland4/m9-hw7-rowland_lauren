var button = document.getElementsByTagName('button');

var locationsDiv = document.getElementsByClassName('hide-div');


function changeColor() {

	this.classList.toggle('colorjs')
	
};

function showDiv(){

	this.nextElementSibling.classList.toggle('show-div');

};


for(i=0; i < button.length; i++){

	button[i].addEventListener('mouseenter', changeColor);
	button[i].addEventListener('mouseleave', changeColor);
	button[i].addEventListener('click', showDiv);
};


