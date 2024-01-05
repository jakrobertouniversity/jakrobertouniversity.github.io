// favicon
const FAVICON_URL = document.createElement('link');
FAVICON_URL.type = 'image/x-icon';
FAVICON_URL.rel = 'shortcut icon'
const FAVICONS = {
	light: "../assets/favicon/dark.png",
	dark: "../assets/favicon/light.png"
}
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	FAVICON_URL.href = FAVICONS.dark;
} else {
	FAVICON_URL.href = FAVICONS.light;
}
document.head.appendChild(FAVICON_URL);

const DARK_MODE_MEDIA_QUERY = window.matchMedia('(prefers-color-scheme: dark)');
DARK_MODE_MEDIA_QUERY.addListener((e) => {
	if (e.matches) {
		FAVICON_URL.href = FAVICONS.dark;
	} else {
		FAVICON_URL.href = FAVICONS.light;
	}
});