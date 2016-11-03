///// INITIAL VARIABLES

var treeLimbs = {}; // Object to hold user input on 'click' or 'keypress' event
var growButton = document.getElementById("grow"); // Variable representing button in DOM
var space = " ";

///// EVENT LISTENERS

growButton.addEventListener("click", growTree);

field.addEventListener("keyup", function(keyPress){ // Event listener on text field for 'enter' keypress
	var chars = document.getElementById("field").value
	keyPress.preventDefault();
	if (chars.length > 1) {
		alert("Enter just one character, plz."); // Prevents user from entering more than one character.
	} else if (keyPress.keyCode == 13) {
		document.getElementById("grow").click();
	};
});

height.addEventListener("keyup", function(keyPress){ // Event listener on text field for 'enter' keypress
	var integer = document.getElementById("height");
	keyPress.preventDefault();
	if(keyPress.keyCode < 48 && keyPress.keyCode !== 8 && keyPress.keyCode !== 13 || keyPress.keyCode > 57 && keyPress.keyCode !== 8 && keyPress.keyCode !== 13) {
		alert("Enter only integers, plz."); // Prevents user from entering anything other than an integer
	} else if (keyPress.keyCode == 13) {
		document.getElementById("grow").click();
	};
});

///// FUNCTIONS

function tree(treeLimbs) {
	console.log("Click event"); // console log click event
	treeLimbs.leaves = document.getElementById("field").value; // user input -> object
	treeLimbs.height = document.getElementById("height").value; // user input -> object
	var char = []; // creating empty array for tree building blocks
	var spaceAmt = treeLimbs.height;
	console.log(treeLimbs);

	for (var i = 0; i < treeLimbs.height; i++) {
		var charStack = (i * 2) + 1; // number of characters printed per iteration
		spaceAmt -= 1; // with each iteration, one less space is printed
		console.log(space.repeat(spaceAmt) + treeLimbs.leaves.repeat(charStack));
	}
}

function growTree() {
	treeLimbs.leaves = document.getElementById("field").value; // user input -> object
	treeLimbs.height = document.getElementById("height").value; // user input -> object
	tree(treeLimbs);
}

///// TREE-BUILDING LOOP

for (var i = 0; i < treeLimbs.height; i++) {
	var charStack = (i * 2) + 1; // Number of characters printed per iteration
	spaceAmt -= 1; // With each iteration, one less space is printed
	console.log(space.repeat(spaceAmt) + treeLimbs.leaves.repeat(charStack));
}