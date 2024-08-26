export interface Voo {
    constructor(numeroVoo: string, data: string): void
    proximoLivre(): number;
    verifica(cadeira: number): boolean;
    ocupa(cadeira: number): boolean;
    vagas(): number;
    getVoo(): string;
    getData(): string;
    clone(): Voo;
}

export class Voo implements Voo {
    public numeroVoo: string
    public data: string
    public cadeira: Array<boolean> = this.criarVoo()
    constructor(numeroVoo: string, data: string) {
        this.cadeira = new Array(100).fill(false)
        this.numeroVoo = numeroVoo
        this.data = data
    }

    criarVoo(): Array<boolean> {
        let cadeira = []
        for (let i = 0; i <= 100; i++) {
            cadeira.push(true)
        }
        return cadeira

    }

    proximoLivre(): number {
        for (let i = 0; i < this.cadeira.length; i++) {
            if (!this.cadeira[i]) {
                return i + 1
            }
        }
        return -1

    }

    verifica(cadeira: number): boolean {
        return this.cadeira[cadeira - 1]

    }

    ocupa(cadeira: number): boolean {
        if (!this.verifica(cadeira)) {
            this.cadeira[cadeira - 1] = true
            return true
        } else {
            return false
        }

    }

    vagas(): number {
        return this.cadeira.filter((banco) => !banco).length
        
    }

    getVoo(): string {
       return this.numeroVoo

    }

    getData(): string {
        return this.data

    }

    clone(): Voo {
        let novoVoo = new Voo(this.numeroVoo, this.data)
        novoVoo.cadeira = this.cadeira
        return novoVoo

    }
}

