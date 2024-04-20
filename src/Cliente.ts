import {Endereco} from './Endereco';
import {Pessoa} from './Pessoa';

export class Cliente extends Pessoa{

    private vip : boolean;
    private enderecos : Endereco[] = [];

    constructor(vip: boolean, cpf: string, nome: string, telefone: string) {
        super(cpf,nome,telefone);
        this.vip = vip;
        
    }

    getVip(): boolean {
        return this.vip;
    }

    getEnderecos(): Endereco[] {
        return this.enderecos;
    }

    setEnderecos(endereco : Endereco) {
        this.enderecos.push(endereco);
    }

}