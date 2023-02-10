// document.getElementById("count").innerText = 5

// cmd+k+c
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)


// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console

// let myAge = 26
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// document.getElementById('count')


let count = 0
let saveEL = document.getElementById('save-el')
let countEl = document.getElementById('count-el')
function increment(){
    count += 1
    countEl.textContent = count
    console.log("Element was incremented.")
}

function save(){
    let countStr = count + " - "
    saveEL.textContent += countStr
    count = 0
    countEl.textContent = count
    console.log("Count=> ", count)
}