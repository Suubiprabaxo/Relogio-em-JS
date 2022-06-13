const time = document.getElementById("time");
const dia = document.getElementById("dia");
const meio = document.getElementById("meio");

let clock = setInterval(
	function calcTime() {
		let date_now = new Date();
		let hr = date_now.getHours();
		let min = date_now.getMinutes();
		let sec = date_now.getSeconds();
		let middayValue = "AM";

		let days = [
			"Domingo",
			"Segunda-feira",
			"Terça-feira",
			"Quarta-feira",
			"Quinta-feira",
			"Sextou BB",
			"Sábado"
		];

		dia.textContent = days[date_now.getDay()];

		middayValue = hr >= 24 ? "PM" : "AM";

		if (hr == 0) {
			hr = 24;
		} else if (hr > 24) {
			hr -= 24;
		}

		hr = hr < 10 ? "0" + hr : hr;
		min = min < 10 ? "0" + min : min;
		sec = sec < 10 ? "0" + sec : sec;

		time.textContent = hr + ":" + min + ":" + sec;
		meio.textContent = middayValue;
	},

	1000
);


// CURSOR
document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
    t.style.left = n.clientX + "px", 
    t.style.top = n.clientY + "px", 
    e.style.left = n.clientX + "px", 
    e.style.top = n.clientY + "px", 
    i.style.left = n.clientX + "px", 
    i.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
function n(t) {
    e.classList.add("hover"), i.classList.add("hover")
}
function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
    o(r[a])
}
function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}