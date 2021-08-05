var translate_btn = document.querySelector("#btn-translate");
var textInput = document.querySelector("#input-txt");
var outputText = document.querySelector("#output-div");
var url = "https://api.funtranslations.com/translate/minion.json"





function constructedUrl(text) {
    return nweUrl = (url + "?text=" + text);
}
function errorhandler(error) {
    console.log("error occured", error);
}


function clickHandler() {
    var inputTxet = textInput.value;

    fetch(constructedUrl(inputTxet))
        .then(response => response.json())
        .then(json => {
            var traslateText = (json.contents.translated)
            outputText.innerText = traslateText
            console.log(traslateText)
        })
        .catch(errorhandler)

}

translate_btn.addEventListener("click", clickHandler);





