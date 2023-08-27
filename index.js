const TopbarButtons = document.getElementById('ROUTE_BUTTONS').getElementsByTagName("button");

for (let i = 0; i < TopbarButtons.length; i++) {
	TopbarButtons[i].addEventListener('click', function () {
		alert(`You clicked on ${TopbarButtons[i].innerText} button`);
	});
}

const FaviconLink = document.createElement('link');
FaviconLink.type = 'image/x-icon';
FaviconLink.rel = 'shortcut icon'
const Favicon = {
	Light: "assets/favicon/dark.png",
	Dark: "assets/favicon/light.png"
}
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	FaviconLink.href = Favicon.Dark;
} else {
	FaviconLink.href = Favicon.Light;
}
document.head.appendChild(FaviconLink);

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addListener((e) => {
	if (e.matches) {
		FaviconLink.href = Favicon.Dark;
	} else {
		FaviconLink.href = Favicon.Light;
	}
});