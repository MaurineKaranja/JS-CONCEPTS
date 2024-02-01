const parentContainer = document.querySelector('.parent')

// const childContainer = document.createElement('div')
// childContainer.classList.add('child')
// childContainer.innerText = 'I am a child'

// parentContainer.appendChild(childContainer)

// console.log(childContainer)

// const childContainer = document.querySelector('.child')

// const innerContainer = document.createElement('div')
// innerContainer.classList.add('inner')
// innerContainer.innerText = 'I am an inner child'

parentContainer.innerHTML = `
<div class='child'>
<div class = 'inner-child'></div>
</div>
`