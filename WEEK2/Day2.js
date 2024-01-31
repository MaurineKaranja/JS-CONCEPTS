
document.body.style.backgroundColor = 'red'

let initialBackGround = document.body.style.backgroundColor

let button1 = document.querySelector('.button-one')
let button2 = document.querySelector('.button-two')

button1.style.backgroundColor = 'cyan'
button2.style.backgroundColor = 'chartreuse'

button1.addEventListener('click', (e)=>{
    e.stopPropagation()
    document.body.style.backgroundColor = button1.style.backgroundColor
    console.log('button1 clicked')
})

button2.addEventListener('click', (e)=>{
    e.stopPropagation()
    document.body.style.backgroundColor = button2.style.backgroundColor
    console.log('button2 clicked')
})

document.body.addEventListener('click', ()=>{
    if(document.body.style.backgroundColor !== initialBackGround){
        document.body.style.backgroundColor = initialBackGround
    }  
})