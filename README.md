# Books-app
The Books app is designed to make searching for your next book an easier experience. You can search books, the descriptions, and compare where to purchase from.

Live Server: http://127.0.0.1:5502/index.html

Explanation of the app:
- Used the window.onload method learnt from class to run the function after the window is done loading. 
- Search Bar:
  - I created a search bar to by using document.querySelector to listen for the submit button.
  - Then by creating a variable for userInput I then created a url variable by adding the userInput after the url and api key.

- API key:
  - used fetch to pull from the API key. Specifiying the URL for the api and adding the userInput after allows us to gain information to the user input.
  - the .then is a promise which allows the return data.json to execute. 
  - the .then uses the data object and calls .json 
  - the second .then is checking to see if the data array created is not empty by comparing the length > 0. If the array is populated, then it will return the elements with the following IDs, #title, author, rating, genres and populate the information of the book selected by the userInput. 

- Book Idea button:
  - I created an array of 20 books to randomly generate an index of the array and alert the book title after being clicked. 
  - that was done by using the pickRandomIndex function which uses Math.floor and Math.random to generate a random number between 0-1, multiply it by the length of the array, and then round it down. 
  - I also added some css animation to the button which gave it a loop of colours it would mix between.
  - I used keyframes animate and set each gradient of each color.

Unsolved Problems:
1) I wanted to use an image of each book as a button to search the API. I wasn't able to figure out how to set the image as the button itself.
2) The code from the api was using the await command with fetch and I couldn't figure out how to change the window.onload into an async function. When I did, vs code still showed the error for await only being used in async funcitons.