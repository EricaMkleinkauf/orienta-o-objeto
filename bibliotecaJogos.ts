import { Jogo } from "./games"


var rl = require ('readline-sync')
export class BibliotecaDeJogos{
    Jogos: Jogo[]
    constructor(){
        this.Jogos = []
}

public addJogos(jogo: Jogo): void{
    this.Jogos.push(jogo)
}

public removerJogo(): void{
    console.log(this.Jogos)
    let titulo = rl.question('Insira o titulo para excluir o jogo: ')
    this.Jogos = this.Jogos.filter(jogo => jogo.titulo !== titulo)
}

public listarJogo(): void{
    console.log(this.Jogos)
}
}