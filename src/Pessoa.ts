export class Pessoa{
    private cpf : string;
    private nome : string;
    private telefone : string;

    constructor(cpf: string, nome: string, telefone: string) {
        this.cpf = cpf;
        this.nome = nome;
        this.telefone = telefone;
    }

    getCPF(): string {
        return this.cpf;
    }

    getNome(): string {
        return this.nome;
    }

    getTelefone(): string {
        return this.telefone;
    }

}
