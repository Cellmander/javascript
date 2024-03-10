var pessoa = {
    nome: "Carol",
    idade: 28,
    profissao: "Programadora"
};

var entradas = Object.entries(pessoa);

for (var [chave, valor] of entradas) {
    console.log(chave + ": " + valor);
}
