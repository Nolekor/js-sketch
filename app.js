

function getUserInput() {
    let userInput = prompt("How many Box you want?", "Enter a number");

    if (isNaN(userInput)) {
        alert("Please enter a number!") 
        return;
    } 
    userInput > 64 ? userInput = 64 : userInput = userInput; 
    makeGrid(userInput)
}


function makeGrid(numOfBox) {
    const container = document.querySelector("#container");
    container.style.gridTemplateColumns = `repeat(${numOfBox}, 1fr)`;
    for (let i = 0; i < numOfBox*numOfBox; i++) {
        let square = document.createElement('div')
        square.classList.add('box')
        container.appendChild(square);
    }
}

function resetGrid ()  {
    const container = document.querySelector("#container");
    container.innerHTML = ""
}



let btnstr = document.querySelector('#start')
btnstr.addEventListener('click', getUserInput)

let btnrs = document.querySelector('#reset')
btnrs.addEventListener('click', resetGrid)

