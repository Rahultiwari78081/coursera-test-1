(function(window){
var names=["jay","jom","jok","gh","gft","khh","hrt",satyendra","rom","jack","jor","jamu"];
for(var i in names){
    var firstletter=names[i].charAt(0).toLowerCase();
    if(firstletter=='j'){
        window.byeSpeaker.sayBye(names[i]);

    }
    else{
       window.helloSpeaker.sayhello(names[i]);
    }
}
})(window);
