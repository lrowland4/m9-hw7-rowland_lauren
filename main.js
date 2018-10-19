var button = document.getElementsByTagName('button');

var locationsDiv = document.getElementsByClassName('hide-div');

var box = document.getElementsByTagName('article');


function changeColor() {

	this.classList.toggle('colorjs')
	
};

function changeOpacity() {

	this.classList.toggle('boxhover');
	
};

function showDiv(){

	this.nextElementSibling.classList.toggle('show-div');

};


for(i=0; i < button.length; i++){

	button[i].addEventListener('mouseenter', changeColor);
	button[i].addEventListener('mouseleave', changeColor);
	button[i].addEventListener('click', showDiv);

};

for(i=0; i < box.length; i++){

	box[i].addEventListener('mouseenter', changeOpacity);
	box[i].addEventListener('mouseleave', changeOpacity);

};
