var rl = require('readline-sync')

export class Carro {
    carro: string
    gasolina: number
    marca: string
    kmL: number
    constructor(carro: string, gasolina: number, marca: string, kmL: number) {
        this.carro = carro
        this.gasolina = gasolina
        this.marca = marca
        this.kmL = kmL

    }

    andar(km: number): void {
        let anda = this.gasolina - (km / this.kmL)
        if (anda <= 0) {
            console.log("O carro não pode andar")
        }
        else {
            this.gasolina = anda
            console.log(`Sobrou ${this.gasolina} litros de gasosa`)
        }
    }
    // esse metodo serve para mostrar as informacoes do carro
    getCarro(): void {
        console.log(`Carro: ${this.carro} \nMarca: ${this.marca} \nGasolina: ${this.gasolina} \nkmL: ${this.kmL}`)
    }
    // esse metodo serve para abastecer o carro
    abastecer(valor: number): void {
        this.gasolina += valor
    }
    // esse metodo serve para imprimir a gasolina  
    obterGasolina(): number {
        return this.gasolina
    }
    // esse metodo serve para editar o carro
    setCarro(): void {
        let carroUp = rl.question('qual e o carro? ')
        let marcaUp = rl.question('Qual é a marca do carro? ')
        let gasolinaUp = rl.questionInt('Quanto de gasolina voce tem? ')
        let kmLUp = rl.questionInt('Quantos km/L seu carro faz? ')
        this.carro = carroUp
        this.marca = marcaUp
        this.gasolina = gasolinaUp
        this.kmL = kmLUp

    }

}

export class Garragem {
    carros: Carro[]
    constructor() {
        this.carros = []
    }
    // esse metodo serve para adicionar carros na garragem
    public addCarros(carro: Carro): void {
        this.carros.push(carro)
        if (this.carros.length >= 10) {
            console.log("A garagem está cheia")
        } else {
            console.log("Carro adicionado com sucesso")
        }

    }
    // esse metodo serve para mostrar os carros da garragem
    public getCarros(): void {
        for (let i = 0; i < this.carros.length; i++) {
        }

    }
}