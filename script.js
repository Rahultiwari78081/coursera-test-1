(function(window){
var names=["jay","jom","jok","gh","gft","khh"];
for(var i in names){
    var firstletter=names[i].charAt(0).toLowerCase();
    if(firstletter=='J'){
        window.byeSpeaker.sayBye(names[i]);

    }
    else{
       window.helloSpeaker.sayhello(names[i]);
    }
}
})(window);