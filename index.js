//document.getElementById("count").innerText = 5

let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function Increment() { 
    count += 1
    countEl.innerText = count

}

function save() {
    console.log(count)

}

let saveEl  = document. getElementById("save-el")


console.log(saveEl)

function () {
    let countStr = count + " - "
    saveEl.textcontent += countSep
}
