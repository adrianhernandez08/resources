document.getElementById("main-heading").addEventListener("dblclick", function () {
    this.innerText = "DOM Events: An Lecture"; // this refers to the element on which the event listener was added to/called on.
    document.getElementsByTagName("title")[0].innerText = "DOM Events Lecture";
    document.getElementsByTagName("body")[0].classList.add("dom-lec-start");
});

function diceRoll() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementsByClassName("lorem")[0].textContent = "" + randomNumber;
    this.removeEventListener("click", diceRoll);
}
document.getElementById("click-me").addEventListener("click", diceRoll);

// document.getElementById("click-me").removeEventListener("click", diceRoll);

document.getElementById("main-heading").addEventListener("mouseenter", function (){
this.classList.remove("makeItBlue");
)};


