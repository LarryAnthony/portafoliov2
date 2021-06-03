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
			elementA.children[0].classList.remove("green-text");
		})
		const hash = event.target.hash
		const elemento = element.querySelectorAll(`a[href="${hash}"]`)
		elemento[0].classList.add("green-text");
	})
});
window.onload = function (event) {
	console.log(event.target.location.hash)
	if (event.target.location.hash) {
		const hash = event.target.location.hash
		const elemento = document.querySelectorAll(`a[href="${hash}"]`);
		elemento[0].classList.add("green-text");
	}
}