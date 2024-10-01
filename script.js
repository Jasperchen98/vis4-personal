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