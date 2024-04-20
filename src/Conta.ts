import {Debito} from './Debito';
import {Credito} from './Credito';
import {Cliente} from './Cliente'

export class Conta{
    private numero : string;
    //relacao de composicao
    private cliente : Cliente
    protected debito : Debito;
    protected credito : Credito;


    constructor(numero:string, cliente: Cliente, debito : Debito, credito : Credito){
        this.numero = numero;
        cliente.setContas(this);
        this.cliente = cliente;
        this.credito = credito;
        this.debito = debito
    }

    getNumero() : string {
        return this.numero;
    }
}