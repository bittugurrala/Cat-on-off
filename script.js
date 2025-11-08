let on = document.getElementById("on")
let off = document.getElementById("off")
let heading = document.querySelector("h2")


on.addEventListener("click", function(){
    document.getElementById("cat-on").src = "images/Light-on.png"
    document.getElementById("cat-off").src = "images/cat-on.png";
    heading.textContent = "Switch turned on!"
    off.style.backgroundColor = "gray"
    off.style.borderColor = "gray"
    on.style.backgroundColor = "green"
    on.style.borderColor = "green"

})
off.addEventListener("click", function(){
    document.getElementById("cat-on").src = "images/Light-off.png"
    document.getElementById("cat-off").src = "images/cat-off.png"
    heading.textContent = "Switch turned off!"
    off.style.backgroundColor = "red"
    off.style.borderColor = "red"
    on.style.backgroundColor = "gray"
    on.style.borderColor = "gray"

})