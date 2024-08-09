import { Carro } from "./carro";

var rl = require('readline-sync')

export class Garragem {
    carros: Carro[]
    constructor() {
        this.carros = []
    }

    public addCarros(carro: Carro): void {
        this.carros.push(carro)
        if (this.carros.length >= 10) {
            console.log("A garagem está cheia")
        } else {
            console.log("Carro adicionado com sucesso")
        }

    }
    public getCarros(): void {
        for (let i = 0; i < this.carros.length; i++) {
        }

    }
}