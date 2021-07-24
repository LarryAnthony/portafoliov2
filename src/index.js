import './style/style.css';
import './libs/iconoPortafolioLarry-v1.0/style.css';
import '@dmuy/toast/dist/mdtoast.css';
import mdtoast from '@dmuy/toast';

const API_KEY = process.env.API_KEY;
const URL = process.env.URL_NOTIFICACION;
let lat = null;
let lng = null;

let swReg;
if (navigator.serviceWorker) {
	window.addEventListener('load', function () {
		navigator.serviceWorker.register('sw.js').then(function (reg) {
			swReg = reg;
			swReg.pushManager.getSubscription().then(verificaSubscripcion);
		})
	});

}

let hamburguer = document.getElementById("hamburguer-box");
let lines = document.getElementsByClassName("line-hamburguer");
let toggleBar = document.getElementById("toggle-bar");
let imageIntro = document.querySelector(".image-intro");
let wrap = document.querySelector("#wrap");
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
wrap.addEventListener("click", function () {
	toggleBar.classList.remove("visible");
	lines[1].classList.remove("middle-line");
	lines[0].classList.remove("first-line");
	lines[2].classList.remove("last-line");
})
window.onload = function (event) {
	imageIntro.style.backgroundImage = "url('assets/images/fondo1.jpg')";
	if (event.target.location.hash) {
		const hash = event.target.location.hash
		const elemento = document.querySelectorAll(`a[href="${hash}"]`);
		elemento[0].classList.add("green-text");
		elemento[0].setAttribute("style", "font-weight: bold")
	}
	navigator.geolocation.getCurrentPosition(pos => {
		lat = pos.coords.latitude;
		lng = pos.coords.longitude;
	});
}
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

// Bar percent graphic

const barPercentNode = document.querySelectorAll(".bar .increasing-bar");
const barPercentArray = [...barPercentNode];

barPercentArray.forEach((element) => {
	const percentValue = element.dataset.percent;
	element.style.width = percentValue;
})

// Carrousel

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
		if (i === 1) {
			elementCarruselButton.classList.add("active");
		}
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
			element.classList.add("active");
			[...carrusel].forEach((elementCard) => {
				let valorLeft;
				if (window.innerWidth <= 992) {
					valorLeft = (-(valorDataset - 1) - ((valorDataset - 1) * 3 / 100)) * 100;
				} else {
					valorLeft = (-(valorDataset - 1)) * 100;
				}
				elementCard.style.left = `${valorLeft}%`;
			});
		});
	});
});
const cuerpo = document.getElementsByTagName("body");
resizeObserver.observe(...cuerpo);


// year and age

const date = new Date();
const year = date.getFullYear();
const birth = new Date(1988, 4, 23)
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
		console.log("no pasaste la validación del formulario")
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
		cuerpo: `Email send from ${email} with this content: ${content}. 
			latitud: ${lat}
			Longitud: ${lng} 
		`
	};
	const response = await fetch(API_KEY, {
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
	form.reset();
}

function isOnline() {
	if (navigator.onLine) {
		spinner.style.display = "none";
		mdtoast('Online', {
			interaction: true,
			actionText: 'OK'
		});
	} else {
		mdtoast('Offline', {
			interaction: true,
			actionText: 'OK',
			type: 'warning'
		});
	}
}

window.addEventListener('online', isOnline);
window.addEventListener('offline', isOnline);

isOnline();


// Notificaciones
let buttonActivada = document.querySelector('.btn-noti-activated');
let buttonDesactivada = document.querySelector('.btn-noti-disactivated');

function verificaSubscripcion(activadas) {
	if (activadas) {
		buttonActivada.classList.remove('oculto');
		buttonDesactivada.classList.add('oculto');
	} else {
		buttonActivada.classList.add('oculto');
		buttonDesactivada.classList.remove('oculto');
	}
}

function enviarNotificacion() {
	const notificacionOpts = {
		body: 'Este es el cuerpo de la notificación',
		icon: 'assets/images/anthonyopt.jpg'
	}
	const n = new Notification('Hola mundo', notificacionOpts);

	n.onclick = () => {
		console.log('click');
	}
}

function notificarme() {
	if (!window.Notification) {
		console.log('este navegador no recibe notificaciones');
		return;
	}
	if (Notification.permission === 'granted') {
		enviarNotificacion();
	} else if (Notification.permission !== 'denied' || Notification.permission !== 'default') {
		Notification.requestPermission(function (permission) {
			console.log(permission);
			if (permission === 'granted') {
				enviarNotificacion();
			}
		});
	}
}
// notificarme();

function getPublicKey() {
	return fetch(`${URL}/api/notification/key`, {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'api-key': 'c9a95004-ac91-4349-97c3-d5928d436669'
		},
		method: "GET",
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin',
	})
		.then(res => res.arrayBuffer())
		.then(key => new Uint8Array(key));
}

// getPublicKey().then(console.log);

buttonDesactivada.addEventListener('click', function () {
	if (!swReg) return console.log('No hay registro de SW');

	getPublicKey().then(function (key) {
		swReg.pushManager.subscribe({
			userVisibleOnly: true,
			applicationServerKey: key
		})
			.then(res => res.toJSON())
			.then((suscripcion) => {
				fetch(`${URL}/api/notification/subscribe`, {
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'api-key': 'c9a95004-ac91-4349-97c3-d5928d436669'
					},
					method: "POST",
					mode: 'cors', // no-cors, *cors, same-origin
					cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
					credentials: 'same-origin',
					body: JSON.stringify(suscripcion)
				})
					.then(verificaSubscripcion)
					.catch(cancelarSuscripcion)
			})
	});
})

function cancelarSuscripcion() {
	swReg.pushManager.getSubscription().then(subs => {
		subs.unsubscribe().then(() => verificaSubscripcion(false));
	});
}

buttonActivada.addEventListener('click', function () {
	cancelarSuscripcion();
});