"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var rl = require('readline-sync');
var Aluno = /** @class */ (function () {
    function Aluno(matricula, nome, notaProva1, notaProva2, notaTrabalho) {
        this.matricula = matricula;
        this.nome = nome;
        this.notaProva1 = notaProva1;
        this.notaProva2 = notaProva2;
        this.notaTrabalho = notaTrabalho;
    }
    Aluno.prototype.media = function () {
        var media = (this.notaProva1 + this.notaProva2) / 2;
        return media;
    };
    Aluno.prototype.notaFinal = function () {
        var notaFinal = (this.media() + this.notaTrabalho) / 2;
        return notaFinal;
    };
    Aluno.prototype.getAluno = function () {
        console.log("Nome: ".concat(this.nome, ", Matricula: ").concat(this.matricula, ", Nota 1Prova: ").concat(this.notaProva1, ", Nota 2Prova: ").concat(this.notaProva2, " , Nota Trabalho: ").concat(this.notaTrabalho));
    };
    Aluno.prototype.setAluno = function () {
        var nomeSIM = rl.question("Digite o nome do Aluno: ");
        var matriculaSIM = rl.questionInt("Digite sua matricula: ");
        var prova1SIM = rl.questionInt("Digite a sua 1Nota: ");
        var prova2SIM = rl.questionInt("Digite a sua 2Nota: ");
        var trabalhoSIM = rl.questionInt("Digite a nota do trabalho: ");
        this.nome = nomeSIM;
        this.matricula = matriculaSIM;
        this.notaProva1 = prova1SIM;
        this.notaProva2 = prova2SIM;
        this.notaTrabalho = trabalhoSIM;
    };
    return Aluno;
}());
exports.Aluno = Aluno;
