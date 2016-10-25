
var growButton = document.getElementById("grow"); // Variable representing button in DOM
var space = " ";

growButton.addEventListener("click", tree);

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
	if(keyPress.keyCode < 48 && keyPress.keyCode !== 8 || keyPress.keyCode > 57 && keyPress.keyCode != 8) {
		alert("Enter only integers, plz."); // Prevents user from entering anything other than an integer
	} else if (keyPress.keyCode == 13) {
		document.getElementById("grow").click();
	};
});

function tree(treeLimbs) {
	var treeLimbs = { // object to hold user input
		leaves: document.getElementById("field").value, // user input
		height: document.getElementById("height").value // user input
	};
	var spaceAmt = treeLimbs.height;

	for (var i = 0; i < treeLimbs.height; i++) {
		var charStack = (i * 2) + 1; // Number of characters printed per iteration
		spaceAmt -= 1; // With each iteration, one less space is printed
		console.log(space.repeat(spaceAmt) + treeLimbs.leaves.repeat(charStack));
	}
}