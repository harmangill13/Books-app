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

        if(json.Title && json.Author && json.Rating && json.Genres && json.array.length > 0){
          json.forEach((books) => {
            document.querySelector('#title').innerText = books.Title
            document.querySelector('#author').innerText = books.Author
            document.querySelector('#rating').innerText = books.Rating
            document.querySelector('#genres').innerText = books.Genres
        })
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
const randomBook = () => {
  const booksArray =  [
  {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960
  },
  {
      title: "1984",
      author: "George Orwell",
      year: 1949
  },
  {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925
  },
  {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813
  },
  {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951
  },
  {
      title: "Brave New World",
      author: "Aldous Huxley",
      year: 1932
  },
  {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937
  },
  {
      title: "Animal Farm",
      author: "George Orwell",
      year: 1945
  },
  {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      year: 1954
  },
  {
      title: "Moby-Dick",
      author: "Herman Melville",
      year: 1851
  },
  {
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      year: 1847
  },
  {
      title: "Wuthering Heights",
      author: "Emily Brontë",
      year: 1847
  },
  {
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      year: 1890
  },
  {
      title: "Frankenstein",
      author: "Mary Shelley",
      year: 1818
  },
  {
      title: "Dracula",
      author: "Bram Stoker",
      year: 1897
  },
  {
      title: "The Adventures of Sherlock Holmes",
      author: "Arthur Conan Doyle",
      year: 1892
  },
  {
      title: "The War of the Worlds",
      author: "H.G. Wells",
      year: 1898
  },
  {
      title: "Treasure Island",
      author: "Robert Louis Stevenson",
      year: 1883
  },
  {
      title: "Alice's Adventures in Wonderland",
      author: "Lewis Carroll",
      year: 1865
  },
  {
      title: "Gulliver's Travels",
      author: "Jonathan Swift",
      year: 1726
  }
]
  const pickRandomIndex = Math.floor(Math.random() * booksArray.length)
  
  return alert(`${booksArray[pickRandomIndex].title}`)
}

