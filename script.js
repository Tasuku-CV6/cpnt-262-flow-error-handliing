import fetch from "node-fetch";

async function getPokemonData(pokemonName, desiredType) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data for ${pokemonName}. HTTP Status: ${response.status} ${response.statusText}`
      );
    }

    // Parse the JSON response
    const data = await response.json();

    // Check if the expected properties exist in the data
    if (!data || !data.name || !data.types) {
      throw new Error(
        `Invalid data structure received for ${pokemonName}: Missing required properties.`
      );
    }

    // Extract the name of the Pokémon
    const name = data.name;

    // Extract the type of the Pokemon
    const types = data.types.map((typeInfo) => typeInfo.type.name);

    // Filter Pokemon by type
    const isDesiredType = types.includes(desiredType);

    // Log the name and type of the Pokémon or Display the information
    console.log(`The Pokémon name is: ${pokemonName}`);
    console.log(`The Pokemon type are: ${types.join(`, `)}`);

    // Return filtered result if the Pokemon has desired type
    if (isDesiredType) {
      console.log(`${name} is a ${desiredType}-type Pokemon.`);
      return { name, types };
    } else {
      console.log(`${name} is not a ${desiredType}-type Pokemon.`);
      return null;
    }
  } catch (error) {
    // Handle errors dealing with Network Errors, Malformed Data, and Unexpected Error
    if (error.message.includes("Failed to fetch")) {
      console.error(
        `Error fetching data for Pokémon ${pokemonName}: ${error.message}`
      );
    } else if (error.message.includes("Invalid data structure")) {
      console.error(
        `Error: Received malformed data for Pokémon ${pokemonName}. ${error.message}`
      );
    } else {
      console.error(
        `An unexpected error occurred while fetching data for Pokémon ${pokemonName}: ${error.message}`
      );
    }
  }
}

// Example with valid Pokemon name and type
getPokemonData("clefairy", "fairy"); // This function should run successfully since Pokemon name and type are both valid

// Example with valid Pokemon name but incorrect type (This would demostrate error filtering)
getPokemonData("pikachu", "water"); // This function should return the result "pikachu is not a water-type Pokemon."

// Example with misspelled Pokemon name
getPokemonData("chamander", "fire"); // This function should fail and show the error "API error: Failed to fetch data for chamander. HTTP Status: 404 Not Found" due to an invaild Pokemon name
