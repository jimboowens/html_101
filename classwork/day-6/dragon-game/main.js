console.dir(document)
var dragon = document.getElementById("dragonDiv")

var diceRoll = {
    1:"<img src='d1.gif'/>",
    2:"<img src='d2.gif'/>",
    3:"<img src='d3.gif'/>",
    4:"<img src='d4.gif'/>",
    5:"<img src='d5.gif'/>",
    6:"<img src='d6.gif'/>",
}

var gameOn = true
// first prompt to start game
while (gameOn != false){
    var decision = prompt(`Look out! There appears a wild dragon in your path! 
    What would you like to do (fight or flight)? > `)
    if (decision != "fight" && decision != "flight"){
        alert("Invalid input! Please choose fight or flight.")
    } else if (decision == "flight"){
        alert (`you're a coward!`)
    }
    else {
        dragon.innerHTML +=`<img src="dragon-assets/dragon.png"/>`
    }
    var bool = false
    while (bool!= true){
        var decision = prompt(`You have chosen to fight! Would you like a quick tutorial (y or n)? `)
        if (decision !='y' && decision != `n`){
            alert("Invalid input! Please choose 'y' or 'n'.")
        } else {
            bool = true
        }
    }
    if (decision == 'y'){
        alert (`This is a simple game; you will attack the dragon based on what dice you roll. 
        If you roll above 9, your attack lands! If not, your attack misses and the dragon may attack.`)
        decision = 'y'
    }
    alert(`Here goes, brave soul!`)
    dragon.innerHTML = `<button class="button3">Roll Dice</button>`
    function rollDice(){

    }


}