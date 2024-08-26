let rl = require("readline-sync")
class Produto {
    nome:string
    preco:number
    marca:string
    constructor(nome:string,preco:number,marca:string) {
        this.nome = nome
        this.preco = preco
        this.marca = marca
        
    }
    lucro(){
        return (this.preco * 0.2) 
        
    }
    getprod(){
        console.log(`O produto ${this.nome} da marca ${this.marca} custa ${this.preco} e o lucro é ${this.lucro()}`)
    }
    setprod(){
        this.nome = rl.question("qual o nome do produto\n")
        this.preco = rl.questionInt("qual o valor\n")
        this.marca = rl.question("qual a marca\n")
    }

}
class Vend {
    produto:Produto
    quantidade:number
    valor:number
    data:string

    constructor(produto:Produto,quantidade:number,valor:number,data:string) {
        this.produto = produto
        this.quantidade = quantidade
        this.valor = valor
        this.data = data

        
    }
    valortotal(){
        return this.quantidade * this.valor
    }
    desconto(){
        return this.valortotal() /2
    }
    getvend():void{
        console.log(`O produto ${this.produto.nome} da marca ${this.produto.marca} custa 
        ${this.produto.preco} e o lucro é ${this.produto}lO valor total da venda é ${this.valortotal()}e o desconto é ${this.desconto()}`)
    }
    setprod(){
        this.produto = rl.question("qual o nome do produto")
        this.quantidade = rl.questionInt("qual o quantos tu comprou")
        this.valor = rl.question("qual o valor")
        this.data = rl.question("qual a data")
    }
}
class Loja {
    produto: Produto
    vendas:Vend
    total:number 

    constructor(produto:Produto,vendas:Vend,total:number) {
        this.produto = produto
        this.vendas = vendas
        this.total = total
        
    }
    mostrarTudo():void{
        console.log(`O produto ${this.produto.nome} da marca ${this.produto.marca} custa ${this.produto.preco} \n e o lucro é ${this.produto.preco} \n o valor total da venda é ${this.vendas.valortotal()}\n e o desconto é ${this.vendas.desconto()}`)
                }
  
    }

let produto = new Produto("tv 24 polegada",3000,"lg")
let venda = new Vend(produto,2,3000,"10/10/2020")
let loja = new Loja (produto,venda,10000)
