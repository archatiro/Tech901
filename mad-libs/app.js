const button = document.getElementById("lib-button")
var pizza  = document.getElementById("noun").value;
var second_in = document.getElementById("adjective").value;
const first_in = document.getElementById("name").value;
button.addEventListener('click', makeMadLib => {
    console.log(document.getElementById("name").value + " is a " + document.getElementById("adjective").value + " " + document.getElementById("noun").value)
})