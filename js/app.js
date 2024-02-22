window.onload = () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const userInput = document.querySelector('input[type="text"]').value

    fetch('https://rapidapi.com/akshithp111/api/books-api7=' + userInput).then((data) => {
      return data.json()
    },
    (err) => {
      console.log("Error: ", err)
    }
    ).then(
      (json) => {
        console.log("JSON DATA: ", json)
        if(json.Title && json.Author && json.Rating && json.Genres){
          document.querySelector('#title').innerText = json.Title
          document.querySelector('#author').innerText = json.Author
          document.querySelector('#rating').innerText = json.Rating
          document.querySelector('#genres').innerText = json.Genres 
        } else {
          console.log(document.querySelector('#title'))
          document.querySelector('dl').style.display = 'none'
          const errorMessage = document.createElement('h1')
          errorMessage.innerText = "Book Not Found"
          document.querySelector('body').append(errorMessage)
        }
      }
    )
  })
}