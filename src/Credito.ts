export class Credito{
    private valor : number;
    private data : Date;

    constructor(valor : number){
        this.valor = valor;
        this.data = new Date();
    }

    getValor():number{
        return this.valor;
    }

    setValor(valor:number){
        this.valor = valor;
    }
}