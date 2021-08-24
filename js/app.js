// console.log("js is working")#

// var userName = prompt("whats Your username?")

// alert("welcome " + userName)

var btnTranslate = document.querySelector("#translate-btn")
var textInput = document.querySelector("#text-input")

// console.log(textInput)

btnTranslate.addEventListener("click", function clickEventHandler() {
    console.log("Clicked")
    console.log("input: " + textInput.value);
})