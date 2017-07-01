"use strict";

function clozeCard(text,cloze) {

	this.cloze = cloze;
	this.fullText = fullText;
	this.partial = fullText.replace(cloze, "...");;
	this.clozeErr = function () {
		if(fullText.indexOf(cloze) < 0) {
		console.log("Error: Incorrect input, there was no deletion");
	}
}

module.exports = CloseCard;

