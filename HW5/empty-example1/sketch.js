/**
 * Creepy Spinning Variable Person
 *
 */

function setup() {
    createCanvas( windowWidth, 1000 );
    // createCanvas( windowWidth, windowHeight );
}

let headAngle = 0;
let headRotationRate = 0;
let armAngle = 0;
let headWidth = 100;
let headHeight = 50;

function draw() {
    // make background
    background( 'rgb(255, 5, 120)' );
    // turned curser off
    noCursor();

    // update my values
    //ration based of mousey position
    headRotationRate = (mouseY * 0.01) - 20;
    // equal to itself plus head rotation rate
    headAngle = headAngle + headRotationRate;
    // set the arm to spin at a constant rate
    armAngle = armAngle - 5;


    // *****************************
    // person sandbox
    // *****************************
    push();

    // make the person follow the mouse.
    translate( mouseX, mouseY );

    // arms
    push();
    // right arm
    translate(0, 75);
    strokeWeight( 10 );
    stroke( 0 );
    // make the forarm spin
    push();
    // move the arm
    // control rotation
    translate( 60, -40 );
    // rotate arm
    rotate( radians(armAngle) );
      // draw arm
    line( 0, 0, 50, 0 );
    // make a really bad circle hand
    fill( 'rgb(120, 175, 59)' );
    noStroke();
    ellipse( 50, 0, 20 );
    pop();
    // top half of arm which is still
    line( 10, -20, 60, -40 );

    // left arm
    push();
    // move the center to facilitate rotate
    translate( -10, -20 );
    // rotates based on mouse x position
    rotate( radians( mouseX) );
    // draw arm and hand
    line( 0, 0, 150, 0);
    fill( 'rgb(120, 175, 59)' );
    noStroke();
    ellipse( 150, 0, 20 );
    pop();
    pop();

    // BODY
    // boring body shape
    rect( -25, 0, 60, 240 );

    // HEAD
    push();
    noStroke();
    fill( 'rgba(0, 40, 150, 100)' );
    // move to fit body
    translate( 0, -20 );
    // rotate head based on headAngle
    rotate( radians( mouseX) );


    // draw head skull
    ellipse( 0, 0, headWidth, headHeight );
    stroke(0);
    fill(255);
    // eyes
    strokeWeight(2);
    push();
    //make eyeys fitted to head
    translate( headWidth * -0.2, headHeight * -0.2 );
    ellipse( 0, 0, headWidth * 0.33, headHeight * 0.33 );
    noStroke();
    fill( 'rgb(255, 31, 111)' );
    ellipse( 0, 0, 10 );
    fill( 0 );
    ellipse( 0, 0, 5 );
    pop();
    push();
    translate( headWidth * 0.2, headHeight * -0.2 );
    ellipse( 0, 0, 20 );
    noStroke();
    fill( 'rgb(255, 31, 111)' );
    ellipse( 0, 0, 10 );
    fill( 0 );
    ellipse( 0, 0, 5 );
    pop();

    // MOUTH
    push();
    fill( 255 );
    arc( 0, headHeight * 0.3, 50, 20, 0, PI );
    pop();
    pop(); // <- END HEAD

    // LEGS
    fill( 0, 230, 140 );
    translate(0, 170);
    noStroke();
    // keep legs out off bottom of window
    triangle( -25, 35, 5, 35, -140, height+100 );
    triangle( 35, 35, -5, 35, 140, height+100 );

    pop(); // <- END PERSON

}
