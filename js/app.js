// async function getBook (){
window.onload = () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const userInput = document.querySelector('input[type="text"]').value
    
    const url = 'https://books-api7.p.rapidapi.com/books/find/title?title=' + userInput;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '020ad7227amsh5bf813ac41664e0p1ff9a6jsnaf0999fbecc4',
        'X-RapidAPI-Host': 'books-api7.p.rapidapi.com'
      }
    }

    // try {
    //   const response = await fetch(url, options)
    //   const result = await response.text()
    //   console.log(result)
    // } catch (error) {
    //   console.error(error)
    // }
    fetch('https://books-api7.p.rapidapi.com/books/find/title?title='+ userInput, options).then((data) => {
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

// window.onload = () => {
//   document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault()
//     const userInput = document.querySelector('input[type="text"]').value
    
//     const url = 'https://books-api7.p.rapidapi.com/books/get/random/'
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': '020ad7227amsh5bf813ac41664e0p1ff9a6jsnaf0999fbecc4',
//         'X-RapidAPI-Host': 'books-api7.p.rapidapi.com'
//       }
//     }

//     // try {
//     //   const response = await fetch(url, options)
//     //   const result = await response.text()
//     //   console.log(result)
//     // } catch (error) {
//     //   console.error(error)
//     // }
//     fetch('https://books-api7.p.rapidapi.com/books/get/random?=' + userInput).then((data) => {
//       return data.json()
//     },
//     (err) => {
//       console.log("Error: ", err)
//     }
//     ).then(
//       (json) => {
//         console.log("JSON DATA: ", json)
//         if(json.Title && json.Author && json.Rating && json.Genres){
//           document.querySelector('#title').innerText = json.Title
//           document.querySelector('#author').innerText = json.Author
//           document.querySelector('#rating').innerText = json.Rating
//           document.querySelector('#genres').innerText = json.Genres 
//         } else {
//           console.log(document.querySelector('#title'))
//           document.querySelector('dl').style.display = 'none'
//           const errorMessage = document.createElement('h1')
//           errorMessage.innerText = "Book Not Found"
//           document.querySelector('body').append(errorMessage)
//         }
//       }
//     )
//   })
// }
