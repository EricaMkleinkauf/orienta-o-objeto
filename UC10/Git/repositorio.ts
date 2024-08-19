var rl = require('readline-sync')


export class Blobs {
    public codigo: string

    constructor(codigo: string) {
        this.codigo = codigo
    }
    public inserirCodigo(): void {
        let codigo = rl.question('Codigo desejado: ')
        this.codigo = codigo
    }
    public getCodigo(): void {
        console.log(`seu codigo é ${this.codigo}`)
    }
}

export class Commits {
    public commit: Array<any> = []
    public historicoCommits: Array<Blob> = []
    public inserirCommits(codigo: Blob): void {
        let inserir = rl.question('voce quer inserir o codigo: (s-n) ')
        if (inserir == 's') {
            this.commit.push(codigo)
        } else if (inserir === 'n') {
            console.log('codigo não inserido')
        } else {
            console.log('opção invalida')
        }
    }
    public getCommits(): void {
        let escolha = rl.questionInt('qual commits voce quer ver: (1)')
        console.log(`seu commits é ${this.commit.length - escolha}`)
    }
}

export class Branch {
    public branch: Array<Commits> = []

    public inserirCommits(codigo: Commits): void {
        let inserir = rl.question('voce quer inserir o commits na branch: (s-n) ')
        if (inserir == 's') {
            this.branch.push(codigo)
        } else if (inserir === 'n') {
            console.log('codigo não inserido')
        } else {
            console.log('opção invalida')
        }
    }
    public getBranch(): void {
        let escolha = rl.questionInt('qual branch voce quer ver: (1)')
        console.log(`seu branch é ${this.branch.length - escolha}`)
    }

    public getHead(): void {
        console.log(`seu head é ${this.branch.length - 1}`)
    }
}

export class Repositorio {
    public branch: Branch[] = []

    setRepo(branch: Branch): void {
        this.branch.push(branch)
    }

}