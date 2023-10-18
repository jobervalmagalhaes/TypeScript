function exemploVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // Sem erro, já que var possui escopo da função
}
exemploVar();