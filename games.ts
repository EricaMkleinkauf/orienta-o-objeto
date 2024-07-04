var Leitor = require('readline-sync')

class Jogos {
 titulo: string
protected genero: string
protected classificacaoEtaria: number
constructor(titulo: string, genero: string, classificacaoEtaria: number) {
    this.titulo = titulo
    this.genero = genero
    this.classificacaoEtaria = classificacaoEtaria
}


 public getDetalhes(): string {
    return(`Titulo: ${this.titulo} \nGenero: ${this.genero} \n Classificação: ${this.classificacaoEtaria}`)
 }


public setDuvidas(): void{
    let tituloUp = Leitor.question('Qual é o título do jogo?')
    let generoUp = Leitor.question('Qual é o gênero do jogo?')
    let classificacaoUp = Leitor.question('Qual é a classificação etária do jogo?')
    this.titulo = tituloUp
    this.genero = generoUp
    this.classificacaoEtaria = classificacaoUp
}
}

class JogoEletronico extends Jogos{
    protected plataforma: string
    super(titulo: string, genero: string, classificacaoEtaria: number, plataforma: string){
    this.titulo = titulo
    this.genero = genero
    this.classificacaoEtaria = classificacaoEtaria
    this.plataforma = plataforma

}

public getDetalhes(): string{
    return(`Titulo: ${this.titulo} \nGenero: ${this.genero} \n Classificação: ${this.classificacaoEtaria} \n Plataforma: ${this.plataforma}`)
}

 public setDuvidas(): void{
    let tituloUp = Leitor.question('Qual é o título do jogo?')
    let generoUp = Leitor.question('Qual é o gênero do jogo?')
    let classificacaoUp = Leitor.question('Qual é a classificação etária do jogo?')
    let plataformaUp = Leitor.question('Qual é a plataforma do jogo?')
    this.titulo = tituloUp
    this.genero = generoUp
    this.classificacaoEtaria = classificacaoUp
    this.plataforma = plataformaUp
}
}

class JogoDeTabuleiro extends Jogos{
    protected jogadores: number
    super(titulo: string, genero: string, classificacaoEtaria: number, jogadores:number){
    this.titulo = titulo
    this.genero = genero
    this.classificacaoEtaria = classificacaoEtaria
    this.jogadores = jogadores
    }

    public getDetalhes(): string {
        return(`Titulo: ${this.titulo} \nGenero: ${this.genero} \n Classificação: ${this.classificacaoEtaria} \n ${this.jogadores}`)
     }

     public setDuvidas(): void{
        let tituloUp = Leitor.question('Qual é o título do jogo?')
        let generoUp = Leitor.question('Qual é o gênero do jogo?')
        let classificacaoUp = Leitor.question('Qual é a classificação etária do jogo?')
        let jogadoresUp = Leitor.question('Qual é a quantidade de jogadores?')
        this.titulo = tituloUp
        this.genero = generoUp
        this.classificacaoEtaria = classificacaoUp
        this.jogadores = jogadoresUp
    }
}

class BibliotecaJogo {
    private jogos : Jogos[]

    adicionarJogo(jogos: Jogos): void{
    this.jogos.push(jogos)
    } 


    removerJogo(titulo: string): void{
    }

    listarJogos(): string {

}

