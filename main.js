"use strict";
 

var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");
var fs = require("fs");




function welcome () {
	inquirer.prompt([ 

		{	type: 'list',
            name: 'options',
            message: 'What would you like to do?',
            choices: ['Basic Flashcard', 'Cloze Flashcard']
                 
	}]).then(function(choice){

            switch (selection.userChoice){

                case "Basic Flashcard":
                    BasicFlashcard();
                break;

                case "Cloze Flashcard":
                    ClozeFlashcard();
                
            }
        })
    }

    function basicFlashcard(card) {

    	var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

		// "Who was the first president of the United States?"
		console.log(firstPresident.front); 

		console.log(******************);

		// "George Washington"
		console.log(firstPresident.back); 

		console.log(..................);

    }

    function clozeFlashcard(card) {


    	var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

			// "George Washington"
			console.log(firstPresidentCloze.cloze); 

			// " ... was the first president of the United States.
			console.log(firstPresidentCloze.partial); 

			console.log(******************);

		// "George Washington was the first president of the United States.
			console.log(firstPresidentCloze.fullText);

			console.log(.....................);

		// log an error because "oops" doesn't appear in "This doesn't work"
		var brokenCloze = new ClozeCard("This doesn't work", "oops");

			console.log(brokenCloze.clozeErr)
    }

welcome();

}();