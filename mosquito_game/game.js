var width = 0
var height = 0 
var lives = 1
var time_of_game = 50
var time_of_mosquito = 1500

var level = window.location.search.replace('?','')

if (level == "hard"){
    time_of_mosquito = 1000
}
if(level == "chuck"){
    time_of_mosquito = 750
}

// get the limits of screen
function adjustScreenSize(){
    width = window.innerWidth
    height = window.innerHeight
    
}

adjustScreenSize()

var time_left = setInterval(function(){
    time_of_game--
    if (time_of_game < 0){
        clearInterval(time_left)
        clearInterval(create_mosquito)
        window.location.href = "you_win.html"
    }
    else{
        document.getElementById("time-left").innerHTML = time_of_game
    }
},1000)


// set mosquito to a random position
function randomPosition(){
    
    // remove previous mosquito(if exists)
    var exists = document.getElementById('mosquito')
    
    if (exists){
        if(lives >= 3){
            document.getElementById('v'+lives).src = "images/coracao_vazio.png"
            window.location.href = "game_over.html"

        }
        exists.remove()
        document.getElementById('v'+lives).src = "images/coracao_vazio.png"
        lives++
    }
        
    
    // set limit of position of mosquito 
    var posX = Math.floor(Math.random()*width) - 90; 
    var posY = Math.floor(Math.random()*height) - 90;

    posX = (posX < 0)? 0 : posX;
    posY = (posY < 0)? 0 : posY;
    
    // create mosquito
    var mosquito = document.createElement('img')
    mosquito.src = 'images/mosquito.png'
    mosquito.className = switchSize() + ' ' + rotateMosquito()
    mosquito.style.left = posX + 'px'
    mosquito.style.top = posY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)  
}


// set size of mosquito between 3 different types
function switchSize(){
    var type = Math.floor(Math.random()*3)

    switch(type){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'    
    }
} 

function rotateMosquito(){
    var type = Math.floor(Math.random()*2)

    switch(type){
        case 0:
            return 'left'
        case 1:
            return 'right'
            
    }
}