var total = 0;

document.getElementById("btnMinus1").addEventListener("click", function() {
    total = total - 1;
    document.querySelector("#resultId").innerHTML = total;
});

document.getElementById("btnMinus2").addEventListener("click", function() {
    total = total - 2;
    document.querySelector("#resultId").innerHTML = total;
});

document.getElementById("btnPlus1").addEventListener("click", function() {
    total = total + 1;
    document.querySelector("#resultId").innerHTML = total;
});

document.getElementById("btnPlus2").addEventListener("click", function() {
    total = total + 2;
    document.querySelector("#resultId").innerHTML = total;
});

document.getElementById("btnReset").addEventListener("click", function() {
    total = 0;
    document.querySelector("#resultId").innerHTML = total;
});



let history = [];
let operationCount = { additions: 0, subtractions: 0 };

function updateResults() {
    document.querySelector("#resultId").innerHTML = total;
}

function updateHistory() {
    let historyContent = "";

    for (let i = 0; i < history.length; i++) {
        historyContent += "<li>" + history[i] + "</li>";
    }

    document.querySelector("#historyList").innerHTML = historyContent;
}

function updateSummary() {
    document.querySelector("#summary").innerHTML = `Total additions: ${operationCount.additions}, <br> Total subtractions: ${operationCount.subtractions}`;
}

function checkTotal() {
    if (total > 0) {
        document.querySelector("#totalMessage").innerHTML = "The total is positive.";
    } else if (total < 0) {
        document.querySelector("#totalMessage").innerHTML = "The total is negative.";
    } else {
        document.querySelector("#totalMessage").innerHTML = "The total is zero.";
    }
}

function ClearAll() {
    total = 0;
    history = [];
    operationCount.additions = 0;
    operationCount.subtractions = 0;
    updateResults();
    updateHistory();
    updateSummary();
    checkTotal();
}


document.getElementById("btnMinus1").addEventListener("click", function() {
    total = total - 1;
    history.push("-1");
    operationCount.subtractions += 1;
    updateResults();
    updateHistory();
    updateSummary();
    checkTotal();
});

document.getElementById("btnMinus2").addEventListener("click", function() {
    total = total - 2;
    history.push("-2");
    operationCount.subtractions += 1;
    updateResults();
    updateHistory();
    updateSummary();
    checkTotal();
});

document.getElementById("btnPlus1").addEventListener("click", function() {
    total = total + 1;
    history.push("+1");
    operationCount.additions += 1;
    updateResults();
    updateHistory();
    updateSummary();
    checkTotal();
});

document.getElementById("btnPlus2").addEventListener("click", function() {
    total = total + 2;
    history.push("+2");
    operationCount.additions += 1;
    updateResults();
    updateHistory();
    updateSummary();
    checkTotal();
});

document.getElementById("btnReset").addEventListener("click", function() {
    total = 0;
    history.push("Reset");
    updateResults();
    updateHistory();
    checkTotal();
});

document.getElementById("btnClear").addEventListener("click", ClearAll);

function updateHistory() {
    let historyContent = "";
    for (let i = 0; i < history.length; i++) {
        historyContent += "<li onclick='removeHistoryItem(" + i + ")'>" + history[i] + "</li>";
    }
    
    document.querySelector("#historyList").innerHTML = historyContent;
}

function removeHistoryItem(index) {
    history.splice(index, 1); // Remove the selected item from the history array
    updateHistory(); // Update the displayed history after the removal
}
