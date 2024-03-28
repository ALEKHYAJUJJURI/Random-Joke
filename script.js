let resultContainerEl = document.getElementById('resultContainer')
let btnBtnEl = document.getElementById('btnBtn');

let jokeEl = document.getElementById('joke')
let bodyEl = document.getElementById('body')
let saveBtnEl = document.getElementById('saveBtn');
let localStore ;
let listItemsEl = document.getElementById('listItems')

let emojs = ['😂😅','😂','🤣','😅','😆','😍😄','😄','😀','🤩😁']

function savedQuotes(){
   
function onDeleteQuote(){
    listItemsEl.removeChild(liEl)
}

   localStore = localStorage.getItem('quote');
    let liEl = document.createElement('li');
    liEl.classList.add('text-primary')
    liEl.textContent = localStore;
    listItemsEl.appendChild(liEl)

    let deletteIcon = document.createElement('i');
    deletteIcon.classList.add('fa','fa-trash','text-danger');
    liEl.appendChild(deletteIcon)
    deletteIcon.onclick = function(){
        onDeleteQuote()
    }
    

   // console.log(localStore)
}

saveBtnEl.addEventListener('click',savedQuotes)

function createJoke(){

let options = {
    method:"GET"

}
let url = "https://apis.ccbp.in/jokes/random"
fetch(url,options)
.then(function(response){
    return response.json()
})
.then(function(jsonData){
   // console.log(jsonData)
   let randomMoj = Math.floor(Math.random()*emojs.length)

    jokeEl.textContent = jsonData.value + emojs[randomMoj]
    localStorage.setItem('quote',jokeEl.textContent)
    
    
})
randomColor()
}
    
btnBtnEl.addEventListener('click',createJoke)
// function displayJoke(joke){
//     let divCon = document.createElement('div');
//     resultContainerEl.appendChild(divCon)

//     let jokeEl = document.createElement('h1');
//     jokeEl.textContent = joke.jokes;
//     divCon.appendChild(jokeEl)

  
// }
// })
function randomColor(){


let opt = {
    method:"GET"
}
let url1 = 'https://random-flat-colors.vercel.app/api/random?count=5';
fetch(url1,opt)
.then(function(res){
    return res.json()
})
.then(function(data){
    let val = data.colors
    let arr = Object.values(val)
    console.log(arr)
    console.log(Math.random()*arr.length)
    let randomCol = arr[Math.floor(Math.random()*arr.length)]
    console.log(randomCol) 
    bodyEl.style.backgroundColor = randomCol
    
})

}
