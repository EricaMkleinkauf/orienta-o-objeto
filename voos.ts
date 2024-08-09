
import { Data } from "./calendario";

export interface Voo {
    constructor(numeroVoo: string, data: string): void;
    proximoLivre(): void;
    verifica(cadeira: number): void;
    ocupa(cadeira: number): void;
    vagas(): void;
    getVoo(): void;
    getData(): void;
    clone(): Voo;
}

export class Voo implements Voo {
    public data: string;
    public numVoo: number;
    public vaga: number;
    private cadeira: Array<number> = this.criarVoo()
    constructor(data: string, numVoo: number, vaga: number) {
        this.data = data;
        this.numVoo = numVoo;
        this.vaga = vaga;
    }

    public criarVoo(): Array<number> {
        let cadeiras = []
        for (let i = 0; i < 101; i++) {
            cadeiras.push(i)
        }
        return cadeiras
    }

    public proximoLivre(): void {
        for (let i = 0; i <= 100; i++) {
            if (this.cadeira[i] == 0) {
                console.log(i + 1)
            }
        }
    }

    public verifica(cadeira: number): void {
        if (this.cadeira[cadeira] == 0) {
            console.log(true)
        }
    }

    ocupa(acento: number): void {
        this.cadeira[acento] = 1
    }

    vagas(): void {
        let cont = 0
        for (let i = 0; i < 100; i++) {
            if (this.cadeira[i] == 0) {
                cont += 1
            }
        }   
    }
    
    getVoo(): Number{
        return this.numVoo
    }
    getData(): string{
        return this.data
    }
    clone(): Voo{
        return new Voo(this.data, this.numVoo, this.vaga)
    }
    }


let vooUm = new Voo('12/02/2024', 3, 79)
console.log(vooUm.clone())
vooUm.proximoLivre()



