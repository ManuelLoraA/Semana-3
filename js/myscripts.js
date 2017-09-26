
let links = ["one.html", "two.html", "three.html"];
let num = Math.floor(Math.random() * links.length);
document.querySelector("#my-link").setAttribute("href", links[num])