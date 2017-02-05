$(document).ready(function(){
	//inital button creation on load, renderButtons fxn on (line 64)
	renderButtons();
	//on click of submit button run newButton(line 79) fxn to create a new button
	$('#addWord').click(newButton);
	//on click of the documents element that has class .wordBtn run fxn displayGifs(line 15)
	$(document).on('click', '.wordBtn', displayGifs);	
});
//global variables with arrays that will hold the two img src urls for each giphy
var srcStill = [];
var srcGif = [];
//preloaded buttons array
var wordArr = ['happy', 'sad', 'pissed', 'cold', 'drunk', 'sleepy', 'hangry', 'lost', 'crazy'];
//display function
function displayGifs(){
	//empty the giphy area
	$('#giphyView').empty();
	//store word choice from click event by accessing the data-word attribute on the button(this)
	var word = $(this).attr('data-word');
	//api query stored in variable 
	var queryURL = 'https://api.giphy.com/v1/gifs/search'
	//make ajax call to giphy api
	$.ajax({
		url: queryURL,
		method: 'GET',
		data: {
			api_key: 'dc6zaTOxFJmzC',
			q: word,
			limit: 9
		}
	}).done(function(response){
		//on done, clear the src arrays
		srcStill = [];
		srcGif = [];
		//data.length should be 9 based on my index set in the api parameters (i know that the instructions said 10 but the styling is ugly with 10 and I wanted to have them in rows of 3)
		for (var i = 0; i < response.data.length; i++){	
			//make div to store the new giphy and rating together, paired for styling
			var newGiphyOpen = $('<div>');
			newGiphyOpen.attr('class', 'gif')
			newGiphyOpen.attr('id', 'gif' + i)
			var newGiphyClose = $('</div>')
			//store response pieces needed in variables
			var rating = response.data[i].rating;
			srcGif.push(response.data[i].images.original.url);
			srcStill.push(response.data[i].images.original_still.url);
			//the rating stored in <p> element 
			var ratingElement = $('<p>');
			ratingElement.text('Rated: ' + rating);
			ratingElement.attr('class', 'rating')
			//the giphy stored in an <img> element
			var gifElement = $('<img src = "' + srcStill[i] + '">');
			gifElement.attr('class', 'gif')
			gifElement.attr('data-state', 'still')
			gifElement.attr('data-index', i)
			//post div to the dom, then post the <p> and <img> elements and close the div
			$('#giphyView').append(newGiphyOpen);
			$('#gif' + i).append(ratingElement);
			$('#gif' + i).append(gifElement);
			$('#giphyView').append(newGiphyClose);
		};
	});
};
//Used to make the buttons
function renderButtons(){
	//clear buttonsView window
	$('#buttonsView').empty();
	//loop through word array
	for (var i = 0; i < wordArr.length; i++) {
		//create button 
		var create = $('<button>');
		create.attr('data-word', wordArr[i]);
		create.addClass('btn btn-primary wordBtn');
		create.text(wordArr[i]);
		//append to DOM
		$('#buttonsView').append(create);
	};
};
//submitting a new button to the list
function newButton(){
		//store the new word
		var word = $('#word-input').val().trim();
		if (word !== '') {
			//push word to array
			wordArr.push(word);
			//run function to make buttons
			renderButtons();
		}else{
			//Don't allow a button to be created for '' or ' '
			alert("You must enter a word to create a new button.")
		}
		//emptys the input box for the next word
		$('#word-input').val('');
		//return false allows the user to click 'enter' and stops the page from refreshing.
		return false;
}
//this controls the start/stop of the gifs on the click event, when the document is clicked on an element with class of gif 
$(document).on('click', '.gif', function() {
  //Using the attr jQuery method to get the value of the data attributes on our HTML element, index is used to access the correct position in the src arrays
  var state = $(this).attr('data-state');
  var index = $(this).attr('data-index');
  //If the state is 'still' on the click, use the srcGif to make animate and change the state to animate
  if (state === 'still') {
    $(this).attr('src', srcGif[index]);
    $(this).attr('data-state', 'animate');
  } else {
  	//else on the click use the srcStill and change the state to still
    $(this).attr('src', srcStill[index]);
    $(this).attr('data-state', 'still');
  }
});






