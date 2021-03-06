document.addEventListener("DOMContentLoaded", () => { 

function increasingCounter() {
    return setInterval(addUp, 1000)
     }

let increaseNew = increasingCounter()

const counter = document.querySelector('#counter')

const form = document.querySelector("#comment-form")

const plus = document.querySelector('#plus')

const minus = document.querySelector('#minus')

function addUp(){
let number = parseInt(counter.innerText)
counter.innerText = `${number + 1}` }


plus.addEventListener('click', function(e){
    e.preventDefault()
addUp()   
          }
)

minus.addEventListener('click', function(e){
    e.preventDefault()
    let number = parseInt(counter.innerText)
    counter.innerText = `${number - 1}`    
          }
)


form.addEventListener('submit', function(e){
    e.preventDefault()
const comment = document.querySelector('#comment-input')
const newElement = document.createElement('p')
newElement.innerHTML = comment.value
const header = document.querySelector('#list').appendChild(newElement)
    comment.value = ""

})

const heart = document.querySelector('#heart')

heart.addEventListener("click", function(e){
    const times = 1
    let alreadyLiked = document.querySelector(`#number-${counter.innerText}`)
    if (alreadyLiked) {
       let hasBeenLiked = alreadyLiked.innerText.split(' ')[4]
       hasBeenLiked = parseInt(hasBeenLiked) + 1
       alreadyLiked.innerText = `${counter.innerText} has been liked ${hasBeenLiked} times`
    }

    else{
    const list = document.querySelector('.likes');
    const liElement = document.createElement('li')
    liElement.id = `number-${counter.innerText}`
    liElement.innerText = `${counter.innerText} has been liked ${times} times.`
    list.appendChild(liElement)
    }

})

//find pause button 
let pause = document.querySelector('#pause')
console.log(pause)
// click event stop timer
pause.addEventListener('click', function(){
   let array = document.querySelectorAll('button')
   if (pause.innerText === "pause"){
      clearInterval(increaseNew)
      pause.innerText = "resume"
      for (let i = 0; i < array.length; i ++){
         array[i].disabled = true;
      }
      pause.disabled = false;
   } else if (pause.innerText == "resume" ) { 
      clearInterval(increaseNew)
      increaseNew = increasingCounter()
      pause.innerText = "pause"
      for (let i = 0; i < array.length; i ++){
         array[i].disabled = false;
      }
   }
})


})