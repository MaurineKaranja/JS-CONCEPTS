/**
 * @DOM MANIPULATION
 * @ACCESING
 * Query selectors
 * document.queryselectors
 * 
 * ID selectors
 * document.getElementById
 * 
 * Class selectors
 * document.getElementByClassName
 */

// console.log(document.body.children.item(0))

// document.body.style.backgroundColor= "red"

// let heading = document.querySelector('#heading')
// console.log(heading)
// heading.style.color = "yellow"

// //to select using class name we use . then the class and to select using ID we use #before the ID.


// /**
//   * @EVENTLISTENERS
//   */
//  let clickMeButton = document.querySelector('.click-me-button')
//  clickMeButton.addEventListener('click', ()=>{
//      document.body.style.backgroundColor = 'cyan'
//  })

//  let input = document.querySelector('.input')

let button = document.querySelector('.click-me-button');
let paragraph = document.querySelector('.paragraph');
let initialText = paragraph.innerText
console.log(paragraph.innerText)
button.addEventListener('click', ()=>{
    if (paragraph.innerText === initialText){
    paragraph.innerText = 'Hello, World!'
    }else
     paragraph.innerText = initialText
 })