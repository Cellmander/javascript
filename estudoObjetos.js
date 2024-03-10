var pessoa = {
  nome: "Luan",
  idade: 20,
  cidade: "São José",
  apresentacao: function () {
    console.log(
      `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e moro em ${this.cidade}`
    );
  },
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cidade);
pessoa.apresentacao();
