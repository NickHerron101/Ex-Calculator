console.log("hello");

var outputDiv = document.getElementById("outputDiv");
var buttons = document.getElementsByClassName("operation");
console.log("buttons",buttons);

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function(event){
		console.log(event);
	var a = parseInt(document.getElementById("inputA").value);
	var b = parseInt(document.getElementById("inputB").value);
		operate(a, b, event);
	})
}
// function handleClick(event) {
// 	console.log(event);
// 	var elementText = event.target.innerHTML;
// 	saywhat.innerHTML = "You clicked on " + elementText;
// }

function multiply (a, b) {
	return a * b;
}

function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function divide (a, b) {
	return a / b;
}

function operate (a, b, event) {
	if (event.target.innerHTML === "Add") {
		outputDiv.innerHTML = add(a, b);
	} else if (event.target.innerHTML === "Subtract"){
		outputDiv,innerHTML = subtract(a, b);
	} else if (event.target.innerHTML === "Multiply"){
		outputDiv.innerHTML= multiply(a, b);
	} else if (event.target.innerHTML === "Divide"){
		outputDiv.innerHTML = divide(a, b);
	}
}

