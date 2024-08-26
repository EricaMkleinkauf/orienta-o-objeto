var rl = require('readline-sync');

export class numeroComplexo {
    real: any
    imaginario: any
    constructor(real: any, imaginario: any) {
        this.real = real;
        this.imaginario = imaginario;
    }
    getNC(): void {
        console.log(`O número complexo é: ${this.real} + ${this.imaginario}`)
    }

    setNC(): void {
        this.real = rl.questionInt('adicione o numero real')
        this.imaginario = rl.questionInt('adicione o numero imaginario')
    }
    somar(outroComplexo: numeroComplexo): string {
        let real = this.real + outroComplexo.real
        let imaginario = this.imaginario + outroComplexo.imaginario    
        return `O resultado da soma é: ${real} + ${imaginario} i`
    }

    subtrair(outroComplexo: numeroComplexo): string {
        let real = this.real - outroComplexo.real
        let imaginario = this.imaginario - outroComplexo.imaginario
        return `O resultado da subtração é: ${real} + ${imaginario} i`
    }

    multiplicar(outroComplexo: numeroComplexo): string {
        let real = (this.real * outroComplexo.real) - (this.imaginario * outroComplexo.imaginario)
        let imaginario = (this.real * outroComplexo.imaginario) + (this.imaginario * outroComplexo.real)
        return `O resultado da multiplicação é: ${real} + ${imaginario} i`
    }

    dividir(outroComplexo: numeroComplexo): string {
        let real = ((this.real * outroComplexo.real) + (this.imaginario * outroComplexo.imaginario)) / (Math.pow(outroComplexo.real, 2 + Math.pow(outroComplexo.imaginario, 2)))
        let imaginario = ((this.imaginario * outroComplexo.real) - (this.real * outroComplexo.imaginario)) / (Math.pow(outroComplexo.real, 2 + Math.pow(outroComplexo.imaginario, 2)))
        return `O resultado da divisão é: ${real} + ${imaginario} i`

    }

    equals(outroComplexo: numeroComplexo): boolean {
        if ((Math.sqrt((outroComplexo.real - this.real) ** 2 + (outroComplexo.imaginario - this.imaginario) ** 2))==0){
            return true;
        } else {
            return false;
        }
    }

    toString(): string {
        return `(${this.real} + ${this.imaginario}i)`;
    }

    modulo(): number {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginario, 2));
    }
}