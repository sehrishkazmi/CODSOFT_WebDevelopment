// Append value to the display
function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Delete the last character
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

let history = []; // Initializing history

// Calculate the result
function calculate() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value); // Evaluate the expression
        // Add to history
        addHistory(`${display.value} = ${result}`);
        display.value = result; // Display the result
    } catch (error) {
        display.value = 'Error';
    }
}

// Add entry to history
function addHistory(entry) {
    history.push(entry); // Add result to the history array

    const historyList = document.getElementById('historyList');
    const listItem = document.createElement('li');
    listItem.innerText = entry;

    // Allow reuse of history item when clicked
    listItem.onclick = () => {
        const display = document.getElementById('display');
        const [expression] = entry.split(' = '); // Get the original expression
        display.value = expression;
    };

    // Add new item to the list
    historyList.appendChild(listItem);
}

// Clear the history
function clearHistory() {
    history = []; // Empty the history array
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = ''; // Clear the list in the UI
}