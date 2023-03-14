let button = document.querySelector('#btn')
let title = document.querySelector('h1')

//fetch joke
let joke = () =>{
    fetch('https://api.chucknorris.io/jokes/random')
    //parse data
    .then((response) => response.json())
    .then((data) => {
        //create new element
        let joke = document.createElement('h2')
        //append
        document.body.appendChild(joke)
        //inner text
        joke.innerText = data.value
    })
    
    
}

button.addEventListener('click', joke)