const TOPBAR_BUTTONS = document.getElementById('ROUTE_BUTTONS').getElementsByTagName("button");

for (let i = 0; i < TOPBAR_BUTTONS.length; i++) {
	TOPBAR_BUTTONS[i].addEventListener('click', function () {
		alert(`You clicked on ${TOPBAR_BUTTONS[i].innerText} button`);
	});
}