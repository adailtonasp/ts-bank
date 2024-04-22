import { Conta } from './Conta';
import {Cliente} from './Cliente';
import {Debito} from './Debito';
import {Credito} from './Credito';

export class ContaPoupança extends Conta{

    constructor( numero:string, cliente : Cliente){
        super(numero,cliente)
    }

    calcularSaldo():number{
        return this.credito.getValor() - this.debito.getValor();
    }


}