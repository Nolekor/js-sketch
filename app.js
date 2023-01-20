

function getUserInput() {
    let userInput = prompt("How many Box you want?", "Enter a number");

    if (isNaN(userInput)) {
        alert("Please enter a number!") 
        return;
    } 
    userInput > 64 ? userInput = 64 : userInput = userInput; 
    makeGrid(userInput)
}

window.onload = function() {
    makeGrid(16);
  };

function makeGrid(numOfBox) {
    const container = document.querySelector("#container");
    container.style.gridTemplateColumns = `repeat(${numOfBox}, 1fr)`;
    for (let i = 0; i < numOfBox*numOfBox; i++) {
        let square = document.createElement('div')
        square.style.backgroundColor = "white";
        square.classList.add('box')
        square.addEventListener('mouseover', changeGridColor)
        container.appendChild(square);
    }
}

// function noRgbColor() {}

function changeGridColor(e) {
    let color = `rgb(${[0, 0, 0].map( () => {
      return Math.floor(Math.random() * 256);
    }).join(',')})`
    Object.assign(e.target.style, {
      backgroundColor : color
    });
  }
  

function resetGrid ()  {
    const container = document.querySelector("#container");
    container.innerHTML = ""
    makeGrid(16)
}



let btnstr = document.querySelector('#start')
btnstr.addEventListener('click', getUserInput)

let btnrs = document.querySelector('#reset')
btnrs.addEventListener('click', resetGrid)

// let noRGB = document.querySelector("#no-Rgb")
// let rgbColor = document.querySelector("#rgbColor")
// noRGB.addEventListener('click', noRgbColor)
// rgbColor.addEventListener('click', changeGridColor)