import { Conta } from './Conta';
import {Cliente} from './Cliente';
import {Debito} from './Debito';
import {Credito} from './Credito';

class ContaPoupança extends Conta{

    constructor( numero:string, cliente : Cliente,debito : Debito,credito: Credito){
        super(numero,cliente, debito,credito)
    }

    calcularSaldo():number{
        return this.credito.getValor() - this.debito.getValor();
    }


}