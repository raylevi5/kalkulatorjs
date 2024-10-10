let displayElement = document.getElementById("display");
let historyListElement = document.getElementById("history-list");
let currentNumber = "";
let previousNumber = "";
let operation = undefined;
let history = [];

function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) return;
    currentNumber = currentNumber.toString() + number.toString();
    updateDisplay();
}

function updateDisplay() {
    displayElement.innerText = currentNumber;
}

function clearEntry() {
    currentNumber = "";
    updateDisplay();
}

function clearAll() {
    currentNumber = "";
    previousNumber = "";
    operation = undefined;
    updateDisplay();
}

function deleteNumber() {
    currentNumber = currentNumber.toString().slice(0, -1);
    updateDisplay();
}

function toggleSign() {
    currentNumber = (parseFloat(currentNumber) * -1).toString();
    updateDisplay();
}

function chooseOperation(op) {
    if (currentNumber === "") return;
    if (previousNumber !== "") {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = "";
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operation) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "*":
            result = prev * curr;
            break;
        case "/":
            result = prev / curr;
            break;
        default:
            return;
    }

    // Simpan riwayat
    const historyEntry = `${previousNumber} ${operation} ${currentNumber} = ${result}`;
    history.push(historyEntry);
    updateHistory();

    currentNumber = result;
    operation = undefined;
    previousNumber = "";
    updateDisplay();
}

function appendDot() {
    if (currentNumber.includes('.')) return;
    currentNumber += '.';
    updateDisplay();
}

function updateHistory() {
    historyListElement.innerHTML = "";
    history.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        historyListElement.appendChild(li);
    });
}


console.log("Selamat Anda berhasil menggunakan JavaScript pada Website")