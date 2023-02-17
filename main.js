function setup() {
    console.log("Program Executed!!")
    canvas = createCanvas(900, 700);
    canvas.center();
}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

X = 0;
Y = 0;
draw_circle = "";
draw_rect = "";

function start() {
    document.getElementById("status").innerHTML = "System is listening. Please speak";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("status").innerHTML = "Speech is recognized as :" + content;

    if(content == "circle"){
        X = Math.floor(Math.random * 900);
        Y = Math.floor(Math.random * 700);
        draw_circle = "set";
    }

    if(content == "circle"){
        X = Math.floor(Math.random * 900);
        Y = Math.floor(Math.random * 700);
        draw_rect = "set";
    }

}

function draw() {
    if(draw_circle == "set"){
        radius = Math.floor(Math.random * 100);
        circle(X, Y, radius);
        draw_circle = "";
    }

    if(draw_rect == "set"){
        radius = Math.floor(Math.random * 100);
        rect(X, Y, 90, 50);
        draw_rect = "";
    }
}


