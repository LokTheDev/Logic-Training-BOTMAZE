const upButton = document.getElementById("up")
const downButton = document.getElementById("down")
const leftButton = document.getElementById("left")
const rightButton = document.getElementById("right")


//Map Application
const block1 = document.getElementById("block1")
const block2 = document.getElementById("block2")
const block3 = document.getElementById("block3")
const block4 = document.getElementById("block4")
const block5 = document.getElementById("block5")
const block6 = document.getElementById("block6")
const block7 = document.getElementById("block7")
const block8 = document.getElementById("block8")
const block9 = document.getElementById("block9")
const block10 = document.getElementById("block10")
const block11 = document.getElementById("block11")
const block12 = document.getElementById("block12")
//logic
let mazeMap = [[[1],[2],[3]],
               [[4],[5],[6]],
               [[7],[8],9]]

let boxY = 0
let boxX = 0
let botPos = mazeMap[[boxX][boxY]]
let oldPos = null




//button funtion
upButton.addEventListener("click", function(){
    boxY--
    if(boxY > 2){
        boxY = 2
        alert("stay in the maze!")
    }else if (boxY < 0){
        boxY =0
        alert("stay in the maze!")
    }
    if(blockX==boxX && blockY==boxY){
        alert("blocked")
        boxX++
    }
    updateUI();
})

downButton.addEventListener("click", function(){
   boxY++
   if(boxY > 2){
    boxY = 2
    alert("stay in the maze!")
}else if (boxY < 0){
    boxY =0
    alert("stay in the maze!")
}
    if(blockX==boxX && blockY==boxY){
    alert("blocked")
    boxY--
}
   updateUI();
})

leftButton.addEventListener("click", function(){
    boxX--
    if(boxX > 2){
        boxX = 2
        alert("stay in the maze!")
    }else if (boxX < 0){
        boxX =0
        alert("stay in the maze!")
    }
    if(blockX==boxX && blockY==boxY){
        alert("blocked")
        boxX++
    }
    updateUI();
})

rightButton.addEventListener("click", function(){
    boxX++
    if(boxX > 2){
        boxX = 2
        alert("stay in the maze!")
    }else if (boxX < 0){
        boxX =0
        alert("stay in the maze!")
    }
    if(blockX==boxX && blockY==boxY){
        alert("blocked")
        boxX--
    }
    updateUI();
})





//mazeInit Win
boxY = 0
boxX = 0
block9.style.backgroundColor = ("red")
updateUI();


//setBlock
let blockY = Math.floor(Math.random()*3)
let blockX = Math.floor(Math.random()*3)

function setBlock(){
    if(blockY==0 && blockX ==0 ){
        blockY = Math.floor(Math.random()*3)
        blockX = Math.floor(Math.random()*3)
        setBlock();
    }else if (blockY==0 && blockX ==1 ){
        block2.style.backgroundColor = ("black")
    }else if (blockY==0 && blockX ==2 ){
        block3.style.backgroundColor = ("black")
    }else if (blockY==1 && blockX ==0 ){
        block4.style.backgroundColor = ("black")
    }else if (blockY==1 && blockX ==1 ){
        block5.style.backgroundColor = ("black")
    }else if (blockY==1 && blockX ==2 ){
        block6.style.backgroundColor = ("black")
    }else if (blockY==2 && blockX ==0 ){
        block7.style.backgroundColor = ("black")
    }else if (blockY==2 && blockX ==1 ){
        block8.style.backgroundColor = ("black")
    }else if (blockY==2 && blockX ==2 ){
        blockY = Math.floor(Math.random()*3)
        blockX = Math.floor(Math.random()*3)
        setBlock();
    }

}

setBlock();














//UPDATE MOVE
function updateUI(){    
    block1.innerHTML =("item1")
    block2.innerHTML =("item2")
    block3.innerHTML =("item3")
    block4.innerHTML =("item4")
    block5.innerHTML =("item5")
    block6.innerHTML =("item6")
    block7.innerHTML =("item7")
    block8.innerHTML =("item8")
    block9.innerHTML =("item9")

if(boxY==0 && boxX ==0){
    block1.innerHTML =("🤖")
}else if (boxY==0 && boxX ==1){
    block2.innerHTML =("🤖")
}else if (boxY==0 && boxX ==2){
    block3.innerHTML =("🤖")
}else if (boxY==1 && boxX ==0){
    block4.innerHTML =("🤖")
}else if (boxY==1 && boxX ==1){
    block5.innerHTML =("🤖")
}else if (boxY==1 && boxX ==2){
    block6.innerHTML =("🤖")
}else if (boxY==2 && boxX ==0){
    block7.innerHTML =("🤖")
}else if (boxY==2 && boxX ==1){
    block8.innerHTML =("🤖")
}else if (boxY==2 && boxX ==2){
    block9.innerHTML =("🤖")
}

//rule
if(boxX==2 && boxY==2){
    alert("win")
}

}





//maze Rules

    
