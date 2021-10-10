function biggerFunction() {
	var x = document.getElementById("myTextArea");
	if(x != null) {
		x.style.fontSize = "24pt";
	}
}

function fancyOrBoring() {
	var x = document.getElementById("myTextArea");
	if(x != null) {
		var y = document.getElementById("fancy");
		var z = document.getElementById("boring");
		if(y != null && z != null) {
			
			if(y.checked) {
				x.style.fontWeight = "bold"
				x.style.textDecoration = "underline";
				x.style.color = "blue";
			}
			else if (z.checked) {
				x.style.fontWeight = "normal";
				x.style.textDecoration = "none";
				x.style.color = "black";
			}
			else {
				console.log("Problem with Method fancyOrBoring() in fancymytext.js");
			}
		}
	}
}
function mooFunction() {
	var x = document.getElementById("myTextArea");
	if(x != null) {
		var y = x.value;
		if(y != null) {
			if(y.value != "") {
				var newText = y.toUpperCase();
				
				var str = newText;
				var parts = str.split(".");
				str = parts.join("-Moo.");
				x.value = str;
			}
		}
	}
}