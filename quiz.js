
var growButton = document.getElementById("grow"); // variable representing button in DOM
var treeLimbs = {}; // empty object to hold user input
var space = " ";

growButton.addEventListener("click", tree);

function tree(treeLimbs) {
	console.log("Click event"); // console log click event
	treeLimbs.leaves = document.getElementById("field").value; // user input -> object
	treeLimbs.height = document.getElementById("height").value; // user input -> object
	var char = []; // creating empty array for tree building blocks
	var spaceAmt = treeLimbs.height;
	console.log(treeLimbs);

	for (var i = 0; i < treeLimbs.height; i++) {
		var charStack = (i * 2) + 1; //number of characters printed per iteration
		spaceAmt -= 1; // with each iteration, one less space is printed
		console.log(space.repeat(spaceAmt) + treeLimbs.leaves.repeat(charStack));	
	}
}












