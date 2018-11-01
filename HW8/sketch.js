let option = 3;
function setup() {
  createCanvas(1000, 600);
  frameRate(5); //5 frames per second
}

function draw() {
  background('white');
  let density = map(mouseX, 0, width, 15, 50);

  if (option == 1) {
// Option 1: makes the grid move
    background('Pink');
  //Make cool border around lines
  //this one is left side
    fill(51);
    rect(5, 40, 70, 220 );

    fill(102, 150);
    rect(5, 110, 70, 220 );

    fill( 240, 10, 20, 150 );
    rect(5, 180, 70, 220 );

    fill( 'rgba(176, 255, 29, 0.5)' );
    rect(5, 250, 70, 220 );

    fill( 'rgba(29, 255, 248, 0.2)' );
    rect(5, 320, 70, 220 );
//top border
    fill(51);
    rect(75, 5, 220, 70 );

    fill(102, 150);
    rect(225, 5, 220, 70 );

    fill( 240, 10, 20, 150 );
    rect(375, 5, 220, 70 );

    fill( 'rgba(176, 255, 29, 0.5)' );
    rect(525, 5, 220, 70 );

    fill( 'rgba(29, 255, 248, 0.2)' );
    rect(700, 5, 220, 70);
//bottom  border
fill(51);
rect(75, 520, 220, 70 );

fill(102, 150);
rect(225, 520, 220, 70 );

fill( 240, 10, 20, 150 );
rect(375, 520, 220, 70 );

fill( 'rgba(176, 255, 29, 0.5)' );
rect(525, 520, 220, 70 );

fill( 'rgba(29, 255, 248, 0.2)' );
rect(700, 520, 220, 70);
//left side
fill(51);
rect(920, 40, 70, 220 );

fill(102, 150);
rect(920, 110, 70, 220 );

fill( 240, 10, 20, 150 );
rect(920, 180, 70, 220 );

fill( 'rgba(176, 255, 29, 0.5)' );
rect(920, 250, 70, 220 );

fill( 'rgba(29, 255, 248, 0.2)' );
rect(920, 320, 70, 220 );

// make a loop
    for (let x = 100; x <= width-100; x += density) {
      for (let y = 100; y <= height-100; y+=density) {
// make the 6 lines
        line(x-30, y-30, x+30, y+30);
        line(x+25, y-25, x-25, y+25);
        line(x+30, y-30, x-30, y+30);
        line(x-20, y-20, x+20, y+20);
        line(x-10, y-10, x+10, y+10);
        line(x+15, y-15, x-15, y+15);

      }
    }

  }
  else if (option == 2) {
// Option 2: make the lines
    background('rgb(30, 31, 42)');
// Make a loop for the lines
    for (let x = 250; x <= width-30; x += density) {
      for (let y = 250; y <= height-30; y+=density) {

      line(x, y, width/20, height/20);
      line(x + 100, y + 100, width/4, height/4);
// make random shapes
translate(120, 40)
      fill('red');
      arc(-140,0,60,60, PI / 4, -PI / 4);
     	arc(-70,0,60,60, PI / 4, -PI / 4, OPEN);
     	arc(0,0,60,60, PI / 4, -PI / 4, CHORD);
     	arc(70,0,60,60, PI / 4, -PI / 4, PIE);
      }
    }
  }
  else if (option == 3) {
// Option 3: blinking flashing shapes
    background('purple');
// make stars random colors
    fill( random(20, 150, 200), random(100, 50, 20), random(186, 30, 250), random(135, 203, 120) );
// Make a loop
    for (let x = 10; x <= width-10; x += density) {
      for (let y = 5; y <= height-10; y+=density) {
// draw the shapes
    ellipse(x , y ,40 ,20);
    ellipse(x, y,30);
    rect(x , y ,50 ,80 );


      }
    }
  }
}
//when mouse is pressed the screen will change

function mousePressed() {
  option++;
  if (option > 3) option = 1;
}
