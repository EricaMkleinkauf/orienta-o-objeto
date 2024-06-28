var Leitor = require('readline-sync')

class Produto {
    nome: string
    preço: number
    marca: string
    compraPreço : number
    constructor(nome: string, preço:number, marca: string, compraPreço: number){
        this.nome = nome
        this.preço = preço
        this.marca = marca
        this.compraPreço = compraPreço
    }

    calcularLucro(): void{
        let lucro = (this.preço - this.compraPreço) 
        console.log('esse é seu lucro:', lucro)
    }

    getProduto(): void{
        console.log(`Nome: ${this.nome} \nPreço: ${this.preço} \n marca:${this.marca}`)
    }

    setProduto(): void{
        let nomeUp = Leitor.question('qual é o nome do produto?')
        let precoUp = Leitor.questionInt('qual é o preco do produto?')
        let marcaUp = Leitor.question('qual é a marca do produto?')
        let compraPrecoUp = Leitor.questionInt('qual é o preco de compra do produto?')
        this.nome = nomeUp
        this.preço = precoUp
        this.marca = marcaUp
        this.compraPreço = compraPrecoUp
    }
}

let minhaTv = new Produto ('televisao', 4.000, 'samsung', 2.800)
let meuCelular = new Produto ('celular', 2.000, 'motorola', 1.450 )
let meuNotebook = new Produto('notebook', 4.500, 'samsung', 4.000)


class Venda {
    produto: Produto
    quantidade: number
    valor: number
    data: string
    constructor(produto: Produto, quantidade: number, valor: number, data: string){
        this.produto = produto
        this.quantidade = quantidade
        this.valor = valor 
        this.data = data
    }

    valorTotal(): void{
        this.valor = this.valor * this.quantidade
        console.log('o valor dessa compra foi de:', this.valor)
    }

    descontos(): void{
        this.valor = this.valor - (this.valor * 0.1)
        console.log('o desconto dessa compra foi o total de:', this.valor )
    }

    informacoesVenda(): void{
        console.log(`Produto: ${this.produto} \nQuantidade: ${this.quantidade}`)
}

    getVendas(): void{
        console.log(`Data: ${this.data} \nValor: ${this.valor} \n quantidade: ${this.quantidade} \n produto:${this.produto.nome}`)
    }

    setVenda(): void{
        let produtoUp = Leitor.question('qual é o nome do produto?')
        let quantidadeUp = Leitor.questionInt('qual é a quantidade do produto?')
        let valorUp = Leitor.questionInt('qual é o valor do produto?')
        let dataUp = Leitor.question('qual é a data da compra?')
        this.produto = produtoUp
        this.quantidade = quantidadeUp
        this.valor = valorUp
        this.data = dataUp

    }
}



let tvVenda = new Venda(minhaTv, 1, minhaTv.preço, '27/06/2024') 
let celVenda = new Venda (meuCelular, 2, meuCelular.preço * 2, "27/06/2024")
let noteVenda = new Venda (meuNotebook, 2, meuNotebook.preço * 2, "27/06/2024")

meuCelular.getProduto()
meuCelular.calcularLucro()
celVenda.getVendas()
celVenda.valorTotal()

