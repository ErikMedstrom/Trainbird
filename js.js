var bird;
var positionX = 0;
var positionY = 0;

function startanimation() {
    bird = document.getElementById("Flyingbird");
    
    setInterval(update, 100);


}
function update() {
    bird.style.left = positionX + "%";
    positionX += 1;
    bird.style.bottom = positionY + "%";
    positionY += 1;

}

function setColor() {
    var x = document.body;
    x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
}