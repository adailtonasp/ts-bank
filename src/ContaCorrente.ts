import { Conta } from './Conta';
import {Cliente} from './Cliente';

export class ContaCorrente extends Conta{
    private limite : number;

    constructor(limite : number, numero:string, cliente : Cliente){
        super(numero,cliente)
        this.limite = limite;
    }

    setLimite(valor : number){
        this.limite = valor;
    }
    
    calcularSaldo():number{
        return this.credito.getValor() - this.debito.getValor() + this.limite;
    }

    verificarLimite(valor:number) : boolean{
        if(this.calcularSaldo() - valor < 0){
            console.log("limite reprovado");
            return false;
        }
        console.log("limite aprovado");
        return true;
    }

    transferir(contaDestino:Conta,valor: number) : boolean{
        if(this.verificarLimite(valor)){
            this.sacar(valor);
            contaDestino.depositar(valor)
            return true;
        }
        return false;   
    }

}