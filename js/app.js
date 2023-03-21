let button = document.querySelector('#btn')
let title = document.querySelector('h1')
let container = document.querySelector('.container')

//fetch joke
let joke = () =>{
    fetch('https://api.chucknorris.io/jokes/random')
    //parse data
    .then((response) => response.json())
    .then((data) => {
        //create new element
        let joke = document.createElement('h2')
        //append
        container.appendChild(joke)
        //inner text
        joke.innerText = data.value
    })
    
    
}

button.addEventListener('click', joke)