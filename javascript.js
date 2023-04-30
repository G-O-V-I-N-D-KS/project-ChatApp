/* eslint-disable quotes */
const nav = document.querySelector("#nav");

nav.style.display = "none";

function navSelect () {
	if (nav.style.display == "none")
		openNav();
	else
		closeNav();
}

function openNav () {
	nav.style.display = "block";
	console.log("open");
}

function closeNav () {
	nav.style.display = "none";
	console.log("close");
}

let i = 0;
const row = document.querySelector(".row");
const leftside = document.querySelector(".leftside");
const rightside = document.querySelector(".rightside");

function mode () {
	if (i == 0) {
		darkmode ();
		i = 1;
	}
	else {
		lightmode();
		i = 0;
	}
}

function darkmode () {
	leftside.style.backgroundImage = "linear-gradient("+ "to right, " + "#28313B, #485461"+")";
	rightside.style.background="url('wall2.webp') no-repeat fixed";
	rightside.style.backgroundSize = "cover";
	row.style.color = "white";
	nav.style.backgroundImage = "linear-gradient("+ "to right, " + "#2A5470, #4C4177"+")";
	document.getElementById("theme").textContent=`\u263c`;
}

function lightmode () {
	leftside.style.backgroundImage = "linear-gradient("+ "to right, " + "white, white"+")";
	rightside.style.background="url('wall3.jpg') no-repeat fixed";
	rightside.style.backgroundSize = "cover";
	row.style.color = "black";
	nav.style.backgroundImage = "linear-gradient("+ "to right, " + "red, red"+")";
	document.getElementById("theme").textContent="\u263d";
}
