(function(window){
    var helloSpeaker={};
    helloSpeakerName="hello";
    helloSpeaker.sayhello=function(name){
        console.log(helloSpeakerName+" "+name);
    }
    window.helloSpeaker=helloSpeaker;

})(window);
