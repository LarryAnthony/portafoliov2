let hamburguer = document.getElementById("hamburguer-box");
let lines = document.getElementsByClassName("line-hamburguer");
let toggleBar = document.getElementById("toggle-bar");
hamburguer.addEventListener("click", function () {
	lines[1].classList.toggle("middle-line");
	lines[0].classList.toggle("first-line");
	lines[2].classList.toggle("last-line");
	toggleBar.classList.toggle("visible");
});
let list = document.querySelector("#toggle-bar ul").children
let newList = [...list]
newList.forEach(element => {
	element.addEventListener("click", function (event) {
		const arrayElement = [...element.parentElement.children]
		arrayElement.forEach(elementA => {
			elementA.children[0].removeAttribute("style", "font-weight: bold");
			elementA.children[0].classList.remove("green-text");
		})
		const hash = event.target.hash
		const elemento = element.querySelectorAll(`a[href="${hash}"]`)
		elemento[0].classList.add("green-text");
		elemento[0].setAttribute("style", "font-weight: bold")
	})
});
window.onload = function (event) {
	if (event.target.location.hash) {
		const hash = event.target.location.hash
		const elemento = document.querySelectorAll(`a[href="${hash}"]`);
		elemento[0].classList.add("green-text");
		elemento[0].setAttribute("style", "font-weight: bold")
	}
}
// action to row
document.getElementsByClassName("arrow")[0].addEventListener("click", function (event) {
	window.scrollTo({ top: 100 });
	window.location.hash = "about";
})
// Adding text
let machine1 = document.getElementById('type');
let typing = (text = '', text2 = '', time = 200, tag = '') => {
	let arrayCharacters = text.split('');
	tag.innerHTML = '';
	let i = 0;
	let j = text.length;
	let k = 0;
	let evaluatedText = text;
	let write = setInterval(function () {
		if (i >= 0 && i < arrayCharacters.length) {
			tag.innerHTML += arrayCharacters[i]
			i++
		} else if (i === arrayCharacters.length) {
			tag.innerHTML = evaluatedText.substring(0, j);
			j--;
			if (j === 0) {
				tag.innerHTML = '';
				i = 0;
				evaluatedText === text ? evaluatedText = text2 : evaluatedText = text
				console.log(evaluatedText)
				j = evaluatedText.length;
				arrayCharacters = evaluatedText.split('');
				console.log(arrayCharacters)
			}
		}
	}, time);
}
typing('a developer      ', 'Larry Jácobo      ', 150, machine1)