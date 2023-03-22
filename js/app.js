let button = document.querySelector('#btn')
let title = document.querySelector('h1')
let container = document.querySelector('.container')
let h2 = document.querySelector('.h2')

//fetch joke
let joke = () =>{
    fetch('https://api.chucknorris.io/jokes/random')
    //parse data
    .then((response) => response.json())
    .then((data) => {
        h2.innerText = data.value
    })
    
    
}

button.addEventListener('click', joke)