(function(window){
var names=["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
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
