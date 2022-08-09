function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);
  canvas = createCanvas(550, 550);
  canvas.position(560, 150);
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}
function draw() {
  background("cyan");
  fill("red");
  stroke("black");
    square(noseX, noseY, difference);
    document.getElementById("square_side").innerHTML="Width and height of the square will be = "+difference+" px"
}
function modelLoaded() {
  console.log("poseNet is initialzed");
}
noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;
function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference=floor(leftWristX-rightWristX)
  }
}
