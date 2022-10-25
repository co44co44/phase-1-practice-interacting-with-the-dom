
let count = 0;
// select necessary DOM NODES 
let btnAdd=document.querySelector('#plus');
let btnSubtract=document.querySelector('#minus');
let counter=document.querySelector ('#counter');
let btnPause=document.querySelector ('#pause');
//TO DO: Select form 
let form=document.querySelector ('#comment-form');
//TO DO: Select input
let input=document.querySelector ('#comment-input');
// select ul
let likeNumArea =document.querySelector ('#likes')
// Add event listener logic

// Timer functionality
const decrease = () => {
    counter.value = counter.innerText--;
}
const increase = () => {
    counter.value = counter.innerText++;
}

const countTimer= () =>{ 
    counter.innerText++
}
let timerId 

const startTimer = () => timerId= setInterval(countTimer, 1000);
startTimer()
// Pause timer

const pause = () => {
    if (btnPause.innerText === 'pause'){
        clearInterval(timerId);
        btnPause.innerText = 'resume'
    } else {
        startTimer ()
    }
}

//TO DO: add comment functionality: take input and pin to the DOM
//1.grab form  and create a js btn inside submit 
document.addEventListener("DOMContentLoaded", () => { //waits the Dom to load
    let form = document.querySelector ('form') //grab form
    form.addEventListener('submit', (e) => { //add eventlistener to form
    e.preventDefault() //prevent form default
    buildCommentArea (input.value) //call next function, target is where the event happends
    form.reset () //resets area after input
})})
//2.create a function that creates comment area and says what will happend when I press submit
function buildCommentArea (comments){
    console.log (comments)
    let p= document.createElement ('p')
    let btn = document.createElement ('button')
    btn.addEventListener ('click', handleDelete)
    btn.textContent = 'x' //add x
    p.textContent = comments
    p.appendChild(btn)
    console.log (p)
    document.querySelector('#list').appendChild(p)
}
//erase x 
function handleDelete(e){
    e.target.parentNode.remove()
}

// Add event listeners
btnPause.addEventListener('click', pause);
btnSubtract.addEventListener('click', decrease);
btnAdd.addEventListener('click', increase);
heart.addEventListener('click', selectFavoriteNumber);

//grab the heart (up) and create function to connect it to like area
function selectFavoriteNumber (e){
    buildfavNumArea (e.target.likeNumArea)
}
// WORK IN PROGRESS:function that tells what to do: 
//- connect heart to counter
// 
function buildfavNumArea (){
   // console.log (counter.value)
    let p= document.createElement ('p')
    p.textContent = counter.value
    console.log (p)
    document.querySelector('#likes').appendChild(p)
}
