type Gabarito = Array<string>

export interface Prova {
    constructor(gabarito: Gabarito): void;
    respostaAluno(resposta: string): void;
    acertos(): number;
    nota(): number;
    maior(outraProva: Prova): number;
}

export class Prova implements Prova{
    private gabarito: Gabarito
    private respostasAluno: Array<string>

    constructor(gabarito: Gabarito){
        if(gabarito.length !== 15){
            throw new Error("Gabarito deve ter 15 questões");
        }
        this.gabarito = gabarito
        this.respostasAluno = Array(15).fill('')
    }

    public respostaAluno(resposta: string): void{
        if(this.respostasAluno.length >= 15){
            throw new Error("Você já respondeu todas as questões");
        }
        this.respostasAluno.push(resposta)
    }

    public acertos(): number{
        let acertos = 0
        for(let i = 0; i < 15; i++ ){
            if(this.respostasAluno[i] === this.gabarito[i]){
                acertos++
        }
    }
    return acertos
}
    public nota():number{
        let nota = 0
        for(let i = 0; i < 10; i++){
        if (this.respostasAluno[i] === this.gabarito[i]){
            nota += 0.5
        }
    }
    for (let i = 10; i < 15; i++){
        if (this.respostasAluno[i] === this.gabarito[i]){
            nota += 1
    }
    }
     return nota 
}

    public maior (outraProva: Prova): number{
        return Math.max (this.nota(), outraProva.nota())
    }
}

