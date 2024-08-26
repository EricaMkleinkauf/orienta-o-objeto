import { Voo } from "./Voo";
import { Passageiro } from "./Passageiro"
var rl = require('readline-sync')
let vooo = new Voo('45555', '2222-2-22')
while (true) {
    console.log(`
 1 - Cadastrar passa geiro
 2 - Verificar próxima cadeira livre
 3 - Verificar cadeira
 4 - Ocupar cadeira
 5 - Verificar Vagas
 6 - Verificar Vôo
 7 - Verificar data de Vôo
 8 - Clonar Vôo
 0 - Sair
  `)
    let option = rl.questionInt('escolher')
    switch (option) {
        case 1:
            set()
            break
        case 2:
            vooo.proximoLivre()
            break
        case 3:
            let verificaCadeira = rl.questionInt('escolha a cadeira')
            console.log(vooo.verifica(verificaCadeira));
            break
        case 4:
            let ocupaCadeira = rl.questionInt('escolha a cadeira')
            vooo.ocupa(ocupaCadeira)
            break
        case 5:
            console.log(`tem ${vooo.vagas()}vagas livres`);
            
            break
        case 6:
            console.log(vooo.data)
            console.log(vooo.numeroVoo)
            console.log(vooo.vagas())
            break
        case 7:
            console.log(vooo.data)
            break
        case 8:
            let vooDois = vooo.clone()
            console.log(vooDois);
            
            break
        case 0:
            process.exit(0)
    }
}
function set(): Passageiro {
    let nomeSet = rl.question('nome : ')
    let idadeSet = rl.questionInt('idade: ')
    let cpfSet = rl.questionInt('cpf:  ')
    let voo = new Passageiro(nomeSet, idadeSet, cpfSet)
    return voo
}
function vagasLivre() {
    for (let i = 0; i < 100; i++) {
        if (vooo.cadeira[i] == 1) {
            console.log(i + 1);
        }
    }
}