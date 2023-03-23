
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function decrement() {
    count -= 1
    countEl.innerText = count
}

function save() {
    // console.log(count)
    // alert(count)

    let history =  count + " - "
    saveEl.textContent += history

    count = 0
    countEl.innerText = count
}



