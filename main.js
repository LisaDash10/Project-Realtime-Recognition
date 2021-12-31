function preload() {

}

function setup() {
    canvas = createCanvas(400, 250);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 300);
    video.hide();

    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/10Rwc0tJp/model.json", modelLoaded);    
}

function draw() {
    image(video, 0, 0, 500, 300);
    classifier.Classify(video, gotResult);
}

function modelLoaded() {
    console.log("Model Loaded!");
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("member_name").innerHTML = results[0].label;
        document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}