import fetch from "node-fetch";

async function getPokemonData(pokemonName, desiredType) {
  try {
    const response = await fetch(
      // Added "ICooked" to the end of the URL making it inncorrect or not valid
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}ICooked` // The "ICooked" is invaild and casues the URL to fail since it doesn't know what "ICooked" means
    );
    console.error(
      `Error with URL: https://pokeapi.co/api/v2/pokemon/${pokemonName}ICooked` // Since the URL is invalid it should show the message in the terminal "Error with URL: https://pokeapi.co/api/v2/pokemon/lefairyICooked"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data for Pokemon");
    }

    // Parse the JSON response
    const data = await response.json();

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
    // Check if the error message is related to a failed fetch (could be an invalid URL or missing Pokémon)
    if (error.message.includes("Failed to fetch")) {
      console.error(
        `Pokémon with name ${pokemonName} not found. Error: ${error.message}`
      );
    } else {
      // Log other types of errors that might occur (e.g., network issues, invalid JSON)
      console.error(`Error fetching data for Pokémon: ${pokemonName}`, error);
    }
  }
}

// Misspelled the Pokemon name therefore it return a error "Pokémon with name lefairy not found. Error: Failed to fetch data for Pokemon"
getPokemonData("lefairy", "fairy");
