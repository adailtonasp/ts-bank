import {Cliente} from './src/Cliente';
import {Endereco} from './src/Endereco';

const cliente = new Cliente(false,"3423423","cliente 1","99999999999");

const endereco1 = new Endereco("4242423","rua 1, bairro 1",42342,"","cidade 1","uf1",cliente);
const endereco2 = new Endereco("4249898","rua 2, bairro 6",429989342,"","cidade 1","uf1",cliente);
const endereco3 = new Endereco("412323","rua 3, bairro 5",42123242,"","cidade 1","uf1",cliente);

cliente.setEnderecos(endereco1);
cliente.setEnderecos(endereco2);
cliente.setEnderecos(endereco3);

cliente.listarEnderecos();

