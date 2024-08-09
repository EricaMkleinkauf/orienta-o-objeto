import { log } from "console";
import { convertToObject } from "../node_modules/typescript/lib/typescript";

var rl = require('readline-sync')

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
    public compara(outraData: Data): void {
        if (this.dia === outraData.dia) {
            console.log('os dias são iguais');
        } else {
            console.log('os dias são diferentes')
        }
        if (this.mes === outraData.mes) {
            console.log('os meses são iguais');
        } else {
            console.log('os meses são diferentes')
        }
        if (this.ano === outraData.ano) {
            console.log('os anos são iguais');
        } else {
            console.log('os anos são diferentes')
        }
    }

    public getDia(): number {
        return this.dia
    }

    public getMes(): number {
        return this.mes
    }

    public getMesExtenso(): void {
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
                console.log('mes invalido')
                break
        }
    }

    public getAno(): number {
        return this.ano
    }

    public isBissexto(): void {
        if (this.ano == 2000 || this.ano == 1000 || this.ano == 0){
            console.log('o ano é bissexto')
        }else if (this.ano % 4 == 0 && this.ano % 100 != 0){
            console.log('ano é bissexto')
        } else {
            console.log('ano não é bissexto')
        }
    }

    public clone(): Data {
        return new Data(this.dia, this.mes, this.ano)
    }
}

let dataUm = new Data(10, 11, 1998)
let dataDois = new Data (20,12,2009)
let dataTres = dataUm.clone()

console.log(dataTres)
console.log('comprando datas')

dataUm.compara(dataUm)
dataDois.compara(dataDois)

console.log('mes extenso: ')
dataDois.getMesExtenso()

console.log('testando ano bissexto')
dataUm.isBissexto()
dataDois.isBissexto()
