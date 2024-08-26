import { numeroComplexo } from "./numeroComplexo"

let rl = require('readline-sync')
let option = rl.questionInt('Escolha:')
let teste = new numeroComplexo(0, 0)
let teste2 = new numeroComplexo(0, 0)
while (true) {
    console.log(
        `
        0 - Finalizar
        1- gets
        2 sets
        3 - somar
        4 - subtrair
        5 - multiplicar
        6 - dividir
        7 - equals
        8 - mostrar em texto
        9 - modulo   `
    );

    switch (option) {
        case 1:
            teste.getNC()
            break
        case 2:
            teste.setNC()
            break
        case 3:
            console.log(teste.somar(teste2));
            break
        case 4:
            console.log(teste.subtrair(teste2));
            break
        case 5:
            console.log(teste.multiplicar(teste2));
            break
        case 6:
            console.log(teste.dividir(teste2))
            break
        case 7:
            console.log(teste.equals(teste2));
            break
        case 8:
            console.log(teste.toString);
            break
        case 9:
            console.log(teste.modulo);
            break
        case 0:
            process.exit(0)
        default:
            console.log('Opcao invalida');
            break
    }
}