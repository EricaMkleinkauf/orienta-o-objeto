"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Notas_1 = require("./Notas");
var reader = require('readline-sync');
var menu = true;
var alunoExiste = false;
var alunoNovo = new Notas_1.Aluno(0, '', 0, 0, 0);
while (menu) {
    console.log("\n        1 - Cadastrar Nome e Matr\u00EDcula (Aluno)\n        2 - Cadastrar Notas (Aluno)\n        3 - Verificar M\u00E9dia das Provas (Aluno)\n        4 - Verificar M\u00E9dia Final (Aluno)\n        0 - Sair\n        ");
    var option = reader.questionInt("Escolha: ");
    switch (option) {
        case 1:
            var nomeAluno = reader.question("Insira o nome do aluno: ");
            var matriculaAluno = reader.questionInt("Nº Matrícula: ");
            alunoNovo = inserirNotas(nomeAluno, matriculaAluno);
            alunoExiste = true;
            break;
        case 2:
            if (alunoExiste) {
                alunoNovo = inserirNotas(nomeAluno, matriculaAluno);
            }
            else {
                throw new Error("O aluno n\u00E3o foi criado");
            }
            break;
        case 3:
            alunoNovo.media();
            break;
        case 4:
            alunoNovo.notaFinal();
            break;
        case 0:
            process.exit(0);
        default:
            console.log("Essa op\u00E7\u00E3o n\u00E3o existe");
            break;
    }
}
function inserirNotas(nome, matricula) {
    var prova1 = reader.questionInt("Insira a nota da prova 1: ");
    var prova2 = reader.questionInt("Insira a nota da prova 2: ");
    var trabalho = reader.questionInt("Insira a nota do trabalho: ");
    var alunoNovo = new Notas_1.Aluno(matricula, nome, prova1, prova2, trabalho);
    return alunoNovo;
}
