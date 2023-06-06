class Urls {
    constructor() {
        this.url = 'http://localhost:8000'
    }

    getCardsById(cardId) {
        return `${this.url}/stocks/${cardId}`
    }

    getCardsAll() {
        return `${this.url}/stocks`
    }
}

export const urls = new Urls()