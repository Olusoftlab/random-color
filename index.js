const containerEl=document.querySelector(".container")


for (let i=0; i < 30; i++ ){

    const colorContainerEl=document.createElement('div')
    colorContainerEl.classList.add("color-container")
    let myColorBox=randomCodes()
    colorContainerEl.style.backgroundColor="#"+myColorBox
    colorContainerEl.innerText="#" + myColorBox
    containerEl.appendChild(colorContainerEl)    
}



function randomCodes(){
    const char="0123456789abcdef"    
    const  colorLength=6
    let  myCode=""

    for (i=0; i < colorLength; i++){
         
       const randomNumber=Math.floor(Math.random()*char.length)
       myCode+=char.substring(randomNumber, randomNumber + 1)
    }

    return myCode
}


