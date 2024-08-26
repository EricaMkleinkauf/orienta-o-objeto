var rl = require('readline-sync')

export class Ponto2D {
    public x: number;
    public y: number;

    constructor() {
        this.x = 0;
        this.y = 0;
    }

    public getPonto2D(): void {
        console.log("Ponto 2D: (" + this.x + ", " + this.y + ")")
    }

    public setX(): void {
        this.x = rl.questionInt("Digite o valor de x: ");
    }

    public setY():void{
        this.y = rl.questionInt("Digite o valor de y: ");
    }

    mover(): void {
        this.x = rl.questionInt("Digite o valor de x: ");
        this.y = rl.questionInt("Digite o valor de y: ");
    }

    equals(outroPonto: Ponto2D): boolean {
        if (Math.sqrt(outroPonto.x - this.x) ** 2 + (outroPonto.y - this.y) ** 2) {
            return true;
        } else {
            return false;
        }
    }

    toString(): string{
        return `Ponto X: ${this.x}, Ponto y: ${this.y}`
    }

    distancia(outroPonto: Ponto2D): number{
        return Math.sqrt((outroPonto.x - this.x) ** 2 + (outroPonto.y - this.y)**2)
    }

    clone(): Ponto2D{
        let clone = new PontoD2comcoordenadas(this.x, this.y)
        return clone
    }
}





class PontoD2comcoordenadas extends Ponto2D {
    constructor(x: number, y: number) {
        super();
        this.x = x;
        this.y = y;
    }

    getPontoD2comcoordenadas(): void {
        console.log("Ponto2Dcomcoordenadas: (" + this.x + ", " + this.y + ")")
    }

    setPontoD2comcoordenadas(): void {
        this.x = rl.questionInt("Digite o valor de x: ");
        this.y = rl.questionInt("Digite o valor de y: ");
    }

    mover(): void {
        this.x = rl.questionInt("Digite o valor de x: ");
        this.y = rl.questionInt("Digite o valor de y: ");
    }
}





class PontoD2comcoordenadas2 extends Ponto2D {
    constructor(outroPonto: Ponto2D) {
        super();
        this.x = outroPonto.x;
    }
    getPontoD2comcoordenadas2(): void {
        console.log("Ponto2Dcomcoordenadas: (" + this.x + ", " + this.y + ")")
    }

    setPontoD2comcoordenadas2(): void {
        this.x = rl.questionInt("Digite o valor de x: ");
        this.y = rl.questionInt("Digite o valor de y: ");
    }

    mover(): void {
        this.x = rl.questionInt("Digite o valor de x: ");
        this.y = rl.questionInt("Digite o valor de y: ");
    }


}





