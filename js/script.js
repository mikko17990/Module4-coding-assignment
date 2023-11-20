
var names = ["JSomeName", "SomeName","Yaaka","Ko","Seng"];
for (var i = 0; i < names.length; i++){
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
        console.log("Good bye" + names[i]);
       // jsomeNameSpeak.sayGoodbye(names[i]);
    }else{
        console.log("Hello" + names[i]);
        //someNameSpeak.sayHello(names[i]);
    }
}
;