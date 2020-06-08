(function(window){
    var byeSpeaker={};
    var speak="Good Bye";
    byeSpeaker.sayBye=function(name){
        console.log(speak+" "+name);
    }
    window.byeSpeaker=byeSpeaker;

})(window);