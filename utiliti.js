function getInputValue(input){
    const inputfeild = document.getElementById(input)
    const inputValue = inputfeild.value;
    return inputValue;
}
function innerTextSet(text){
    const innterText = document.getElementById(text);
    const innerTextSet = innterText.innerText;
    return innerTextSet
}

function anotherPage(){
    window.location.href = 'prottoyon.html';
}