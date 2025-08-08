let reduceBtn = document.getElementById("reduce");
let restBtn = document.getElementById("rest");
let increaseBtn = document.getElementById("increase");

let counter = document.getElementById("counter");

reduceBtn.addEventListener("click", function () {
    counter.textContent = Number(counter.textContent) -1 
});

restBtn.addEventListener("click", ()=> counter.textContent = "0")

increaseBtn.addEventListener("click", function () {
    counter.textContent = Number(counter.textContent) + 1 
});
