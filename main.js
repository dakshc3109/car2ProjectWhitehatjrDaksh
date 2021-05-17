//starting of defining variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var car1_width = 120;
var car1_height = 70;
var car1_image = "car1.png";
var car1_x = 10;
var car1_y = 10;

var car2_width = 120;
var car2_height = 70;
var car2_image = "car2.jpg";
var car2_x = 10;
var car2_y = 100;

var background_image = "background.jpg";

var background_imgTag = new Image(); 
var car1_imgTag = new Image();
var car2_imgTag = new Image();

//ending for defining variables

//adding add function

function add(){
    background_imgTag.onload = uploadBackground;  //setting background onload
    background_imgTag.src = background_image;  //uploading src

    car1_imgTag.onload = car1Upload;  //seeting car 1 onload
    car1_imgTag.src = car1_image;  //uploading src
    
    //doing same for car 2 now
    car2_imgTag.onload = car2Upload;
    car2_imgTag.src = car2_image;
    //done setup for car 2
}

//function upload background started

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

//endeded for background here

//car upload started

//car 1

function car1Upload(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

//car 2

function car2Upload(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

//car upload ended

//keydown function started

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    var keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed ==  '38'){
        car1_up();
        console.log("up arrow key");
    }

    if(keyPressed ==  '40'){
        car1_down();
        console.log("down arrow key");
    }

    if(keyPressed ==  '37'){
        car1_left();
        console.log("left arrow key");
    }

    if(keyPressed ==  '39'){
        car1_right();
        console.log("right arrow key");
    }

    if(keyPressed ==  '87'){
        car2_up();
        console.log("key w");
    }

    if(keyPressed ==  '83'){
        car2_down();
        console.log("key s");
    }

    if(keyPressed ==  '65'){
        car2_left();
        console.log("key a");
    } 
    
    if(keyPressed ==  '68'){
        car2_right();
        console.log("key d");
    } 
}

//all done for keydown function for car project 1

//now we are going to implement functions
//car1

function car1_up(){
    if(car1_y >= 0){
       car1_y = car1_y - 10;
       console.log(" car1 x = "+car1_x+" car1 y = "+car1_y);
       uploadBackground();
       car1Upload();
       car2Upload();
    }
}

function car1_down(){
    if(car1_y <= 500){
       car1_y = car1_y + 10;
       console.log(" car1 x = "+car1_x+" car1 y = "+car1_y);
       uploadBackground();
       car1Upload();
       car2Upload();
    }
}

function car1_left(){
    if(car1_x >= 0){
       car1_x = car1_x - 10;
       console.log(" car1 x = "+car1_x+" car1 y = "+car1_y);
       uploadBackground();
       car1Upload();
       car2Upload();
    }
}

function car1_right(){
    if(car1_x <= 700){
       car1_x = car1_x + 10;
       console.log(" car1 x = "+car1_x+" car1 y = "+car1_y);
       uploadBackground();
       car1Upload();
       car2Upload();
    }
}

//car2

function car2_up(){
    if(car2_y >= 0){
       car2_y = car2_y - 10;
       console.log(" car2 x = "+car2_x+" car2 y = "+car2_y);
       uploadBackground();
       car1Upload();
       car2Upload();
    }
}

function car2_down(){
    if(car2_y <= 500){
       car2_y = car2_y + 10;
       console.log(" car2 x = "+car2_x+" car2 y = "+car2_y);
       uploadBackground();
       car1Upload();
       car2Upload();
    }
}

function car2_left(){
    if(car2_x >= 0){
       car2_x = car2_x - 10;
       console.log(" car2 x = "+car2_x+" car2 y = "+car2_y);
       uploadBackground();
       car1Upload();
       car2Upload();
    }
}

function car2_right(){
    if(car2_x <= 700){
       car2_x = car2_x + 10;
       console.log(" car2 x = "+car1_x+" car2 y = "+car1_y);
       uploadBackground();
       car1Upload();
       car2Upload();
    }
}