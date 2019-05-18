var score = {
    userScore: 0,
    cpuScore: 0
}

var userPick;
var cpuPick;

var allOptions = ["sasso","carta","forbice"]

var possibleUserPicks = document.getElementsByClassName("user-choice");

for (var i = 0; i < possibleUserPicks.length; i++){
    possibleUserPicks[i].addEventListener('click', onUserPick);
}

function onUserPick(){
        userPick = this.dataset.name;
        console.log("la tua scelta è:", userPick);
        generateCpuPick();
        console.log("la scelta del pc è:", cpuPick);
        console.log(checkWhoWon());
        document.getElementById("result").innerHTML = cpuPick;
}

function generateCpuPick(){
    cpuPick = allOptions[Math.floor(Math.random() * allOptions.length)];
}

function checkWhoWon(){
        if(userPick == cpuPick) {
         return "Hai pareggiato";
             } else {
            if (userPick == "sasso"){
               if (cpuPick == "forbice"){
                 return "Hai vinto";
                  }else {
                    return "Hai perso";
                  }
                } 
            if (userPick == "carta"){
                if (cpuPick == "sasso"){
                         return "Hai vinto";
                }else {
                  return "Hai perso";
                }
                 
                 }
            if (userPick == "forbice"){
                if (cpuPick == "carta"){
                         return "Hai vinto";
                }else {
                 return "Hai perso";
            }
        }
     }
}