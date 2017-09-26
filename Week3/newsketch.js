function setup(){
  createCanvas(400,400);
}


function draw(){
  background(220);
  for( let i = 0; i<10; i++){
    let spacing = (mouseX/width) = 0.1;
    ellipse(width *0.1*(spacing*i)),
      width*(0.1*(spacing*i)),20,20*(i*0.1));
  }
}
