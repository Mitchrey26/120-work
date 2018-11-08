
let bubbles = [];

function setup() {
    createCanvas(windowWidth, 400);
    let b = new Bubble(width/2, height/2, 10);
    bubbles.push(b);
}

function mouseMoved() {
    let r = random(5, 30);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    pour(){
        //Updates this.x position by subtracting 0.1 from its current value
        this.x -= 0.1;
        //Updates this.y position by adding a random value between 1 and 3 to its current value
        this.y += random( 1, 3 );
      }
      
    show() {
        stroke(random(255), random(255), random(255));
        strokeWeight(1);
        noFill();
        ellipse(this.x, this.y, this.r * 2);
    }
}
