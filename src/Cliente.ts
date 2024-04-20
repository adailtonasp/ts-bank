import {Endereco} from './Endereco';
import {Pessoa} from './Pessoa';
import {IUsuario} from './IUsuario'
import {Conta} from './Conta';

export class Cliente extends Pessoa implements IUsuario{

    private vip : boolean;
    private enderecos : Endereco[];
    private contas : Conta[]

    constructor(vip: boolean, cpf: string, nome: string, telefone: string) {
        super(cpf,nome,telefone);
        this.enderecos = [];
        this.contas = [];
        this.vip = vip;
        
    }

    isVip() : boolean {
        return this.vip;
    }

    setVip(vipStatus : boolean){
        this.vip = vipStatus;
    }

    getEnderecos(): Endereco[] {
        return this.enderecos;
    }

    setEnderecos(endereco : Endereco) {
        this.enderecos.push(endereco);
    }

    setContas(conta : Conta){
        this.contas.push(conta);
    }
    //implementar a logica de autenticacao para Cliente
    autenticar(): boolean {
        return true;
    }

}