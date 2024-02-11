function backSpace(){
    var input = document.getElementById('inputText');
    var currentValue = input.value;

    if(currentValue.length > 0){
        var newValue = currentValue.slice(0, -1);
        input.value = newValue;
    }
}


function Clear(){
    var input = document.getElementById('inputText');
    input.value = "";
}

function display(clickedButton){
    var input = document.getElementById('inputText');
    var buttonText = clickedButton.innerText;

    input.value += buttonText;
}

function displayOP(clickedButton){
    var input = document.getElementById('inputText');
    var buttonText = clickedButton.innerText;

    var currentValue = input.value;
    var previousValue = currentValue.substring(currentValue.length - 1, currentValue.length);

    if(previousValue == "%" && input.value.length > 0){
        input.value+=buttonText;
    }
    if(previousValue == ")" && input.value.length > 0){
        input.value+=buttonText;
    }
    if(input.value.length > 1 && isNaN(previousValue)){
        buttonText = "";
    }

    if(input.value.length > 0){
        input.value +=buttonText;

    }
    }


function displayN(clickedButton){
    var input = document.getElementById('inputText');
    var buttonText = clickedButton.innerText;

    if(buttonText == "+/-"){
        buttonText = "(-";
    }

    input.value += buttonText;

   
    
   }

   function displayP(clickedButton) {
    var input = document.getElementById('inputText');
    var buttonText = clickedButton.innerText;

    var currentValue = input.value;
    var previousValue = currentValue.substring(currentValue.length - 1, currentValue.length);
    var indexOfLastOpenParenthesis = currentValue.lastIndexOf("(");

    if (input.value.length === 0) {
        if (!isNaN(Number(currentValue))) {
            buttonText = "(";
        } else {
            buttonText = "x(";
        }
    } else {
        if (!isNaN(Number(previousValue)) && indexOfLastOpenParenthesis !== -1) {
            buttonText = ")";
        } else {
            buttonText = "x(";
        }
    }

    input.value += buttonText;
}

function displayC(clickedButton){
    var input = document.getElementById('inputText');
    var buttonText = clickedButton.innerText;

    if(input.value == ""){
        buttonText = "0."
    }
    input.value+=buttonText;
}

function equals() {
    var input = document.getElementById('inputText');
    var inputValue = input.value;

    var sanitizedInput = inputValue.replace(/x/g, '*').replace(/%/g, '/100');

    if (sanitizedInput.trim() !== "") {
        try {
            var result = eval(sanitizedInput);

            if (Number.isFinite(result)) {
                input.value = result;
            } else {
                input.value = "Error";
            }
        } catch (error) {
            input.value = "Error";
        }
    }
}
