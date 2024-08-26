import { Data } from "./Data";


let leitor = require("readline-sync")
let menu: boolean = true
while (menu) {
    console.log(` Menu de Opções:
    1 - criar a data;
    2 - comparar datas;
    3 - print do dia / mes / ano;
    4 - verificar se é bissexto;
    5 - clonar data.
    6 - sair `)

   
    let opcion = leitor.questionInt("Escolha: ")

    switch (opcion) {
        case 1:
            let dia = leitor.question("Dia: ")
            let mes = leitor.question("Mês: ")
            let ano = leitor.question("Ano: ")
            let dataa = new Data(dia, mes, ano)
            console.log(dataa)
            break
        case 2:
            console.log(dataa);
            
            let data2 = new Data(leitor.question("Dia: "), leitor.question("Mês: "), leitor.question("Ano: "));
            dataa.compara(data2)
            break
        case 3: 
            console.log(dataa)
            break
        case 4:
            dataa.isBissexto()
            break
        case 5:
            let dataClone = dataa.clone()
            console.log(dataClone);
            break
        case 6:
            process.exit(0)
            break
        default:
            console.log("Opção invalida")
            break

    }
}

