import {Debito} from './Debito';
import {Credito} from './Credito';
import {Cliente} from './Cliente'

export abstract class Conta{
    private numero : string;
    //relacao de composicao
    private cliente : Cliente
    protected debito : Debito;
    protected credito : Credito;


    constructor(numero:string, cliente: Cliente){
        this.numero = numero;
        cliente.setContas(this);
        this.cliente = cliente;
        this.credito = new Credito(0);
        this.debito = new Debito(0);
        
    }

    getNumero() : string {
        return this.numero;
    }

    depositar(valor : number){
        this.credito = new Credito(this.credito.getValor() + valor);
    }

    sacar(valor : number){
        this.debito = new Debito(this.debito.getValor() + valor);
    }
}   