noseX = 0 ; 
noseY = 0 ; 

function preload(){ 
    
moustache = loadImage("https://i.postimg.cc/VNTZ9cdX/moustache-PNG43.png");
} 

function setup(){

    canvas = createCanvas(300 , 300); 
    canvas.center(); 
    video = createCapture(VIDEO) ; 
    video.size(300 , 300) ;
    video.hide(); 

    poseNet = ml5.poseNet(video , modelLoaded) ; 
poseNet.on('pose' , gotPoses); 
} 

function modelLoaded() {

    console.log('poseNet is initialized') ;  } 

    function gotPoses(results) {

    if(results.lenght > 0) ; {

    console.log(results) ; 
    noseX = results[0].pose.nose.x-25 ; 
    noseY = results[0].pose.nose.y-8 ; 
}
    } 
function draw(){
image(video , 0 , 0 , 300 , 300); 
image(moustache , noseX , noseY , 60 , 60);
} 

function take_snapshot(){
     save("myImage.png"); 
}
