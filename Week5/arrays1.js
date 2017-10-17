let x = [5,10,15,20];
console.log(x[2]);
console.log(x.length);
console.log([5,10,15,20][2]);
console.log([5,10,15,20][14/7]);
console.log(x[1.2]);
console.log(x.push(25));
console.log(x);
console.log([5,10,15,20].push(25));
console.log(x.splice(2,1));

let locationX = [];


function setup(){
  createCanvas(200,200);
}

function draw(){
  locationX.push(mouseX);
  locationX.pop();
}
