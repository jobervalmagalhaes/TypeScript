function exemploConst() {
    if (true) {
      const z = 30;
      z = 40; // Gera um erro: “cannot assign 'z' because it is a constant”
    }
    console.log(z); // Gera um erro: “cannot find name 'z'”
  }
exemploConst();