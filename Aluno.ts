var rl = require('readline-sync');

export interface Aluno {
    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number): void;
    media(): number;
    final(): number;
}


export class Aluno implements Aluno{
    matricula: number
    nome: string
    notaProva1: number
    notaProva2: number
    notaTrabalho: number
    
    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number){
        this.matricula = matricula
        this.nome = nome
        this.notaProva1 = notaProva1
        this.notaProva2 = notaProva2
        this.notaTrabalho = notaTrabalho
    }

    media(): number {
        let media = (this.notaProva1 + this.notaProva2)/2
        return media
    }

    notaFinal(): number{
        let notaFinal = (this.media() + this.notaTrabalho)/2
        return notaFinal
    }

    getAluno(): void{
        console.log(`Nome: ${this.nome}, Matricula: ${this.matricula}, Nota 1Prova: ${this.notaProva1}, Nota 2Prova: ${this.notaProva2} , Nota Trabalho: ${this.notaTrabalho}`)
    }
    setAluno(): void{
        let nomeSIM = rl.question("Digite o nome do Aluno: ")
        let matriculaSIM = rl.questionInt("Digite sua matricula: ") 
        let prova1SIM = rl.questionInt("Digite a sua 1Nota: ")
        let prova2SIM = rl.questionInt("Digite a sua 2Nota: ")
        let trabalhoSIM = rl.questionInt("Digite a nota do trabalho: ")
        this.nome = nomeSIM
        this.matricula = matriculaSIM
        this.notaProva1 = prova1SIM
        this.notaProva2 = prova2SIM
        this.notaTrabalho = trabalhoSIM
    }
}

let erica = new Aluno(1, 'erica', 8, 9, 5)
console.log(erica.media())


let menu = true
while(menu){
let notas = rl.questionInt
switch(notas){
    case 1:
        let matricula = rl.questionInt('digite a matricula: ')
        let nome = rl.question('digite o nome: ')
        let alunonovo = new Aluno(matricula, nome, 0, 0, 0)
    break;
    case 2:
        let notaProva1 = rl.questionInt('digite a nota da prova 1:')
        let notaProva2 = rl.questionInt('digite a nota da prova 2:')
        let notaTrabalho = rl.questionInt('digite a nota do trabalho: ')
        let aluno = new Aluno(matricula, nome, notaProva1, notaProva2, notaTrabalho)
    break;
    case 3:
        let media = rl.questionInt('digite a media: ')
    break;
    case 4:
        let notaFinal = rl.questionInt('digite a nota final: ')
        break;
}
}