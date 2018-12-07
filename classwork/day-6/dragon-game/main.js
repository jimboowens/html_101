console.dir(document)
var dragon = document.getElementById(dragon)
var bool = false
while (bool != true){
    var decision = prompt(`Look out! There appears a wild dragon in your path! 
    What would you like to do (fight or flight)? > `)
    if (decision != "fight" && decision != "flight" && decision!=null){
        alert("Invalid input! Please choose fight or flight.")
        alert(decision)
    } else {
        bool = true
    }
}
// if (decision == "fight"){

// } else (decision == "flight"){

// };
// dragon.innerHTML = '';