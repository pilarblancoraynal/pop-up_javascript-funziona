var score = {
    userScore: 0,
    cpuScore: 0
}

var userPick;
var cpuPick;

var allOptions = [
    {
        name: "sasso",
        image: "assets/sasso.png"
    },
    {
        name: "carta",
        image: "assets/carta.png"
    },
    {
        name: "forbice",
        image: "assets/forbice.png"
    },

]

var possibleUserPicks = document.getElementsByClassName("user-choice");

for (var i = 0; i < possibleUserPicks.length; i++){
    possibleUserPicks[i].addEventListener('click', onUserPick);
}

function onUserPick(){
        userPick = this.dataset.name;
        console.log("la tua scelta è:", userPick);
        generateCpuPick();
        console.log("la scelta del pc è:", cpuPick.name);
        console.log(checkWhoWon());

        var cpuPickImage = "<img src='" + cpuPick.image +"' />";
        var cpuPickText = "<h3>" + cpuPick.name +"</h3>";

        document.getElementById("computer-choice").innerHTML = cpuPickImage + cpuPickText;
}

function generateCpuPick(){
    cpuPick = allOptions[Math.floor(Math.random() * allOptions.length)];
}

function checkWhoWon(){
        if(userPick == cpuPick.name) {
         return "Hai pareggiato";
             } else {
            if (userPick == "sasso"){
               if (cpuPick.name == "forbice"){
                 return "Hai vinto";
                  }else {
                    return "Hai perso";
                  }
                } 
            if (userPick == "carta"){
                if (cpuPick.name == "sasso"){
                         return "Hai vinto";
                }else {
                  return "Hai perso";
                }
                 
                 }
            if (userPick == "forbice"){
                if (cpuPick.name == "carta"){
                         return "Hai vinto";
                }else {
                 return "Hai perso";
            }
        }
     }
}