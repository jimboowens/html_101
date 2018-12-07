console.dir(document)
var dragon = document.getElementById("dragonDiv")
var bool = false
while (bool != true){
    var decision = prompt(`Look out! There appears a wild dragon in your path! What would you like to do (fight or flight)? > `)
    if (decision != "fight" && decision != "flight"){
        alert("Invalid input! Please choose fight or flight.")
    } else {
        bool = true
    }
}
if (decision == "fight"){
    dragon.innerHTML +=`
    <img src="dragon-assets/dragon.png"/>
`
}else{
    alert("You're a coward!")
}
