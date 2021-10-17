// let x = prompt("Enter Your Name")
// alert("Hello " + x + " Enjoy Your Area calculate :D")


function calculateSquareArea() {
    const len = document.getElementById("sqaureInput").value;
    document.getElementById("squareResult").innerText = len * len
}

function calculateRectArea() {
    const L = document.getElementById("rectLInput").value;
    const W = document.getElementById("rectWInput").value;
    const result = W * L;
    document.getElementById("rectResult").innerText = result;
}

function calculateCircleArea() {
    const r = document.getElementById("circleInput").value;
    const rArea = (r * r) * 3.14;
    document.getElementById("circleResult").innerText = rArea;

}