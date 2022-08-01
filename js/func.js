window.onload = function() {
    const collection = document.getElementsByTagName("button");
	collection[0].addEventListener("click",func);
};

var cards = ['10_of_clubs.png','10_of_diamonds.png','10_of_hearts.png','10_of_spades.png','2_of_clubs.png','2_of_diamonds.png','2_of_hearts.png','2_of_spades.png','3_of_clubs.png','3_of_diamonds.png','3_of_hearts.png','3_of_spades.png','4_of_clubs.png','4_of_diamonds.png','4_of_hearts.png','4_of_spades.png','5_of_clubs.png','5_of_diamonds.png','5_of_hearts.png','5_of_spades.png','6_of_clubs.png','6_of_diamonds.png','6_of_hearts.png','6_of_spades.png','7_of_clubs.png','7_of_diamonds.png','7_of_hearts.png','7_of_spades.png','8_of_clubs.png','8_of_diamonds.png','8_of_hearts.png','8_of_spades.png','9_of_clubs.png','9_of_diamonds.png','9_of_hearts.png','9_of_spades.png','ace_of_clubs.png','ace_of_diamonds.png','ace_of_hearts.png','ace_of_spades.png','black_joker.png','jack_of_clubs2.png','jack_of_diamonds2.png','jack_of_hearts2.png','jack_of_spades2.png','king_of_clubs2.png','king_of_diamonds2.png','king_of_hearts2.png','king_of_spades2.png','queen_of_clubs2.png','queen_of_diamonds2.png','queen_of_hearts2.png','queen_of_spades2.png','red_joker.png']
var finished = 0;

function func() {
	if (finished == 1) {
		return;
	}
	var idx = Math.floor(Math.random() * cards.length);
	const collection = document.getElementsByTagName("button");
	collection[0].style.backgroundImage = 'url("./imgs/cards/' + cards[idx] + '")';
	collection[0].style.backgroundColor = '#ffffff';
	collection[0].style.backgroundSize = 'cover';
	collection[0].innerHTML = '';
	if (cards[idx] == "6_of_clubs.png") {
		collection[0].innerHTML = "EHHHHHHHHHHHHHHH"
		collection[0].style.color = "red";
		collection[0].style.fontSize = "180%";
		finished = 1;
	}
	cards.splice(idx, 1);
}