class Soma {
  somar(a: number, b: number): number {
    return a + b; // Método
  }
}

const soma1 = new Soma();
const resultado = soma1.somar(5, 3); // Chamando o método "somar"
console.log(resultado); // Exibindo o resultado