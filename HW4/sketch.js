function setup(){
  // creating a canvas to draw on
  createCanvas( 600, 800 );
}



function draw(){


// background
   background( 180 );



   /* ***************************** */
   /* MAIN SANDBOX */
   /* ***************************** */
   push();

   // set the grid center( x:0, y:0 )
   // to canvas center
   translate( 300, 400 );


   /* ***************************** */
   /* ARMS */
   /* ***************************** */
   push();
   translate( 0, -55 );

   // left arm
   stroke( 'pink' );
   strokeWeight( 45 );
   line( -140, 0, -200, -100 );
   line( -200, -100, -200, -200 );

   // hand
   stroke( 'black' );
   strokeWeight( 75 );
   point( -200, -200 );

   // right arm
   translate( -50, -20);
   rotate( PI );
   stroke( 'pink' );
   strokeWeight( 50 );
   line( -140, 0, -200, -100 );
   line( -200, -100, -200, -200 );

   // hand
   stroke( 'black' );
   strokeWeight( 75 );
   point( -200, -200 );

   pop(); // ARMS END


   /* ***************************** */
   /* BODY */
   /* ***************************** */
   push();
   // main shirt rectangle
   rect( -150, -100, 250, 300 );

   // multi color stripes on the shirt
   push();
   fill( 'rgba(255, 0, 0, 0.66)' );
   translate(-150, -100);
   rect(0, 0, 250, 40);
   translate(0, 80);

   fill('pink')
   rect(0, 0, 250, 40);
   translate(0, 80);

   fill('orange')
   rect(0, 0, 250, 40);
   translate(0, 80);

   fill('blue')
   rect(0, 0, 250, 40);
   pop();


   // buttons that are on the shirt
   noFill();
   ellipse( -17, 0, 30 );

   fill('black')
   ellipse( -17, 0, 20 );

   noFill();
   ellipse( -17, 80, 30 );

   fill('black')
   ellipse( -17, 80, 20 );

   noFill();
   ellipse( -17, 160, 30 );

   fill('black')
   ellipse( -17, 160, 20 );

   pop(); // BODY END!


   /* ***************************** */
   /* LEGS */
   /* ***************************** */
   push();
   translate( 0, 200 );

   // left leg
   translate(-20, 0);
   fill( 'rgb(133, 94, 0)' );
   triangle( -130, 0, 0, 0, -100, 500 );
   // right leg
   scale(-.75, 1 );
   triangle( -160, 0, 0, 0, -120, 500 );
   pop();
    // LEGS END


   /* ***************************** */
   /* HEAD */
   /* ***************************** */
   push();
   translate( -20, -175 );

   fill( 'rgba(10, 206, 50)' );
   ellipse( 0, 0, 200, 200 );

   // mouth
   fill( 0 );
   arc(
       0,
       50,
       150,
       60,
       radians(350),
       radians(190),
       PIE
   );

   // mustache
   push();
   noStroke();
   fill( 'rgb(119, 56, 25)' );
   quad( 0, 10, -10, 40, -85, 50, -75, 20 );
   scale(-1, 1);
   quad( 0, 10, -10, 40, -85, 50, -75, 20 );
   pop();

   // nose
   ellipse( 0, -20, 30, 20,);


   // eyes
   // left
   push();
   translate( -35, -40 );

   fill(255);
   ellipse( 0, 0, 60, 35 );
   noFill();
   fill( 'green' );
   ellipse( 0, 0, 30 );
   fill( 0 );
   ellipse( 0, 0, 20 );

   fill( 'rgb(119, 56, 25)' );
   quad( 40, -40, 35, -30, -50, -10, -45, -30 );
   pop();

   // right
   push();
   translate( 35, -40 );

   fill(255);
   ellipse( 0, 0, 60, 35 );
   noFill();
   fill( 'green' );
   ellipse( 0, 0, 30 );
   fill( 0 );
   ellipse( 0, 0, 20 );
   fill( 'rgb(119, 56, 25)' );
   quad( -40, -40, -35, -30, 50, -10, 45, -30 );
   pop();

   pop(); // HEAD END




   pop();
}
