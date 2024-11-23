# Pokémon API Data Fetcher

This project interacts with the PokeAPI to fetch data about Pokémon. You can retrieve specific information about Pokémon (such as name, type, etc.), and filter the results based on the Pokémon’s type (e.g., "fire", "water", "electric"). The script demonstrates error handling, API interaction, and data manipulation using Node.js.

## Author: Ethan Dam

## Challenge Description

### Challenge 1: API Interaction and Data Processing

- Fetch data from a public API (e.g., JSONPlaceholder, PokeAPI) using node-fetch (you'll need to install this package).
- Parse the JSON response.
- Extract specific data from the response.
- Transform or manipulate the data (e.g., filter, sort, aggregate).
- Display the processed data using console.log().
- Focus: Use node-fetch for API requests, practice JSON parsing, and data manipulation.

## Problem-solving notes:

While working on this Error handling Lab, I had encountered several challenges related to fetching API data, implementing Error handling and, filtering Pokemn by type. Below are the key steps I took to solve the problems:

1. ### Fetching Data from the API

   I chose to use node-fetch to make HTTP requests to the open PokeAPI. The API provides data about various Pokémon, including their names, types, and other attributes.
   The URL structure for the API endpoint is https://pokeapi.co/api/v2/pokemon/{pokemonName}, where {pokemonName} is a placeholder for the actual Pokémon name for example Charmander, Pikachu, etc. I used template literals to construct the URL dynamically based on user input.

2. ### Error Handling

   I implemented error handling using try...catch to catch potential issues like network errors, invalid API responses, or malformed data.
   Specifically, I checked for errors such as:
   Network errors: If the API request fails (e.g., due to a typo in the Pokémon name or network issues), an error message is thrown with the HTTP status code and message. Or possible invalid data structures, for example if the API response was missing certain properties like name type.

3. ### Filtering Pokémon by Type
   After I had successfully been able to fetch and parse the Pokémon data, I had wanted to be able to filter the Pokémon by their type and if it was correct. The data.types array contains the Pokémon's types, and I checked if one of the types matches the desired type.
   This required mapping through the data.types array and checking if any of the types match the desiredType parameter.

## Resoruce:

- PokeAPI Documentation: https://pokeapi.co/docs/v2
- node-fetch Documentation: https://www.npmjs.com/package/node-fetch
- JavaScript Array Methods (map, filter, includes): MDN Array Methods
- Instructors

## Self-Reflection:

Working on this project was a great learning experience, epsically when it came to the interaction with APIs and handling asynchronous code in JavaScript. Here are a few of my key takeaways from the process incudling both Postives and Negatives:

- Asynchronous Handling: Using async/await made working with asynchronous operations much easier. I feel more comfortable now with handling async/await using the commandline and dealing with promises.

- Handling API Errors: At first, I wasn’t sure how to handle situations where the API might return an error (like a 404 error when the Pokémon name is misspelled). I had to look up how to check for valid responses and handle different HTTP status codes but majority of the time I was stuck and wasn't really sure what to do and how kind of code I should write.

- Lastly one last thing that I would want to try to change or add is defintly allowing User Input. Currently, the Pokémon name and type are hardcoded into the function calls. In the future, I would like to be able to add user input functionality so that users can type in a Pokémon name and type dynamically, rather than modifying the code each time which gets annoying real quick.

## How to run

1. Clone the repository to your local machine.

2. Install dependencies using npm: "npm install node-fetch"

3. (Optional) In the Script.js feel free to change the Function call on line 65-71 such as Pokemon name or type to further customize the result when running the script.

4. Run the script using Node.js: "node script.js"
