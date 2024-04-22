import {Cliente} from './src/Cliente';
import {ContaCorrente} from './src/ContaCorrente';
import {ContaPoupança} from './src/ContaPoupança';

const cliente = new Cliente(false,"3423423","cliente 1","99999999999");

const contaCorrente = new ContaCorrente(10000,"42423423",cliente);

contaCorrente.depositar(300);

contaCorrente.setLimite(100);

const cliente2 = new Cliente(false,"3434342","cliente 2","999999999999999");

const contaCorrente2 = new ContaCorrente(10000,"2332323",cliente2);

contaCorrente2.depositar(100);

contaCorrente.transferir(contaCorrente2,500);

console.log("saldo da conta corrente",contaCorrente.calcularSaldo());   
console.log("saldo da conta corrente2",contaCorrente2.calcularSaldo());
