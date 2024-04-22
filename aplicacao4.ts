import {Cliente} from './src/Cliente';
import {ContaCorrente} from './src/ContaCorrente';
import {ContaPoupança} from './src/ContaPoupança';

const cliente = new Cliente(false,"3423423","cliente 1","99999999999");

const contaCorrente = new ContaCorrente(10000,"42423423",cliente);

contaCorrente.depositar(1000);

const cliente2 = new Cliente(false,"3434342","cliente 2","999999999999999");

const contaPoupanca = new ContaPoupança("2332323",cliente2);

contaPoupanca.depositar(1000);

contaCorrente.transferir(contaPoupanca,500);

console.log("saldo da conta poupança",contaPoupanca.calcularSaldo());   
console.log("saldo da conta corrente",contaCorrente.calcularSaldo());
