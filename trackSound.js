let mic;
    var amplitude;
    var context;
    var onAndOff = false;
    // window.onload = function() {
    function setupMic() {
        console.log("running");
        context = new AudioContext();
        mic = new p5.AudioIn();
        console.log(mic.getSources());
        console.log(mic.input);
    }

    function getNoiseLevel(){
        document.getElementById("bang").innerHTML = "";
        micLevel = mic.getLevel();
        console.log(micLevel * 100);
        document.getElementById("hi").innerHTML = micLevel * 100;
        if (micLevel * 100 >= 16){
            Shoot();
            console.log("real loud");
            document.getElementById("bang").innerHTML = "Shot!";
        }
    }

    function record(){
        onAndOff = !onAndOff;
        console.log("record()");
        // context = new AudioContext();
        context.resume();
        mic.start();
        //canvas.getAudioContext().resume();
        setInterval(getNoiseLevel, 200);
    }

