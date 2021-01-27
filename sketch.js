var a, b;
var c;

function setup() {
    createCanvas(800, 400);
    a = createSprite(400, 200, 50, 50);
    b = createSprite(200, 150, 50, 50);
    a.shapeColor = "red";
    b.shapeColor = "blue";
}

function draw() {
    background(255);
    c = a.x - b.x;
    a.y = mouseY;
    a.x = mouseX;
    console.log(a.x - b.x);
    console.log(a.y - b.y);
    if (c <= 50 && b.x - a.x <= 50 && a.y - b.y <= 50 && b.y - a.y <= 50) {
        a.shapeColor = "yellow";
        b.shapeColor = "green";
    } else {
        a.shapeColor = "red"
        b.shapeColor = "blue"
    }

    drawSprites();
}