var rl = require('readline-sync')


export class carro {
    tanque: number
    km: number
    marca: String 
    distancia: number
    constructor(tanque: number, km: number, marca: String,  distancia: number) {
        this.tanque = tanque
        this.km = km
        this.marca = marca
        this.distancia = distancia
    
    }

    getCarro(): void{
        console.log(`Marca: ${this.marca} \nTanque: ${this.tanque} \nKm: ${this.km} \nDistancia: ${
            this.distancia} \n`)
    }

    setCarro(): void{
        let tanqueUp = rl.questionInt('Digite o tanque do carro: ')
        let kmUp = rl.questionInt('Digite a quilometragem do carro: ')  
        let marcaUp= rl.question('Digite a marca do carro: ')
        let distanciaUp = rl.questionInt('Digite a distancia que deseja percorrer: ')
        this.tanque = tanqueUp
        this.km = kmUp
        this.marca = marcaUp
        this.distancia = distanciaUp
        
    }

   andar(): void{
   let distancia = rl.questionInt ('Quantos Km voce quer anda?')
    let litros = distancia / this.km
    let viagem = this.tanque - (this.km/ this.distancia)
    if (litros > this.tanque) {
        console.log (`Voce não tem gasolina para andar ${distancia} Km`)
        } else {
            this.tanque -= viagem
            console.log (`Voce tem gasolina para andar ${distancia} Km`)
   }

}

    obterGasolina(): void {
        let litros = rl.questionInt('qual o nivel atual de gasolina?: ')
        this.tanque = litros
}

    adicionarGasolina(): void{
        let litros = rl.questionInt('Digite a quantidade de litros que deseja adicionar: ')
        this.tanque += litros
    }
}


export class garagem{
    Carro: carro[]
    constructor(){
        this.Carro = []
    }
     addCarro(carro: carro): void{
        if(this.Carro.length >= 10)
        console.log('A garagem está cheia')
    else
    this.Carro.push(carro)
    }


    removerCarro(): void{
        console.log(this.Carro)
        let remover = rl.question('Insira o titulo para excluir o carro: ')
        this.Carro = this.Carro.filter(carro => carro.marca !== remover)
    }
    
} 



