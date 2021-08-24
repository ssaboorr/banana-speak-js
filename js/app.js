// console.log("js is working")#

// var userName = prompt("whats Your username?")

// alert("welcome " + userName)

var btnTranslate = document.querySelector("#translate-btn")
var textInput = document.querySelector("#text-input")
var outputDiv = document.querySelector("#output")
var serverURL = "https://api.funtranslations.com/translate/minion.json"
    // console.log(textInput)

function getTranslationURL(inputText) {
    return serverURL + "?" + "text=" + inputText

}

// function errorHandler() {
//     console.log("somethings wrong ", error)
//     alert("Something is wrong with the server , try again after sometime")
// }



function clickHandler() {

    var inputText = textInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;

        })
        // .catch(errorHandler)




};


btnTranslate.addEventListener("click", clickHandler)

// outputDiv.innerText = "Saboor Ansari"