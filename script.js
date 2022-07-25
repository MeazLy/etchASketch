const container = document.querySelector(".gridContainer")
const pixelAmount = document.querySelector(".pixelAmount")
const resetButton = document.querySelector(".clearCanvas")


pixelAmount.addEventListener("click", () =>{
    
    let userSizeInput = Number(prompt("How many pixels would you like?"))
    if(userSizeInput > 100){
        alert("Error! Please enter a number smaller than 100")
    }else{
        createGrid(userSizeInput)
    }
})

resetButton.addEventListener("click", () => {
    window.location = window.location
})


function createGrid(numOnEachSide){
    const widthAndHeight = 960 / numOnEachSide
    
    for(let i = 0; i < numOnEachSide; i++){
        let rows = document.createElement("div")
        rows.classList.add("gridRow")

    
        for(let j = 0; j < numOnEachSide; j++){
            let gridBox = document.createElement("div")
            gridBox.classList.add("gridBox")
            gridBox.style.height = `${widthAndHeight}px`
            gridBox.style.width = `${widthAndHeight}px`
            rows.appendChild(gridBox)
            gridBox.addEventListener("mouseenter", () => {
                gridBox.style.backgroundColor = "black"
            })
        }

        container.appendChild(rows)


}}

