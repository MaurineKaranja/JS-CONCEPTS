let container = document.querySelector('.container')

const fetchData = async ()=> {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    const characters = data.results

    characters.forEach ((character)=>{
        console.log(character)
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML =`
        <div> 
        <img src="${character.image}"/>
        <h2>${character.name}</h2>
        <p>Status: ${character.status}</p>
        <p>Species: ${character.species}</p>
        <p>Origin: ${character.location.name}</p>
        </div>
        
        ` 
        container.appendChild(card)
    })

        const footer = document.createElement('footer');
        footer.classList.add('footer')
        footer.innerHTML = `
        <div>
        <a>CHARACTERS:826</a>
        <a>LOCATION:126</a>
        <a>EPISODES:51</a>
        </div>
        `
        document.body.appendChild(footer);
    }
    

fetchData()