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
// document.getElementsByClassName("arrow")[0].addEventListener("click", function (event) {
// 	window.scrollTo({ top: 100 });
// 	window.location.hash = "about";
// })
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
		elementCarruselButton.dataset.number = i;
		const elementCarruselSpan = document.createElement("span");
		elementCarruselButton.appendChild(elementCarruselSpan);
		divCarruselButton.appendChild(elementCarruselButton)
	}
	let selectCarruselArray = document.getElementsByClassName("button-carrusel");
	[...selectCarruselArray].forEach((element) => {
		element.addEventListener("click", () => {
			[...element.parentElement.children].forEach((child) => {
				child.classList.remove("active");
			});
			const valorDataset = parseInt(element.dataset.number);
			console.log(valorDataset);
			element.classList.add("active");
			[...carrusel].forEach((elementCard) => {
				let valorLeft;
				if (window.innerWidth <= 992) {
					valorLeft = (-(valorDataset - 1) - ((valorDataset - 1) * 3 / 100)) * 100;
				} else {
					valorLeft = (-(valorDataset - 1)) * 100;
				}
				elementCard.style.left = `${valorLeft}%`;
				console.log("ok", valorLeft)
			});
		});
	});
});
const cuerpo = document.getElementsByTagName("body");
resizeObserver.observe(...cuerpo);


// year and age

const date = new Date();
const year = date.getFullYear();
const birth = new Date(1988, 04, 23)
const age = Math.floor((date - birth) / 1000 / 60 / 60 / 24 / 365);
const ageSpan = document.getElementById("age");
ageSpan.textContent = age;
const yearSpan = document.getElementById("year");
yearSpan.textContent = year;

// validate form

const emailForm = document.getElementById("email-form");
const nameForm = document.getElementById("name-form");
const contentForm = document.getElementById("content-form");
const btnEnviar = document.getElementById("button-form");
const errorMessageDiv = document.getElementById("errorMessage");
const form = document.getElementById("send-email");
const spinner = document.querySelector(".spinner");

nameForm.addEventListener("blur", validarFormulario);
emailForm.addEventListener("blur", validarFormulario);
contentForm.addEventListener("blur", validarFormulario);
form.addEventListener("submit", sendEmail);

function validarFormulario(event) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (event.target.value.length > 0) {
		const error = document.querySelector("p.error");
		if (error) {
			error.remove();
		}
		event.target.style.borderColor = "";
	} else {
		event.target.style.borderColor = "red";
		mostrarError("All fields are required");
	}
	if (event.target.type === "email") {
		const result = event.target.value.indexOf("@");
		if (re.test(event.target.value)) {
			const error = document.querySelector("p.error");
			if (error) {
				error.remove();
			}
			event.target.style.borderColor = "";
		} else {
			event.target.style.borderColor = "red";
			mostrarError("Email not valid");
		}
	}
	if (re.test(emailForm.value) && nameForm.value !== "" && contentForm.value !== "") {
		btnEnviar.classList.remove("button-disable");
		btnEnviar.disabled = false;
	} else {
		console.log("no pasaste la validación")
	}
}
function mostrarError(mensaje) {
	const errorMessage = document.createElement("p");
	errorMessage.textContent = mensaje;
	errorMessage.classList.add("error");

	const errorsCount = document.querySelectorAll(".error");
	if (errorsCount.length === 0) {
		errorMessageDiv.appendChild(errorMessage);
	}


}

let pSent = document.createElement("p");
pSent.classList.add("error")

async function sendEmail(e) {
	e.preventDefault();
	btnEnviar.classList.add("button-disable");
	btnEnviar.disabled = true
	const name = document.getElementById("name-form").value;
	const email = document.getElementById("email-form").value;
	const content = document.getElementById("content-form").value;
	spinner.style.display = "flex";

	let data = {
		asunto: `Email sent by ${name}`,
		remitentes: "ajacobozare@gmail.com",
		cuerpo: `Email send from ${email} with this content: ${content}`
	};
	const response = await fetch("https://new.larry-jacobo.com/api/email", {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		method: "POST",
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin',
		body: JSON.stringify(data)
	});
	setTimeout(() => {
		btnEnviar.classList.remove("button-disable");
		btnEnviar.disabled = false
		spinner.style.display = "none";
		if (response.ok) {
			pSent.innerHTML = "Sent successfully";
			pSent.style.backgroundColor = "var(--secondary-color)";
			pSent.style.color = "white";
		} else {
			pSent.innerHTML = "Sent with errors, try again";
			pSent.style.backgroundColor = "red";
			pSent.style.color = "white";
		}
		errorMessageDiv.appendChild(pSent);
		setTimeout(() => {
			pSent.remove();
		}, 3000);
	}, 1000);
}
