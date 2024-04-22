import {Cliente} from './src/Cliente';
import {ContaCorrente} from './src/ContaCorrente';

const cliente = new Cliente(false,"3423423","cliente 1","99999999999");

const contaCorrente = new ContaCorrente(10000,"42423423",cliente);

contaCorrente.depositar(100);
contaCorrente.depositar(100);
contaCorrente.depositar(100);
contaCorrente.sacar(50);

console.log(contaCorrente.calcularSaldo());

