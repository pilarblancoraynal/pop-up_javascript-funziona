var userScore = 0;
var cpuScore = 0;

var userPick = "sasso";
var cpuPick = "";

var allOptions = ["sasso","carta","forbice"];

var possibleUserPicks = document.getElementsByClassName("user-choice");

for(var i = 0; i < possibleUserPicks.lenght; i++){
    possibleUserPicks[i].addEventListener('click', function(){
        userPick = this.database.name;
    });
}


function generateCpuPick(){
    cpuPick = allOptions[Math.floor(Math.random()* allOptions.length)];
    console.log(cpuPick);
}

generateCpuPick();

function checkWhoWon(){
         if(userPick == cpuPick) {
         console.log ("Hai pareggiato");
             } else {
                 if (userPick == "sasso"){
                     if (cpuPick == "forbice"){
                         console.log ("Hai vinto");
                     }else {
                         console.log ("Hai perso");
                     }
                 } else if (userPick == "carta"){
                     if (cpuPick == "sasso"){
                         console.log ("Hai vinto");
                     }else {
                         console.log ("Hai perso");
                     }
                 
                 }else if (userPick == "forbice"){
                     if (cpuPick == "carta"){
                         console.log ("Hai vinto");
                     }else {
                         console.log ("Hai perso");
                     }
                 }
             }
         }