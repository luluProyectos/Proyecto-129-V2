var cancion1="";
var cancion2="";

var mix="";
var miy="";
var mdx="";
var mdy="";

var score1=0;
var cancion1_status="";

function preload(){
    cancion1=loadSound("music.mp3");
    cancion2=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    modelo=ml5.poseNet(video,modelLoaded);
    modelo.on("pose",gotPoses);
}

function draw(){
    image(video,0,0,400,400);
    cancion1_status = cancion1.isPlaying();
	//song2_status = song2.isPlaying();

	fill("#FF0000");
	stroke("#FF0000");

	if(score1 > 0.00000002)
	{ 
		circle(mix,mdy,20);

			cancion2.stop();

		if(cancion1_status == false)
		{
			cancion1.play();
			document.getElementById("song").innerHTML = "Reproduciendo: Canción de Harry Potter";
		}
	}

	/**if(scoreLeftWrist > 0.2)
	{
		circle(leftWristX,leftWristY,20);

			song1.stop();

		if(song2_status == false)
		{
			song2.play();
			document.getElementById("song").innerHTML = "Reproduciendo: Canción de Peter Pan"
		}
	}*/
}
function modelLoaded(){
    console.log("modelo caragado");
}

function gotPoses(results){
    if(results.length>0){
        score1 =  results[0].pose.keypoints[9].score;
        console.log(results);
		mix=results[0].pose.leftWrist.x;
        miy=results[0].pose.leftWrist.y;
        mdx=results[0].pose.rightWrist.x;
        mdy=results[0].pose.rightWrist.y;

        console.log(mix+" , "+ miy +" , "+ mdx +" , "+mdy);
    }
}