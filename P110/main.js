gesture = "";
Webcam.set({
    witdh:350,
    height:300,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot()
{
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/IENOfbcVU/model.json',modelLoaded);
function modelLoaded() {
    console.log('Model Loaded!');
}
function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if (error) {
        console.error(error);
     } else{
         console.log(results);
         document.getElementById("result_emotion_name").innerHTML = results[0]. label
         gesture = results[0].label;
         if(gesture == "Amazing"){
             document.getElementById("update_object").innerHTML = "&#128076";
                var synth = window.speechSynthesis;
    speak_data_1 = "This is looking Amazing";
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
         }
         else if(gesture == "All The Best"){
            document.getElementById("update_object").innerHTML = "&#128077";
               var synth = window.speechSynthesis;
   speak_data_1 = "All The Best";
   var utterThis = new SpeechSynthesisUtterance(speak_data_1);
   synth.speak(utterThis);
        }
         else if(gesture == "Victory"){
            document.getElementById("update_object").innerHTML = "&#9996";
               var synth = window.speechSynthesis;
   speak_data_1 = "That is a marvelous victory!";
   var utterThis = new SpeechSynthesisUtterance(speak_data_1);
   synth.speak(utterThis);
        }
     }
}