class Pessoa {
  nome: string; // Propriedade
  idade: number; // Propriedade

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}

const pessoa1 = new Pessoa("Juliana", 36);
console.log(pessoa1.nome); // Acessando a propriedade "nome"
console.log(pessoa1.idade); // Acessando a propriedade "idade"