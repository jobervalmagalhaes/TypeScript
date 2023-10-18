// Definindo uma interface "Animal" que exige a implementação de um método "fazerSom"
interface Animal {
  nome: string; // Adicionando a propriedade "nome"
  fazerSom(): void; // Adicionando a propriedade "fazerSom"
}

// Classe "Cachorro" que implementa a interface "Animal"
class Cachorro implements Animal {
  nome: string = "Cachorro";
  fazerSom() {
    console.log("O cachorro late!");
  }
}

// Objeto "gato" que segue a interface "Animal"
const gato: Animal = {
  nome: "Gato",
  fazerSom() {
    console.log("O gato mia!");
  }
};

// Chamando o método "fazerSom" nos objetos
const meuCachorro = new Cachorro();
meuCachorro.fazerSom();

gato.fazerSom();