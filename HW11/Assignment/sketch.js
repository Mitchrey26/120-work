//trippy party !
//by Mitch Reynolds


let party = [];

//Sets up the canvas for the snow
function setup() {
    createCanvas(windowWidth, windowHeight);
    let b = new Party(width/2, height/2, 10);
    party.push(b);
}

//Conffetti class is made known in construuctor
class Party {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x - 1.5;
        this.y = this.y - .5;
    }

    show() {
        fill(random(255), random(255), random(255), random(255));
        ellipse(this.x, this.y, this.r * 1.5);
        stroke(random(255), random(255), random(255), random(255));
        strokeWeight(4);
        frameRate(10);
    }
}

//Guves us an instant party wherever we want!
function mouseDragged() {
    let r = random(10, 20);
    let b = new Party(mouseX, mouseY, r);
    party.push(b);

}

//Draws strobing orbs
function draw() {
    background('black');
    for (let i = 0; i < party.length; i++) {
        party[i].move();
        party[i].show();
    }
}
