const STATIC_CACHE = 'static-v2';
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

const APP_SHELL = [
	'/',
	'index.html',
	'assets/images/fondo1.jpg',
	'assets/images/anthonyopt.jpg',
	'assets/images/anthonyfavicon.png',
]

const APP_SHELL_INMUTABLE = [

]

self.addEventListener('install', e => {
	const cacheStatic = caches.open(STATIC_CACHE).then(cache => {
		cache.addAll(APP_SHELL);
	});

	e.waitUntil(Promise(cacheStatic));
});

self.addEventListener('activate', e => {
	const respuesta = caches.keys().then(keys => {
		keys.forEach(key => {
			if (key !== STATIC_CACHE && key.includes('static')) {
				return caches.delete(key);
			}
		});
	});
	e.waitUntil(respuesta);
});

self.addEventListener('fetch', e => {
	const respuesta = caches.match(e.request).then(res => {
		if (res) {
			return res;
		} else {
			return fetch(e.request).then(newRes => {
				return actualizarCacheDinamico(DYNAMIC_CACHE, e.request, newRes)
			});
		}
	});
	e.respondWith(respuesta);
});