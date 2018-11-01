let texts = [];
let t = 0;

// making my setup function
function setup(){

  createCanvas( windowWidth, 800 );

  for (var i = 0; i < 20; i++) {
Text.push(
  {
        Period: {random(60, 240), y: random(60, 240) },
        maxSize;: random(4);
        maxDist: {
          x: random(width/2),
          y: random(height/2)
        },
        pos:{
          x: random(width),
          y: random(height)
        }
      }
    );
  }
}



// I am creating my draw function
function draw(){
  Background('green');
  let numToDraw = map(mouseX, 0, width, 1, texts.length );
  for( let i = 0; 1 < numToDraw; i++ ) {
drawText( texts[i], t );
  }
  t++

}
Function drawTexts(texts, time){
let x = sinePos( texts.period.x, time);
let y = sinePos( texts.period.y, time);

let pos_x = x * texts.maxDist.x + texts.pos.x;
let pos_y = y * texts.maxDist.y + texts.pos.y;

Text(
    pos_x
    pos_y
    x * Texts.maxSize
    y * texts.Maxsize
  );
}

Function texts(pos_x, pos_y, scale_x, scale_y ){
translate( pos_x,  pos_y );
scale( scale_x, scale_y );

text(Hello World! 325, 220);

}
Function sinePos( timeScale, time ){
  let val = sin( TWO_PI * time/timescale );
  return val;

}
