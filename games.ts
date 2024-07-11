var rl = require('readline-sync')

export interface Jogointerface{
titulo: string
genero: string
classificacaoEtaria: number
getDetalhes(): void
setDuvidas(): void
}


export class Jogo implements Jogointerface{
public titulo: string
public genero: string
public classificacaoEtaria: number
constructor(titulo: string, genero: string, classificacaoEtaria: number) {
    this.titulo = titulo
    this.genero = genero
    this.classificacaoEtaria = classificacaoEtaria
}


 public getDetalhes(): string {
    return(`Titulo: ${this.titulo} \nGenero: ${this.genero} \n Classificação: ${this.classificacaoEtaria}`)
 }


public setDuvidas(): void{
    let tituloUp = rl.question('Qual é o título do jogo?')
    let generoUp = rl.question('Qual é o gênero do jogo?')
    let classificacaoUp = rl.question('Qual é a classificação etária do jogo?')
    this.titulo = tituloUp
    this.genero = generoUp
    this.classificacaoEtaria = classificacaoUp
}
}



export interface JogoEletronicoInterface {
titulo: string
genero: string
classificacaoEtaria: number
getDetalhes(): void
setDuvidas(): void
}

export class JogoEletronico extends Jogo implements JogoEletronicoInterface{

    protected plataforma: string
    constructor(titulo: string, genero: string, classificacaoEtaria: number, plataforma: string){
    
        super(titulo, genero, classificacaoEtaria)

    this.plataforma = plataforma

}

public getDetalhes(): string{
    return(`Titulo: ${this.titulo} \nGenero: ${this.genero} \n Classificação: ${this.classificacaoEtaria} \n Plataforma: ${this.plataforma}`)
}

 public setDuvidas(): void{
    let tituloUp = rl.question('Qual é o título do jogo?')
    let generoUp = rl.question('Qual é o gênero do jogo?')
    let classificacaoUp = rl.question('Qual é a classificação etária do jogo?')
    let plataformaUp = rl.question('Qual é a plataforma do jogo?')
    this.titulo = tituloUp
    this.genero = generoUp
    this.classificacaoEtaria = classificacaoUp
    this.plataforma = plataformaUp
}
}


export interface JogoDeTabuleiroInterface{
titulo: string
genero: string
classificacaoEtaria: number
getDetalhes(): void
setDuvidas(): void
}

export class JogoDeTabuleiro extends Jogo implements JogoDeTabuleiroInterface{
    protected jogadores: number
   constructor(titulo: string, genero: string, classificacaoEtaria: number, jogadores:number){
   
    super(titulo, genero, classificacaoEtaria)

    this.jogadores = jogadores
    
    }

    public getDetalhes(): string {
        return(`Titulo: ${this.titulo} \nGenero: ${this.genero} \n Classificação: ${this.classificacaoEtaria} \n ${this.jogadores}`)
     }

     public setDuvidas(): void{
        let tituloUp = rl.question('Qual é o título do jogo?')
        let generoUp = rl.question('Qual é o gênero do jogo?')
        let classificacaoUp = rl.question('Qual é a classificação etária do jogo?')
        let jogadoresUp = rl.question('Qual é a quantidade de jogadores?')
        this.titulo = tituloUp
        this.genero = generoUp
        this.classificacaoEtaria = classificacaoUp
        this.jogadores = jogadoresUp
    }


}


export interface BibliotecaDeJogosInterface{
    jogos: Jogo[]
    addJogo(jogo: Jogo): void
    removerJogo(): void
    listarJogo(): void
}


export class BibliotecaDeJogos implements BibliotecaDeJogosInterface{
    jogos: Jogo[]
    constructor(){
        this.jogos = []
}

public addJogo(jogo: Jogo): void{
    this.jogos.push(jogo)
}

public removerJogo(): void{
    console.log(this.jogos)
    let titulo = rl.question('Insira o titulo para excluir o jogo: ')
    this.jogos = this.jogos.filter(jogo => jogo.titulo !== titulo)
}

public listarJogo(): void{
    console.log(this.jogos)
}
}

let jogoUm = new Jogo('banana','chiclete',18) 
let jogoDois = new Jogo('free fire','acao',12)
let jogoTres = new Jogo('fortinite','acao',16)  

let estante = new BibliotecaDeJogos()

estante.addJogo(jogoUm)
estante.addJogo(jogoDois)
estante.addJogo(jogoTres)




