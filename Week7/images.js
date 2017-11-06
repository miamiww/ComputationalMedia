let fish;


function preload(){
  fish = loadImage("Darwin_fish_(1).png")
}

function setup(){
  noStroke();
  createCanvas(400,400);
  fishImg = createImg("https://upload.wikimedia.org/wikipedia/commons/9/9f/Striped_bass_FWS_1.jpg");
  fishImg.mousePressed(fishClick)
}

function draw(){
  background(220);
  // image(fish,mouseX,mouseY,100,100);
  image(fish,0,0);
  // for(let i=0; i< fish.width;i+=20){
  //   for(let j= 0; j<fish.height;i+=20){
  //     let c = fish.get(i,j);
  //     fill(c);
  //     ellipse(map(i,0, fish.width,0,width),
  //       map(j,0,fish.height))
  //   }
  // }
  let c = fish.get(mouseX,mouseY);
  fill(c);
  ellipse(140,65,50,30);
}

function fishClick(){
  fishImg.remove();
}
