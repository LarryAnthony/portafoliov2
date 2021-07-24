importScripts('https://cdn.jsdelivr.net/npm/pouchdb@7.2.1/dist/pouchdb.min.js')
const API_KEY = 'https://new.larry-jacobo.com/api/email';
const STATIC_CACHE = 'static-v7';
const DYNAMIC_CACHE = 'dynamic-v1';
const INMUTABLE_CACHE = 'inmutable-v1';

function actualizarCacheDinamico(dynamicCache, req, res) {
	if (res.ok) {
		return caches.open(dynamicCache).then(cache => {
			cache.put(req, res.clone());
			return res.clone();
		});
	} else {
		return res;
	}
}

function actualizarCacheEstatico(staticCache, req, shell_inmutable) {
	if (shell_inmutable.includes(req.url)) {

	} else {
		return fetch(req)
			.then(res => {
				return actualizarCacheDinamico(staticCache, req, res);
			});
	}
}

// Utilidades para grabar pouchDB
const db = new PouchDB('mensaje');

function guardarMensaje(mensaje) {
	mensaje._id = new Date().toISOString();
	return db.put(mensaje).then(() => {
		self.registration.sync.register('nuevo-post');
		const newResp = { ok: true, offline: true };
		return new Response(JSON.stringify(newResp));
	});
}

function manejoApiMensajes(cacheName, req) {
	if ((req.url.indexOf('/api/notification/key') >= 0) || req.url.indexOf('/api/notification/subscribe') || req.url.indexOf('/api/notification/push') >= 0) {
		return fetch(req);
	} else if (req.clone().method === 'POST') {
		// POSTEO de nuevos mensajes
		if (self.registration.sync) {
			return req.clone().text().then(body => {
				const bodyObj = JSON.parse(body);
				guardarMensaje(bodyObj);
			});
		} else {
			return fetch(req)
		}

	} else {
		return fetch(req).then(res => {
			if (res.ok) {
				actualizarCacheDinamico(cacheName, req, res.clone());
				return res.clone();
			} else {
				return caches.match(req);
			}
		}).catch(err => {
			return caches.match(req);
		});
	}
}

const APP_SHELL = [
	'/',
	'index.html',
	'assets/images/fondo1.jpg',
	'assets/images/anthonyopt.jpg',
	'assets/images/anthonyfavicon.png',
	'main.js',
	'assets/main.css'
]

const APP_SHELL_INMUTABLE = [
	'https://cdn.jsdelivr.net/npm/pouchdb@7.2.1/dist/pouchdb.min.js'
]

self.addEventListener('install', e => {
	const cacheStatic = caches.open(STATIC_CACHE).then(cache => {
		cache.addAll(APP_SHELL);
	});
	const cacheInmutable = caches.open(INMUTABLE_CACHE).then(cache => {
		cache.addAll(APP_SHELL_INMUTABLE);
	});


	e.waitUntil(Promise([cacheStatic, cacheInmutable]));
});

self.addEventListener('activate', e => {
	console.log('Hi')
	const respuesta = caches.keys().then(keys => {
		keys.forEach(key => {
			if (key !== STATIC_CACHE && key.includes('static')) {
				return caches.delete(key);
			}
			if (key !== DYNAMIC_CACHE && key.includes('dynamic')) {
				return caches.delete(key);
			}
		});
	});
	e.waitUntil(respuesta);
});

self.addEventListener('fetch', e => {
	let respuesta;
	const urls = e.request.url;
	if (e.request.url.includes('/api')) {
		respuesta = manejoApiMensajes(DYNAMIC_CACHE, e.request)
	} else {
		respuesta = caches.match(e.request).then(res => {
			if (res) {
				if (APP_SHELL.includes(res.url)) {
					actualizarCacheEstatico(STATIC_CACHE, e.request, APP_SHELL_INMUTABLE);
					return res;
				}
				return res;
			} else {
				return fetch(e.request).then(newRes => {
					return actualizarCacheDinamico(DYNAMIC_CACHE, e.request, newRes)
				});
			}
		});
	}
	e.respondWith(respuesta);
});

self.addEventListener('sync', e => {
	if (e.tag === 'nuevo-post') {
		// Postear a DB cuando haya conexión
		const respuesta = postearMensajes()
		e.waitUntil(respuesta)
	}
});

function postearMensajes() {
	const posteos = [];
	return db.allDocs({ include_docs: true }).then(docs => {
		docs.rows.forEach(row => {
			const doc = row.doc;
			const fetchProm = fetch(API_KEY, {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				method: "POST",
				mode: 'cors', // no-cors, *cors, same-origin
				cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
				credentials: 'same-origin',
				body: JSON.stringify(doc)
			}).then(res => {
				return db.remove(doc);
			});
			posteos.push(fetchProm);
		});
		return Promise.all(posteos);
	});
}

// Escuchas push

self.addEventListener('push', e => {
	// console.log(e);
	// console.log(e.data.text());

	const data = JSON.parse(e.data.text());
	// console.log(data);
	const title = data.titulo;
	const options = {
		body: data.cuerpo,
		icon: './assets/images/anthonyopt.jpg',
		badge: './assets/images/anthonyopt.jpg',
		// image: 'url',
		vibrate: [250, 200, 150, 150, 100, 50, 450, 450, 150, 150, 100, 50, 900, 2250],
		openUrl: '/',
		data: {
			url: '/',
			id: data.usuario
		},
		actions: [
			{
				action: 'action 1',
				title: 'Action 1',
				icon: './assets/images/client1.jpg'
			},
			{
				action: 'action 2',
				title: 'Action 2',
				icon: './assets/images/fondo1.jpg'
			}
		]

	}

	e.waitUntil(self.registration.showNotification(title, options))
});

// Cierra las notificaciones
self.addEventListener('notificationclose', e => {
	// console.log('Notificación cerrada', e);
});

self.addEventListener('notificationclick', e => {
	const notificacion = e.notification;
	const accion = e.action;
	// console.log(notificacion, accion)
	const respuesta = clients.matchAll()
		.then(clientes => {
			let cliente = clientes.find(c => {
				return c.visibilityState === 'visible';
			});
			if (cliente !== undefined) {
				cliente.navigate(notificacion.data.url);
				cliente.focus();
			} else {
				clients.openWindow(notificacion.data.url);
			}
			return notificacion.close();
		});
	e.waitUntil(respuesta);
})