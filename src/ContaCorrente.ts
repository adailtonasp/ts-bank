import { Conta } from './Conta';
import {Cliente} from './Cliente';
import {Debito} from './Debito'
import {Credito} from './Credito'

class ContaCorrente extends Conta{
    private limite : number;

    constructor(limite : number, numero:string, cliente : Cliente,debito : Debito,credito: Credito){
        super(numero,cliente, debito,credito)
        this.limite = limite;
    }

    transferir(){

    }

    calcularSaldo() : number {
        return 0;
    }
}