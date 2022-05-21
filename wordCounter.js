let ta = document.getElementById("ta");
ta.addEventListener("input", function () {
	let text = this.value;
	let charc = text.length;
	let char = document.getElementById("char");
	char.innerHTML = charc;

	text = text.trim();
	let words = document.getElementById("words");
	let wordsA = text.split(" ");
	let cleanarray = wordsA.filter(function (e) {
		return e != "";
	});
	words.innerHTML = cleanarray.length;
});
