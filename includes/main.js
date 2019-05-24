/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];


function initiateApp(){
	$(function() {
		$( "#sortable" ).sortable();
	 });
	
	makeGallery(pictures);
	$('figure').on('click', displayImage);
	$('img').on('click', addModalCloseHandler);
	
}


function makeGallery(){
	for (var imgIndex = 0; imgIndex < pictures.length; imgIndex++){
		var image = createImageElement(pictures[imgIndex]);
		$('section').append(image);
	}
}
	
function createImageElement(imgSource){
	var imgContainer = $('<figure>', { class: 'imageGallery'});
	imgContainer.css({
		"background-image": "url('" + imgSource + "')",
	});

	imgContainer.addClass('ui-state-default');
		
	return imgContainer;

 }

	 
function addModalCloseHandler(){
	$('#galleryModal').modal('hide');

}

function displayImage() {
 	
			var imgUrl = $(this).css('background-image');
			var imgUrlA = imgUrl.replace(/(url\(|\)|")/g, '');
			var imgUrlB = imgUrlA.split('/');      // splits each word into array
			imgUrlC = imgUrlB[imgUrlB.length - 1];
			imgUrlD = imgUrlC.split('.')[0];
	
			$('img').attr("src", imgUrlA);
			$('.modal-title').text(imgUrlD);
			$('#galleryModal').modal('show');
					
}	

