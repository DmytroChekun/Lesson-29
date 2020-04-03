const switcher = document.getElementById("switcher");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

switcher.addEventListener("click", function() {
    if (red.classList.contains("red")){
        red.classList.remove("red");
        yellow.classList.add("yellow");
    }else if (yellow.classList.contains("yellow")){
        yellow.classList.remove("yellow");
        green.classList.add("green");
    }else if (green.classList.contains("green")) {
        green.classList.remove("green");
        red.classList.add("red");
    }
});