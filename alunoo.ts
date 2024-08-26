export interface Aluno {
    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number);
    media(): number;
    final(): number;
}

export class Aluno implements Aluno {
    matricula: number
    nome: string
    notaProva1: number
    notaProva2: number
    notaTrabalho:number
    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number){
        this.matricula = matricula
        this.nome = nome
        this.notaProva1 = notaProva1
        this.notaProva2 = notaProva2
        this.notaProva2 = notaTrabalho
    }
    media():number{
        let media = (this.notaProva1 + this.notaProva2)/2
        return media
    }
    final():number{
        let notaFinal = (this.notaProva1 + this.notaProva2 + this.notaTrabalho)/3
        return notaFinal
    }
}


let aluninho = new Aluno(91,'pedrin',1,10,7)
console.log(aluninho)