

let ball = {};
rectW = 80;
rectX = 30;
rectY = 30;
rectDX = 3;
rectDY = 9;
rectSX = 3;
rectSY = 9;

function setup() {
    createCanvas(windowWidth, 600);
    background(129, 250, 31, 51);
}


function draw() {

    rectX += rectDX * rectSX;
    rectY += rectDY * rectSY;


    if (rectX >= width || rectX <= .2) {
        rectDX = -1 * rectDX;
    }
    if (rectY >= height || rectY <= .2) {
        rectDY = -1 * rectDY;
       }
push();
    fill('pink');
    rect(rectX, rectY, rectW, rectW);
pop();
}

function mousePressed() {
    rectSX = map(mouseX, 0, width, 2, 5);
    rectSY = map(mouseY, 0, height, 2, 5);
}
