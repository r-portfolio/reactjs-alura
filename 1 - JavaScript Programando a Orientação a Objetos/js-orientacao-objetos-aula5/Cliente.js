export class Cliente {
    nome;
    _cpf; // atributo privado

    //metodo acessor
    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}
