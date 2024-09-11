class PokemonTcg {
	constructor() {
		this.api = "https://api.pokemontcg.io/v2"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getCards() {
		const response = await fetch(
			`${this.api}/cards`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCard(cardId) {
		const response = await fetch(
			`${this.api}/cards/${cardId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getSets() {
		const response = await fetch(
			`${this.api}/sets`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getSet(setId) {
		const response = await fetch(
			`${this.api}/sets/${setId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getTypes() {
		const response = await fetch(
			`${this.api}/types`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getSubTypes() {
		const response = await fetch(
			`${this.api}/subtypes`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}


	async getSuperTypes() {
		const response = await fetch(
			`${this.api}/supertypes`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getRarities() {
		const response = await fetch(
			`${this.api}/rarities`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {PokemonTcg}
