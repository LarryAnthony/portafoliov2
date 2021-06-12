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
		const hash = event.target.hash;
		const elemento = element.querySelectorAll(`a[href="${hash}"]`);
		elemento[0].classList.add("green-text");
		elemento[0].setAttribute("style", "font-weight: bold");
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
				j = evaluatedText.length;
				arrayCharacters = evaluatedText.split('');
			}
		}
	}, time);
}
typing('a developer      ', 'Larry Jácobo      ', 150, machine1)

// Counting

const experienceCount = document.getElementsByClassName("experience-count")[0]
const happyCount = document.getElementsByClassName("happy-count")[0]
const projectCount = document.getElementsByClassName("project-count")[0]
const awardCount = document.getElementsByClassName("award-count")[0]

const isIntersecting = (entry) => {
	return entry.isIntersecting;
}

const counting = (entry) => {
	let i = 0;
	let value = parseInt(entry.target.dataset.value);
	let speed = parseInt(entry.target.getAttribute("data-speed"));
	const printValue = setInterval(() => {
		if (i <= value) {
			entry.target.innerHTML = i;
			i++
		} else {
			clearInterval();
		}

	}, speed * 1000 / value);
	observer.unobserve(entry.target)
}

const observer = new IntersectionObserver((entries) => {
	entries.filter(isIntersecting).forEach(counting)
});
observer.observe(experienceCount);
observer.observe(happyCount);
observer.observe(projectCount);
observer.observe(awardCount);

const filter = document.getElementsByClassName("nav-link")
const filterArray = [...filter];
filterArray.forEach((option) => {
	option.addEventListener("click", function () {
		const arrayElement = [...option.parentElement.parentElement.children]
		arrayElement.forEach(elementA => {
			elementA.children[0].classList.remove("active");
		})
		option.classList.add("active");
	});
});

const carrusel = document.getElementsByClassName("card-carrusel");
const numberCards = carrusel.length;
let numberButtons;
const resizeObserver = new ResizeObserver(entries => {
	if (window.innerWidth <= 992) {
		numberButtons = numberCards
	} else {
		numberButtons = Math.ceil(numberCards / 2);
	}

	let divCarruselButton = document.getElementsByClassName("select-carrusel")[0];
	divCarruselButton.textContent = "";
	for (let i = 1; i <= numberButtons; i++) {
		let elementCarruselButton = document.createElement("div")
		elementCarruselButton.classList.add("button-carrusel"); //<div class="button-carrusel button1"><span></span></div>
		const elementCarruselSpan = document.createElement("span");
		elementCarruselButton.appendChild(elementCarruselSpan);
		divCarruselButton.appendChild(elementCarruselButton)
	}
	let selectCarruselArray = document.getElementsByClassName("button-carrusel");
	let j = 0;
	[...selectCarruselArray].forEach((element) => {
		element.addEventListener("click", () => {
			j++
			console.log("H", j);
		});
	});
});
const cuerpo = document.getElementsByTagName("body");
resizeObserver.observe(...cuerpo);

