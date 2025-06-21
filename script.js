let displayMode = "Day";

let inputOne = "";
let lengthInputOne = 0;
let operation = "";
let lengthInputTwo = 0;
let inputTwo = "";

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

const plus = document.querySelector("#plusButton");
const minus = document.querySelector("#minusButton");
const times = document.querySelector("#multiplyButton");
const divideBy = document.querySelector("#divideButton");

const comma = document.querySelector("#comma");
const pi = document.querySelector("#pi");
const eulerNumber = document.querySelector("#eulerNumber");

const solveButton = document.querySelector("#solveButton");
const deleteButton = document.querySelector("#deleteButton");
const clearButton = document.querySelector("#clearButton");

function plusFun(a, b) {return parseFloat(a) + parseFloat(b)};
function minusFun(a, b){return parseFloat(a) - parseFloat(b)};
function timesFun(a, b){return parseFloat(a) * parseFloat(b)};
function divideFun(a, b){
    if (b == 0){
        return NaN;
    }
    else{
        return parseFloat(a) / parseFloat(b);
    };
};


function operate(a, b, operator){
    if (operator == "plus"){return plusFun(a, b)}
    else if (operator == "minus"){return minusFun(a, b)}
    else if (operator == "times"){return timesFun(a, b)}
    else if (operator == "divideBy"){return divideFun(a, b)}
    else{alert("Warning: Unknown operator detected, unable to perform action.")};
};

const display = document.querySelector("#display");
display.textContent = "";

zero.addEventListener("click", () => {
    display.textContent += "0"; 
})
one.addEventListener("click", () => {
    display.textContent += "1"; 
})
two.addEventListener("click", () => {
    display.textContent += "2"; 
})
three.addEventListener("click", () => {
    display.textContent += "3"; 
})
four.addEventListener("click", () => {
    display.textContent += "4"; 
})
five.addEventListener("click", () => {
    display.textContent += "5"; 
})
six.addEventListener("click", () => {
    display.textContent += "6"; 
})
seven.addEventListener("click", () => {
    display.textContent += "7"; 
})
eight.addEventListener("click", () => {
    display.textContent += "8"; 
})
nine.addEventListener("click", () => {
    display.textContent += "9"; 
})
let leftSkip = false;
comma.addEventListener("click", () => {
    function hasMultipleDecimals(str){ 
        return ((str.match(/\./g) || []).length > 0); 
    }
    let [leftNum, operator, rightNum] = display.textContent.split(" ");
     

    rightNum = rightNum ?? "1";
    console.log("!leftSkip ", !leftSkip)
    console.log("leftNum: ", leftNum)

    if(leftSkip){
        if (hasMultipleDecimals(rightNum)){
            alert("Warning: Cannot interpret multiple decimal points in a number!");
        } else {display.textContent += "."};
    } else {
        if (hasMultipleDecimals(leftNum)) {
            alert("Warning: Cannot interpret multiple decimal points in a number!");
        } else {
            display.textContent += ".";
        }
    };
});
pi.addEventListener("click", () => {
    display.textContent += Math.PI;
})
eulerNumber.addEventListener("click", () => {
    display.textContent += Math.E;
})



plus.addEventListener("click", () => {
    inputOne = display.textContent;
    lengthInputOne = inputOne.length;
    operation = "plus";
    display.textContent += " + ";
    leftSkip = true;
});
minus.addEventListener("click", () => {
    inputOne = display.textContent;
    lengthInputOne = inputOne.length;
    operation = "minus";
    display.textContent += " - ";
    leftSkip = true;
});
times.addEventListener("click", () => {
    inputOne = display.textContent;
    lengthInputOne = inputOne.length;
    operation = "times";
    display.textContent += " x ";
    leftSkip = true;
});
divideBy.addEventListener("click", () => {
    inputOne = display.textContent;
    lengthInputOne = inputOne.length;
    operation = "divideBy";
    display.textContent += " ÷ ";
    leftSkip = true;
});

/* The following constants gives back true if the equation contains more than 1 operator, and false if it doesnt;
this is used as a safety measure, as this simple calculator is only supposed to perform operations between two numbers.*/
function hasMultipleOperations(str) {
    return [..."+-x÷"].some(v => (str.match(new RegExp('\\' + v, "g")) || []).length > 1);
}

solveButton.addEventListener("click", () => {
    if (hasMultipleOperations(display.textContent)){
        alert("Warning: Cannot perform multiple operations at once!");
    }
    else{
        lengthInputTwo = display.textContent.length - 3 - lengthInputOne;
        inputTwo = display.textContent.substring(lengthInputOne + 3, display.textContent.length);
        console.log(inputOne, inputTwo, operation);
        display.textContent += " = " + operate(inputOne, inputTwo, operation);
    };
});

deleteButton.addEventListener("click", () => {
    if (display.textContent[display.textContent.length - 1] === " ") {display.textContent = display.textContent.substring(0, display.textContent.length - 3)}
    else{display.textContent = display.textContent.substring(0, display.textContent.length - 1)};
});

clearButton.addEventListener("click", () => {
    display.textContent = "";
})

const switchText = document.querySelector("#dayOrNight")
const dayNightSwitch = document.querySelector(".changeMode")
const buttons = document.querySelectorAll(".button")
const head = document.querySelector("h1")


dayNightSwitch.addEventListener("click", () => {
    if (dayNightSwitch.id == "day"){
        dayNightSwitch.id = "night";
        document.body.style.background = "#102A43";
        head.style.color = "white";
        switchText.style.color = "white";
        buttons.forEach(button => {
            button.style.background = "black";
            button.style.color = "white";
        });
        display.style.background = "#829AB1"
    } else {
        dayNightSwitch.id = "day";
        document.body.style.background = "#e4e5f1";
        head.style.color = "black";
        switchText.style.color = "black";
        buttons.forEach(button => {
            button.style.background = "#d2d3db";
            button.style.color = "black";
        });
        display.style.background = "#white"
    }
})