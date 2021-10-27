var stream;
var recorder;
var recControl = function(){
    if(typeof MediaRecorder == 'undefined') return;
    if(!stream){
        el.rec.textContent = 'STOP';
        navigator.getUserMedia(
            {
                video: false,
                audio: true
            },
            function(s){
                stream = s;
                recorder = new MediaRecorder(stream);
                recorder.start();
                recorder.ondataavailable = function(event) {
                    var blob = event.data;
                    var url = el.audio.src = URL.createObjectURL(blob);
                    el.audio.play();
                    //download link
                    el.download.href = url;
                    el.download.textContent = 'download'
                    el.download.download = 'output.wav';
                };
            },
            function(err){
                console.log(err.name ? err.name : err);
            }
        );
    }
    else{
        el.rec.textContent = 'REC';
        recorder.stop();
        stream.stop();
        stream = undefined;
    }
}
var el = {
    audio : $DEMO[0].querySelector('.audio'),
    rec : $DEMO[0].querySelector('.rec'),
    download: $DEMO[0].querySelector('.download')
}
el.rec.addEventListener('click', recControl, false);