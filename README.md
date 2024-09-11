# pokemon_tcg.js
Web-API for [pokemontcg.io](https://pokemontcg.io/) ultimate Pokémon Trading Card Game developer resource

## Example
```JavaScript
async function main() {
	const { PokemonTcg } = require("./pokemon_tcg.js")
	const pokemonTcg = new PokemonTcg()
	const cards = await pokemonTcg.getCards()
	console.log(cards)
}

main()
```
