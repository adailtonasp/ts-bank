import {Cliente} from './Cliente'

export class Endereco{
    private cep : string;
    private logradouro: string;
    private numero: number;
    private complemento : string;
    private cidade : string;
    private uf : string;
    
    private cliente : Cliente;

    constructor(cep: string, logradouro: string, numero: number, complemento: string, cidade: string, uf: string,cliente : Cliente) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
        this.cliente = cliente;
        this.cliente.setEnderecos(this);
    }

    getCEP(): string {
        return this.cep;
    }

    getLogradouro(): string {
        return this.logradouro;
    }

    getNumero(): number {
        return this.numero;
    }

    getComplemento(): string {
        return this.complemento;
    }

    getCidade(): string {
        return this.cidade;
    }

    getUf(): string {
        return this.uf;
    }

}