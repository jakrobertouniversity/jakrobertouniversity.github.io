const body = document.getElementsByTagName("body")[0]
const topbar = document.createElement("nav")
topbar.classList.add("topbar")

topbar.innerHTML = `
<span class="left">
<a class="icon" id="HOME-BUTTON">
    school
</a>
<span>
    <div class="title">
        <span class="full">
            JAK ROBERTO UNIVERSITY
        </span>
        <span class="short">
            JRU
        </span>
    </div>
    <div class="subtitle">
        The National Anti-Silos University
    </div>
</span>
</span>
<span class="right">
<button id="ABOUT-BUTTON">
    About J.R.U.
</button>
<button id="OFFERS-BUTTON">
    What We Offer
</button>
</span>
`

body.append(topbar)

document.getElementById("HOME-BUTTON").addEventListener("click", function () {
    window.location.href = "/"
})

document.getElementById("ABOUT-BUTTON").addEventListener("click", function () {
    window.location.href = "/about/"
})

document.getElementById("OFFERS-BUTTON").addEventListener("click", function () {
    window.location.href = "/#services"
})