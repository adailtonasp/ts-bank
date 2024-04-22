import {Pessoa} from './Pessoa'
import {IUsuario} from './IUsuario'

export class Funcionario extends Pessoa implements IUsuario{
    private salario : number;

    constructor(salario:number,cpf:string,nome:string,telefone:string){
        super(cpf,nome,telefone)
        this.salario = salario;
    }

    getSalario() : number{
        return this.salario;
    }

    //implementar a logica de autenticacao para funcionario
    autenticar(): boolean {
        return true;
    }
}