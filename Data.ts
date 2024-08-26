export interface Data {
    constructor(dia: number, mes: number, ano: number): void;
    compara(outraData: Data): void;
    getDia(): number;
    getMes(): number;
    getMesExtenso(): void;
    getAno(): number;
    isBissexto(): void;
    clone(): void;
}

export class Data implements Data {
    public dia: number
    public mes: number
    public ano: number
    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

    compara(outraData: Data): void {
        if (this.ano === outraData.ano) {
            console.log("O ano sao iguais")
        }
        else {
            console.log("o ano sao diferentes")
        }

        if (this.mes === outraData.mes) {
            console.log("O mes sao iguais")
        }
        else {
            console.log("o mes sao diferentes")
        }

        if (this.dia === outraData.dia) {
            console.log("O dia sao iguais")
        }
        else {
            console.log("o dia sao diferentes")
        }

    }

    getDia(): number {
        return this.dia
    }

    getMes(): number {
        return this.mes
    }

    getMesExtenso(): void {
        switch (this.mes) {
            case 1:
                console.log("Janeiro")
                break
            case 2:
                console.log("Fevereiro")
                break
            case 3:
                console.log("Março")
                break
            case 4:
                console.log("Abril")
                break
            case 5:
                console.log("maio")
                break
            case 6:
                console.log("junho")
                break
            case 7:
                console.log("julho")
                break
            case 8:
                console.log("agosto")
                break
            case 9:
                console.log("setembro")
                break
            case 10:
                console.log("Outubro")
                break
            case 11:
                console.log("Novembro")
                break
            case 12:
                console.log("Dezembro")
                break
            default:
                console.log("Mes invalido")
                break
        }
    }

    getAno(): number {
        return this.ano
    }

    isBissexto(): void {

        if (this.ano == 2000 || this.ano == 1000 || this.ano == 0) {
            console.log("o ano e bissexto")
        } else if (this.ano % 4 === 0 && this.ano % 100 != 0) {
            console.log("o ano e bissexto")
        }
        else {
            console.log("o ano nao e bissexto")
        }

    }

    clone(): Data {
        return new Data(this.dia, this.mes, this.ano)
    }
}

