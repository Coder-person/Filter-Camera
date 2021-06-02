function preload(){

}

function setup(){
    canvas = createCanvas(650,500);
    canvas.position(110,300);
    video = createCapture(VIDEO);
    video.hide();
    tintC = "";
}

function filter_tint(){
    tintC = document.getElementById("colors").value;
}

function draw(){
    image(video,0,0,650,500);
    tint(tintC);
}

function take_snapshot(){
    save('filter_camera.png');
}