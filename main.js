var button = document.getElementsByTagName('button');

function changeColor() {

	this.classList.toggle('colorjs')
	
};


for(i=0; i < button.length; i++){

	button[i].addEventListener('mouseenter', changeColor);
	button[i].addEventListener('mouseleave', changeColor);
};


